import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { createToken } from "@/lib/token";
const schema=z.object({productId:z.string(),serialNumber:z.string().min(3),batchNumber:z.string().min(2),manufacturedAt:z.coerce.date(),expiresAt:z.coerce.date().optional(),scanThreshold:z.coerce.number().int().min(1).max(1000).default(10)});
export async function POST(req:Request){const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"Dữ liệu không hợp lệ",details:parsed.error.flatten()},{status:400});for(let i=0;i<5;i++){try{const unit=await db.productUnit.create({data:{...parsed.data,token:createToken()}});return NextResponse.json(unit,{status:201})}catch{}}return NextResponse.json({error:"Không thể tạo đơn vị sản phẩm; kiểm tra serial"},{status:409})}
