import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(request,{params}){

    

    console.log(params.id)

    const data = await prisma.user.findFirst({
        where:{
            id:params.id
        },
        select:{
            role:true,
            subjects:true
            }
        
    })

   

    return NextResponse.json(data)

}