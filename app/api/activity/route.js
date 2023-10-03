import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function POST(request){
    const {id,title,type} = await request.json();

    if(!id || !title || !type){
        return NextResponse.json({message:"Missing Fields"})
    }



    const acitivity = await prisma.activity.create({
        data:{
            title,
            type,
            subjectId:id
        }
    })

    console.log(acitivity)

    return NextResponse.json(acitivity);
}