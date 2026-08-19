import { PrismaClient } from "@prisma/client";
import { spawnSync } from "node:child_process";

const db = new PrismaClient();

async function main() {
  const productCount = await db.product.count();
  if (productCount > 0) {
    console.log(`Database already contains ${productCount} products; skipping demo seed.`);
    return;
  }

  console.log("Database is empty; loading demo data.");
  const result = spawnSync(process.execPath, ["node_modules/tsx/dist/cli.mjs", "prisma/seed.ts"], {
    stdio: "inherit",
    env: process.env,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

main().finally(() => db.$disconnect());
