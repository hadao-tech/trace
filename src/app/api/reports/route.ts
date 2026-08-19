import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
const schema=z.object({unitId:z.string(),reason:z.string().min(2),details:z.string().optional(),contact:z.string().optional()});
export async function GET(){return NextResponse.json(await db.suspiciousReport.findMany({include:{unit:{include:{product:true}}},orderBy:{createdAt:"desc"}}))}
export async function POST(req:Request){const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"Dữ liệu không hợp lệ"},{status:400});try{return NextResponse.json(await db.suspiciousReport.create({data:parsed.data}),{status:201})}catch{return NextResponse.json({error:"Không tìm thấy sản phẩm"},{status:404})}}
