import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDb";

export async function GET(req,{params}){
    
    const data = await prisma.announcement.findFirst({
        where:{
            subjectId: params.id
        },
        orderBy:{
            createdAt:'desc'
        }
    })

    return NextResponse.json(data);
}