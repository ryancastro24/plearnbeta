import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function GET(req,{params}){

    const userPass = await prisma.user.findFirst({
        where:{
            id: params.id
        },
        select:{
            LevelPass:{
                include: {
                    levelPassItem:{
                        orderBy: {
                            level: 'asc' // or 'desc' for descending order
                        }
                    }
                }
            }
        }
    })
    

    return NextResponse.json(userPass)
}