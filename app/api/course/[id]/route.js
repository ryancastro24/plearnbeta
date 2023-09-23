import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function GET(request,{params}){   

    try{

        const course = await prisma.course.findFirst({
            where:{
                id: params.id
            }
        })
    
        console.log(course)

        return NextResponse.json(course)

        
    }
    catch(err){
        console.log(err)
    }

    



}