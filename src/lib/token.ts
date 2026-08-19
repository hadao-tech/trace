import { randomBytes } from "crypto";
export function createToken(length = 12) {
  return randomBytes(length).toString("base64url").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, length);
}
