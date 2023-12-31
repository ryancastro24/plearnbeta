import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import {headers} from 'next/headers'

export async function GET(request,{params}){


  const headerList = headers();
  const user_id = headerList.get('user_id')

    const activities = await prisma.activity.findMany({
        where:{   
          subjectId:params.id
        }
    });
  

    
  for (const activity of activities) {
    // Check if a corresponding record already exists in DoneActivity
    const existingDoneActivity = await prisma.doneActivity.findFirst({
      where: {
        activityId: activity.id,
        userId: user_id // Specify the user ID
      }
    });
  
    // If the record doesn't exist, create a new one
    if (!existingDoneActivity) {
      await prisma.doneActivity.create({
        data: {
          activity: { connect: { id: activity.id } },
          user: { connect: { id: user_id }, // Specify the user ID as needed
          // Any other fields you want to set for DoneActivity
        }
      }
      })
    }
  }
  
   
    
  
  //? queery to find subject
    const data = await prisma.doneActivity.findMany({
        where:{
          activity:{
            subjectId: params.id
          },
          userId:user_id
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

    return NextResponse.json(data)
    
}