import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function POST(request){
    const {sectionId,studentData} = await request.json();

    const sections = await prisma.section.update({
        where:{
            id:sectionId
        },
        data:{
            users:{
                connect:studentData
            }
        }
    })
    
    return NextResponse.json(sections)
}