import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function GET(request,{params}){
    const act = await prisma.doneActiviy.findFirst({
        where:{
            id: params.id
        },
        include:{
            activity:{
              include:{
                  questions:{
                    include:{
                      choices:true,
                     
                    }
                    
                  }
              }
            }
        }
    })
       

    return NextResponse.json(act)
}



//update the activity data
export async function PATCH(request,{params}) {

    const {isEditable} =  await request.json();
    
    const updatedActivity = await prisma.activity.update({
        where:{
            id:params.id
        },
        data:{
            isEditable
        }
    })



    return NextResponse.json(updatedActivity)
    
  
}