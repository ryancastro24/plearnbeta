import { NextResponse } from "next/server";
import prisma from  '@/libs/prismaDb'


// add section 

export async function POST(req){
    const {name,schedule,subjectId} = await req.json();

    if(!name || !schedule || !subjectId){
        return NextResponse.json({message:"Missing Fields Try Again!"});
    }

    const section = await prisma.section.create({
        data:{
            name:name ,
            shedule:schedule,
            subjectId: subjectId     
        }
    })

    return NextResponse.json({message:"data has been successfully added!"});
}


