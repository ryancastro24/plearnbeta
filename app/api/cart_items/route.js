import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import { pipeReadable } from "next/dist/server/pipe-readable";

export async function GET(){
    const items = await prisma.item.findMany()

    return NextResponse.json(items)
}


export async function  POST(req){

    const{user,id} = await req.json()

  
     const userPurchased = await prisma.userPurchasedItem.create({
        data:{
            item:{connect:{id:id}},
            user:{connect:{id:user}}
        }
      })

      return NextResponse.json(userPurchased)
}


export async function PATCH(req){
    const {purchasedId,user, price} = await req.json()


    const userFindData = await prisma.user.findFirst({
        where:{
            id: user
        }
    })

    if(userFindData.points < price) {
        throw new Error("Insuffient Poinsts Try Again Later")
    }

    else{

        const userData = await prisma.user.update({
            where:{
                id:user
            },
            data:{
                points:{
                    decrement:price
                }
            }
        })
    
    
    
        const userPurchased = await prisma.userPurchasedItem.update({
            where:{
                id: purchasedId
            },
            data:{
                purchased:true
            }
        })
    
    
    
        return NextResponse.json(userPurchased)

    }
    
}