"use client";
import { useEffect,useState } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import Image from "next/image";
export function QrDownload({value,label="Tải QR"}:{value:string;label?:string}){const [src,setSrc]=useState("");useEffect(()=>{QRCode.toDataURL(value,{width:520,margin:2,color:{dark:"#10231D",light:"#FFFFFF"}}).then(setSrc)},[value]);return <div className="flex flex-col items-center gap-3">{src&&<Image src={src} width={160} height={160} unoptimized alt="QR xác thực" className="w-40 h-40 rounded-xl border"/>}{src&&<a className="btn btn-secondary text-sm" href={src} download="traceguard-qr.png"><Download size={16}/>{label}</a>}</div>}
