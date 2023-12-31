import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';

export async function GET(){

    const students  = await prisma.user.findMany({
        where:{
            role: "student"
        },
        include:{
            course:true
        }
    })

    return NextResponse.json(students);
}