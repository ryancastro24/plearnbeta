import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import { headers } from "next/headers";
export async function GET(req,res){


    const headerList = headers()
    const user_id = headerList.get("user_id")

    const user = await prisma.user.findFirst({
        where:{
            idNumber:user_id
        },
        select:{
            course:true,
          
        }
        
    })

    console.log(user)
 
    const students = await prisma.user.findMany({
        where:{
            role:"student",
           course:{
                name:user.course.name
           }
        },
        include:{
            course:true,
            alliance:true
        },
        orderBy: {
            points: 'desc'
        }
    })

   
    return NextResponse.json(students)
}