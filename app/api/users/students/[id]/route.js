import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async  function DELETE(req,{params}){
    
    const deletedStudent = await prisma.user.delete({
        where:{
            id: params.id
        }
    })

    return NextResponse.json(deletedStudent);
}





export async function GET(req,{params}){

    const student  = await prisma.user.findFirst({
        where:{
            id:params.id
        }
    });

    return NextResponse.json(student);

}







export async function PATCH(req,{params}){
    const {idNumber,name,email,gender,age,yearLevel,course} = await req.json();


    const student = await prisma.user.update({
        where:{
            id: params.id
        },
        data:{
            idNumber,
            name,
            email,
            gender,
            age: +age,
            yearLevel:+yearLevel,
            courseId:course
        }
 
    })


    console.log(student);
      
    return NextResponse.json({message:"data has been updated!"});




    
}