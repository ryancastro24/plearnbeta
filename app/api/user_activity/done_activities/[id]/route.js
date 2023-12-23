import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(req,{params}){
    const activities =  await prisma.doneActivity.findMany({
        where:{
            userId: params.id,
            isDone:true
        },
        include:{
            activity: true
        },
    })

    return NextResponse.json(activities)
}