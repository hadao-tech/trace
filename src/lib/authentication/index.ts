import type { AuthenticationProvider } from "./types";
import { DatabaseAuthenticationProvider } from "./database-provider";
// Swap this provider for a signed/cryptographic Secure NFC implementation later.
export const authenticationProvider: AuthenticationProvider = new DatabaseAuthenticationProvider();
