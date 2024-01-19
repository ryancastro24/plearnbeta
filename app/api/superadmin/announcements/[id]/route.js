import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function DELETE(req,{params}){
    const deletedAnnouncement =  await prisma.generalAnnouncement.delete({
        where:{
            id: params.id
        }
    })


    return NextResponse.json(deletedAnnouncement);
}


