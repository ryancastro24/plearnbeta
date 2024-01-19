import { NextResponse } from "next/server";
import prisma from  '@/libs/prismaDb';


export async function POST(req){
    const {alliance_id,userId} = await req.json();
     
    const request = await prisma.allianceRequest.create({
        data:{
            alliance_id,
            userId
        }
    })

    return NextResponse.json({message:"success"});
}

export async function PATCH(req){
    const {request_id,user_id,alliance_id} = await req.json();
     
    const request = await prisma.allianceRequest.delete({
        where:{
            id: request_id
        }
    });

    const user = await prisma.user.update({
        where:{
            id:user_id
        },
        data:{
            allianceId: alliance_id,
            alliancePosition:"member"
        }
    })

    return NextResponse.json({message:"success"});
}





