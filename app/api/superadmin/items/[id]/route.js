import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';


export async function DELETE(req,{params}){
     const item = await prisma.item.delete({
        where:{
            id: params.id
        }
     })

     return NextResponse.json({message:"item has been deleted!"});
}




export async function GET(req,{params}){
    const item = await prisma.item.findFirst({
       where:{
           id: params.id
       }
    })

    return NextResponse.json(item);
}




// ! code this after NEW YEAR!

// export async function PATCH(req,{params}){
//     const {}
// }