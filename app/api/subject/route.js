import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
export async function GET(){
    try{    
        const subject = await prisma.subject.findMany();
        return  NextResponse.json(subject)

    }
    catch(err){
        console.log(err);
    }
   

}