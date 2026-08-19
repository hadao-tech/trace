import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
const schema=z.object({sku:z.string().min(2),name:z.string().min(2),description:z.string().min(2),category:z.string().min(1),origin:z.string().min(1),manufacturer:z.string().min(1),brandId:z.string().min(1),imageUrl:z.string().url().optional().or(z.literal(""))});
export async function GET(){return NextResponse.json(await db.product.findMany({include:{brand:true,_count:{select:{units:true}}},orderBy:{createdAt:"desc"}}))}
export async function POST(req:Request){const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"Dữ liệu không hợp lệ",details:parsed.error.flatten()},{status:400});try{return NextResponse.json(await db.product.create({data:{...parsed.data,imageUrl:parsed.data.imageUrl||null}}),{status:201})}catch{return NextResponse.json({error:"SKU đã tồn tại hoặc thương hiệu không hợp lệ"},{status:409})}}
