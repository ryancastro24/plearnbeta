import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';
import { headers } from "next/headers";

export async function POST(req){
    const {title,content,userId,subId} = await req.json();


    if(!title || !content || !userId || !subId){
        return NextResponse.json({message:"Missing Fields"})
    }

    const note = await prisma.note.create({
      data:{
        title:title,
        content:content,
        userId:userId,
        subjectId:subId
      }
    })

    return NextResponse.json(note)

}


//fetch the notes in each subject and user

export async function GET(){
    
    const headerList = headers();
    const user_id = headerList.get('user_id');
    const subject_id = headerList.get('subject_id');

    const note = await prisma.note.findMany({
        where:{
            userId: user_id,
            subjectId : subject_id
        }
    })

    return NextResponse.json(note)

}