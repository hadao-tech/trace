import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
const schema=z.object({status:z.enum(["ACTIVE","DISABLED","RECALLED"])});
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"Trạng thái không hợp lệ"},{status:400});const {id}=await params;try{return NextResponse.json(await db.productUnit.update({where:{id},data:parsed.data}))}catch{return NextResponse.json({error:"Không tìm thấy"},{status:404})}}
