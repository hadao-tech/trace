import { PrismaClient, UnitStatus, VerificationVerdict } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  await db.verificationLog.deleteMany();
  await db.suspiciousReport.deleteMany();
  await db.traceEvent.deleteMany();
  await db.productUnit.deleteMany();
  await db.product.deleteMany();
  await db.brand.deleteMany();

  const brand = await db.brand.create({ data: { name: "An Việt Origin", website: "https://example.vn" } });
  const products = await Promise.all([
    db.product.create({ data: { sku: "AV-HONEY-500", name: "Mật ong rừng nguyên chất", description: "Mật ong thu hoạch bền vững, đóng chai tại Việt Nam.", category: "Thực phẩm", origin: "Hà Giang, Việt Nam", manufacturer: "HTX An Việt", imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80", brandId: brand.id } }),
    db.product.create({ data: { sku: "AV-COFFEE-250", name: "Cà phê Arabica đặc sản", description: "Cà phê rang vừa, truy xuất từ nông trại đến thành phẩm.", category: "Đồ uống", origin: "Đà Lạt, Việt Nam", manufacturer: "An Việt Roastery", imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80", brandId: brand.id } })
  ]);

  const cases = [
    { token: "8F7K29ABC", serialNumber: "AVH-2026-0001", batchNumber: "HONEY-2608", status: UnitStatus.ACTIVE, riskFlag: false, scanThreshold: 10, productId: products[0].id },
    { token: "RISK88XYZ", serialNumber: "AVH-2026-0002", batchNumber: "HONEY-2608", status: UnitStatus.ACTIVE, riskFlag: true, scanThreshold: 10, productId: products[0].id },
    { token: "OFF000TAG", serialNumber: "AVH-2026-0003", batchNumber: "HONEY-2607", status: UnitStatus.DISABLED, riskFlag: false, scanThreshold: 10, productId: products[0].id },
    { token: "HOTSCAN999", serialNumber: "AVC-2026-0042", batchNumber: "COFFEE-2608", status: UnitStatus.ACTIVE, riskFlag: false, scanThreshold: 3, productId: products[1].id },
    { token: "TRACE5GOOD", serialNumber: "AVC-2026-0043", batchNumber: "COFFEE-2608", status: UnitStatus.ACTIVE, riskFlag: false, scanThreshold: 10, productId: products[1].id }
  ];

  for (const item of cases) {
    const unit = await db.productUnit.create({ data: { ...item, manufacturedAt: new Date("2026-06-15"), expiresAt: new Date("2028-06-15") } });
    await db.traceEvent.createMany({ data: [
      { unitId: unit.id, type: "ORIGIN", title: "Thu hoạch nguyên liệu", description: "Nguyên liệu đạt tiêu chuẩn đầu vào.", location: item.productId === products[0].id ? "Hà Giang" : "Đà Lạt", occurredAt: new Date("2026-05-20") },
      { unitId: unit.id, type: "PRODUCTION", title: "Sản xuất & kiểm định", description: "Đã kiểm tra chất lượng và đóng gói.", location: "Nhà máy An Việt", occurredAt: new Date("2026-06-15") },
      { unitId: unit.id, type: "DISTRIBUTION", title: "Xuất kho phân phối", description: "Niêm phong và bàn giao cho đơn vị vận chuyển.", location: "Trung tâm phân phối Hà Nội", occurredAt: new Date("2026-06-20") }
    ] });
    if (item.token === "HOTSCAN999") {
      await db.verificationLog.createMany({ data: Array.from({ length: 3 }, () => ({ tokenAttempt: item.token, verdict: VerificationVerdict.VALID, unitId: unit.id })) });
    }
  }
  console.log("Seeded demo tokens: 8F7K29ABC, RISK88XYZ, OFF000TAG, HOTSCAN999, TRACE5GOOD; unknown: NOTFOUND1");
}

main().finally(() => db.$disconnect());
