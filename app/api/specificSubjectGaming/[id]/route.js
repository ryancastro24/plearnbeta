import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async function GET(req,{params}){
    
    const subject  = await prisma.subject.findFirst({
        where:{
            id: params.id
        }
    })


    return NextResponse.json(subject);
}