import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async  function DELETE(req,{params}){
    
    const deletedEmployee = await prisma.user.delete({
        where:{
            id: params.id
        }
    })

    return NextResponse.json(deletedEmployee);
}




export async function GET(req,{params}){

    const employee  = await prisma.user.findFirst({
        where:{
            id:params.id
        }
    });

    return NextResponse.json(employee);

}


export  async function PATCH(req,{params}){
    const {idNumber,name,email,age} = await req.json();

    const employee =  await prisma.user.update({
        where:{
            id:params.id
        },
        data:{
            idNumber,
            name,
            email,
            age: +age
        }
    })

    return NextResponse.json({message:"successfully updateD!"});
}


