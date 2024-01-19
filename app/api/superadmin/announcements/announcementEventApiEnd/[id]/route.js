import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async function PATCH(req,{params}){

    const announcement =  await prisma.generalAnnouncement.update({
        where:{
            id:params.id
        },
        data:{
            ends: true
        }
    })


    return NextResponse.json({message:"success"})

}