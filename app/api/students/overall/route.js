import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(req,res){
 
    const students = await prisma.user.findMany({
        where:{
            role:"student",
           
        },
        include:{
            course:true
        },
        orderBy: {
            points: 'desc'
        }
    })

   
    return NextResponse.json(students)
}