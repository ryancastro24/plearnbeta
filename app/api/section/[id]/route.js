import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


// get all section in each subject
export async function GET(req,{params}){
    const sections = await prisma.section.findMany({
        where:{
            subjectId: params.id
        }
    })

    return NextResponse.json(sections)
}