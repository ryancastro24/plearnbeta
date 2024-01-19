import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async function GET(req,{params}){
    const alliance  = await  prisma.alliance.findFirst({
        where:{
            id: params.id
        },
        include:{
            members:true
        }
    })

    return NextResponse.json(alliance);
}