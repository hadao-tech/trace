import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = { title: "TraceGuard | Xác thực nguồn gốc", description: "Xác thực chống hàng giả bằng NFC và QR" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body><header className="border-b border-emerald-950/10 bg-white/90 backdrop-blur sticky top-0 z-40"><div className="container-page h-16 flex items-center justify-between"><Link href="/" className="flex items-center gap-2 font-black text-lg"><span className="bg-emerald-700 text-white p-2 rounded-xl"><ShieldCheck size={20}/></span>TraceGuard</Link><nav className="flex gap-4 text-sm font-semibold"><Link href="/verify">Xác thực</Link><Link href="/admin">Quản trị</Link></nav></div></header>{children}<footer className="border-t mt-16 py-8 text-center text-sm text-slate-500">TraceGuard Prototype · NFC/QR Traceability</footer></body></html>;
}
