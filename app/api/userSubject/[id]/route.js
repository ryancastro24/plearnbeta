import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(request,{params}){

    

    const data = await prisma.user.findFirst({
        where:{
            id:params.id
        },
        include:{
            sections:{
                include:{
                    subject:{
                        include:{
                            activityId: true
                        }
                    }
                }
            }
        }
        
    })

   

    return NextResponse.json(data)

}