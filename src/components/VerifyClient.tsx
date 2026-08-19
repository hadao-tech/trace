"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Radio, Search } from "lucide-react";

declare global { interface Window { NDEFReader?: new () => { scan(): Promise<void>; onreading: null | ((event: { message: { records: Array<{ recordType: string; data?: DataView }> } }) => void); onreadingerror: null | (() => void) } } }
export function VerifyClient() {
  const [token,setToken]=useState(""); const [notice,setNotice]=useState(""); const router=useRouter();
  const go=()=>{if(token.trim()) router.push(`/verify/${encodeURIComponent(token.trim())}`)};
  async function readNfc(){ if(!window.NDEFReader){setNotice("Thiết bị/trình duyệt này chưa hỗ trợ Web NFC. Hãy dùng Chrome Android qua HTTPS hoặc quét QR.");return} try{const reader=new window.NDEFReader();await reader.scan();setNotice("Đang chờ thẻ NFC… hãy chạm thẻ vào điện thoại.");reader.onreading=(event)=>{for(const record of event.message.records){if(record.data){const value=new TextDecoder().decode(record.data);const match=value.match(/\/verify\/([A-Za-z0-9_-]+)/);if(match){router.push(`/verify/${match[1]}`);return}}}setNotice("Thẻ không chứa URL TraceGuard hợp lệ.")};reader.onreadingerror=()=>setNotice("Không thể đọc thẻ. Hãy thử lại.")}catch(e){setNotice(e instanceof Error?`Không thể đọc NFC: ${e.message}`:"Không thể đọc NFC.")}}
  return <div className="card p-6 md:p-8 max-w-xl mx-auto"><label className="label" htmlFor="token">Mã xác thực</label><div className="flex gap-2"><input id="token" className="input font-mono uppercase" value={token} onChange={e=>setToken(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go()} placeholder="Ví dụ: 8F7K29ABC"/><button className="btn btn-primary" onClick={go} aria-label="Kiểm tra"><Search size={19}/></button></div><div className="flex items-center gap-3 my-5"><span className="h-px bg-slate-200 grow"/><span className="text-xs text-slate-400">HOẶC</span><span className="h-px bg-slate-200 grow"/></div><button className="btn btn-secondary w-full" onClick={readNfc}><Radio size={19}/>Đọc NFC</button>{notice&&<p className="mt-4 rounded-xl bg-amber-50 text-amber-900 p-3 text-sm" role="status">{notice}</p>}<p className="text-xs text-slate-500 mt-5">Web NFC chỉ hoạt động trên thiết bị và trình duyệt tương thích, trong ngữ cảnh bảo mật (HTTPS hoặc localhost). Hệ thống không mô phỏng kết quả NFC.</p></div>
}
