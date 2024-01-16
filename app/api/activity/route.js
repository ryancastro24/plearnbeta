import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function POST(request){
    const {id,title,type,topic} = await request.json();

    if(!id || !title || !type || !topic){
        return NextResponse.json({message:"Missing Fields"})
    }



    const acitivity = await prisma.activity.create({
        data:{
            title,
            type,
            subjectId:id,
            topic
        }
    })

    

    return NextResponse.json(acitivity);
}





