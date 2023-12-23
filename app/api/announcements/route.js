import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';

export async function POST(req){
    const {content,subject_id,user_id} = await req.json();
    
    const data = await prisma.announcement.create({
        data:{
            content:content,
            userId:user_id,
            subjectId: subject_id
  }
    })

    console.log(data);
    return NextResponse.json(data);
}