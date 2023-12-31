import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import {headers} from 'next/headers'

export async function PATCH(req,{params}){

    const headerList = headers();
    const user_id = headerList.get('user_id')

    const {finalTotalScore} = await req.json()
    
    // console.log(finalTotalScore)
    const user = await prisma.user.update({
        where:{
            id:user_id
        },
        data:{
            points:{
                increment: finalTotalScore
            },
            level:{
                increment: 0.5
            }
        }
    })

    const act = await prisma.doneActivity.update({
        where:{
            id: params.id
        },
        data:{
            isDone:true
        }
    })

   

    return NextResponse.json(user)
}