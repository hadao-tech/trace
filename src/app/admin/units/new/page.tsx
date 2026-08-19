import { CreateUnitForm } from "@/components/CreateUnitForm";
import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export default async function NewUnitPage(){const products=await db.product.findMany({select:{id:true,name:true}});return <main className="container-page py-10"><h1 className="text-3xl font-black">Tạo đơn vị sản phẩm</h1><p className="text-slate-600 mt-2 mb-6">Hệ thống tự sinh token ngẫu nhiên mạnh cho từng đơn vị.</p><CreateUnitForm products={products}/></main>}
