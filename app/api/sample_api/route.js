import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';

export async function GET(req,{params}){

    const user = await prisma.user.findFirst({
        where:{
            id: "5272a42e-6bdc-4cf7-999b-a4d5ac75a0d5"
        },
        include:{
            itemCollectibles: true
        }
    })

    return NextResponse.json(user)
}