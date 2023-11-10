import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(req,{params}){
    const data = await prisma.userPurchasedItem.findMany({
        where:{
          user:{
            id:params.id
          }
        },  
        include:{
            item:true
          },
        orderBy:{
          createdAt: 'desc'
        }
        
      })
    

    return NextResponse.json(data)
}