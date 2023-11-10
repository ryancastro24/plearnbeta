import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';

export async function GET(req,{params}){

    const lesson = await prisma.uploadedFile.findMany({
        where:{
            subjectId: params.id
        }
    })

    return NextResponse.json(lesson)
}