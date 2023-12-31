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


export async function POST(request){

    const {realm,subjectTitle,subjectCode,idNumber,type} = await request.json();
    
    if(!realm || !subjectTitle || !subjectCode || !idNumber || !type){
        return NextResponse.json({message:"Missing Field"})
    }

    const newSubject = await prisma.subject.create({
        data:{
            title:subjectTitle,
            subjectCode: subjectCode,
            realm:realm,
            type:type
        }
    })


    const updatedSubject = await prisma.subject.update({
        where: {
          id: newSubject.id, // Assuming your Subject model has an 'id' field
        },
        data: {
          students:{
            connect:[
                {idNumber:idNumber}
            ]
          }
        },
      })

    
    
    return NextResponse.json(updatedSubject);
}

