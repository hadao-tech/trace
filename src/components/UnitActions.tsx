"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function UnitActions({id,status}:{id:string;status:string}){const router=useRouter();const [msg,setMsg]=useState("");async function update(next:string){const r=await fetch(`/api/units/${id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({status:next})});setMsg(r.ok?"Đã cập nhật trạng thái":"Cập nhật thất bại");router.refresh()}return <div><button className="btn btn-secondary w-full" onClick={()=>update(status==="ACTIVE"?"DISABLED":"ACTIVE")}>{status==="ACTIVE"?"Vô hiệu hóa mã":"Kích hoạt lại mã"}</button>{msg&&<p className="text-sm mt-2">{msg}</p>}</div>}
