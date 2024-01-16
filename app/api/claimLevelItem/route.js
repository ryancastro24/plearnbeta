import { NextResponse } from "next/server";
import prisma  from '@/libs/prismaDb'


export async function PATCH(req){

    const {name,id,userId,level} = await req.json();
    
    await prisma.levelPassItem.update({
        where:{
            id: id
        },
        data:{
            achieved : true
        }
    })

    if(name === "coin"){
        await prisma.user.update({
             where:{
                id: userId
             },
             data:{
                points:{
                    increment: 100
                },
            }
        })
    }


   else  if(name === "coinbag"){
        await prisma.user.update({
             where:{
                id: userId
             },
             data:{
                points:{
                    increment: 1000
                },
            }
        })
    }

    else{
        await prisma.user.update({
            where:{
               id: userId
            },
            data:{
                itemCollectibles:{
                   connect : [{id: id} ]

               },
           }
       })
    }

    return NextResponse.json({message:"success"})

}