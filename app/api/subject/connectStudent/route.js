import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function POST(request){
    const {subjectId,studentData} = await request.json();

    // console.log(subjectId)
    // console.log(studentData)

    const subject = await prisma.subject.update({
        where:{
            id:subjectId
        },
        data:{
            students:{
                connect:studentData
            }
        }
    })

    console.log(subject)
    return NextResponse.json(subject)
}