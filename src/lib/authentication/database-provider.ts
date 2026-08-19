import { VerificationVerdict } from "@prisma/client";
import { db } from "@/lib/db";
import type { AuthenticationProvider, AuthContext, AuthResult } from "./types";

export class DatabaseAuthenticationProvider implements AuthenticationProvider {
  async verify(rawToken: string, context: AuthContext = {}): Promise<AuthResult> {
    const token = rawToken.trim().toUpperCase();
    const unit = await db.productUnit.findUnique({ where: { token }, include: { product: { include: { brand: true } }, traceEvents: { orderBy: { occurredAt: "asc" } }, _count: { select: { verifications: true } } } });
    if (!unit) {
      await db.verificationLog.create({ data: { tokenAttempt: token, verdict: VerificationVerdict.NOT_FOUND, ...context } });
      return { verdict: "NOT_FOUND", message: "Không tìm thấy mã sản phẩm trong hệ thống.", scanCount: 0, unit: null };
    }
    const scanCount = unit._count.verifications + 1;
    let verdict: VerificationVerdict = VerificationVerdict.VALID;
    let message = "Sản phẩm chính hãng và mã xác thực hợp lệ.";
    if (unit.status !== "ACTIVE") { verdict = VerificationVerdict.DISABLED; message = "Mã xác thực đã bị vô hiệu hóa hoặc thu hồi."; }
    else if (scanCount > unit.scanThreshold) { verdict = VerificationVerdict.EXCESSIVE_SCANS; message = "Mã đã được quét nhiều lần bất thường. Hãy kiểm tra nơi mua hàng."; }
    else if (unit.riskFlag) { verdict = VerificationVerdict.SUSPICIOUS; message = "Sản phẩm có dấu hiệu bất thường và cần được kiểm tra thêm."; }
    await db.verificationLog.create({ data: { tokenAttempt: token, verdict, unitId: unit.id, ...context } });
    const { _count, riskFlag, scanThreshold, productId, createdAt, ...safeUnit } = unit;
    void _count; void riskFlag; void scanThreshold; void productId; void createdAt;
    return { verdict, message, scanCount, unit: safeUnit };
  }
}
