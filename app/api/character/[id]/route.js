import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async function PATCH(req,{params}){

    const {character} =  await req.json();

    console.log(character);

     const  user = await prisma.user.update({
        where:{
            id: params.id
        },
        data:{
            character: character
        }
     })

     return NextResponse.json({message:"success"})
}