import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';

export async function GET(req,{params}){

    const lesson = await prisma.uploadedFile.findFirst({
        where:{
            id:"6548b5bd99d77e7d81a42e1c"
        }
    })

    return NextResponse.json(lesson)
}