import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function GET(req,{params}){
    const {id} = params
    const user = await prisma.user.findFirst({
        where:{
            id:id
        },
        include:{
            course:true
        }
    })

    return NextResponse.json(user)
}