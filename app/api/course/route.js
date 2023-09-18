import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function GET(){
    const course = await prisma.course.findMany()

    return NextResponse.json(course)
}