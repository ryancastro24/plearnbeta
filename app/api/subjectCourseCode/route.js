import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async function GET(){
    
    const  subjectCourseCode =  await prisma.subjectCourseCode.findMany();

    return NextResponse.json(subjectCourseCode);
}