import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(req,{params}){
    const {id} = params

    const subject = await prisma.subject.findFirst({
        where:{
            id: id
        },
        include:{
            activityId:{
                include:{
                    questions:{
                        include:{
                            choices:true
                        }
                    }
                }
            }
        }
    })

    return NextResponse.json(subject)
}