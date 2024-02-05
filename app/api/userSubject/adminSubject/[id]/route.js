import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(request,{params}){

    

    // console.log(params.id)

    const data = await prisma.user.findFirst({
        where:{
            id:params.id
        },
        include:{
            subjects:{
                orderBy: {
                    subjectCode: 'asc', // 'asc' for ascending order, 'desc' for descending order
                  },
            }
             
        },

       
        
    })

   

    return NextResponse.json(data)

}