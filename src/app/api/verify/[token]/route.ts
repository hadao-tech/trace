import { NextRequest,NextResponse } from "next/server";
import { authenticationProvider } from "@/lib/authentication";
export async function GET(request:NextRequest,{params}:{params:Promise<{token:string}>}){const {token}=await params;const result=await authenticationProvider.verify(token,{ipAddress:request.headers.get("x-forwarded-for")??undefined,userAgent:request.headers.get("user-agent")??undefined});return NextResponse.json(result,{status:result.verdict==="NOT_FOUND"?404:200})}
