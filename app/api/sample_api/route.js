import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import {headers} from 'next/headers'

export async function GET(request,{params}){

    const  headerList = headers();
    const user = headerList.get("user_id")
  const data = await prisma.doneActiviy.findMany({
    where:{
      activity:{
        subjectId: params.id
      },
      user_id: user_id
    },
    include:{
        activity:{
          include:{
              questions:{
                include:{
                  choices:true
                }
                
              }
          }
        }
    }
  
})
    
}