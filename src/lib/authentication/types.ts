export type AuthContext = { ipAddress?: string; userAgent?: string };
export type AuthResult = {
  verdict: "VALID" | "SUSPICIOUS" | "NOT_FOUND" | "DISABLED" | "EXCESSIVE_SCANS";
  message: string;
  scanCount: number;
  unit: null | {
    id: string; token: string; serialNumber: string; batchNumber: string; status: string;
    manufacturedAt: Date; expiresAt: Date | null;
    product: { id: string; sku: string; name: string; description: string; category: string; origin: string; manufacturer: string; imageUrl: string | null; brand: { name: string; website: string | null } };
    traceEvents: Array<{ id: string; type: string; title: string; description: string; location: string; occurredAt: Date }>;
  };
};
export interface AuthenticationProvider { verify(token: string, context?: AuthContext): Promise<AuthResult> }
