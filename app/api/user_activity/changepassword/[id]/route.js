import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';
import bcrypt from 'bcrypt'


export async function PATCH(req,{params}){
    const {passwordData} = await req.json();

    const hashedPassword = await  bcrypt.hash(passwordData,10);

    const user = await prisma.user.update({
        where:{
            id:params.id
        },
        data:{
            hashedPassword: hashedPassword
        }
    })


    return NextResponse.json({message:"success"});
 }