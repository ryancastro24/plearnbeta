import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import {headers} from 'next/headers'

export async function GET(request,{params}){


  const headerList = headers();
  const user_id = headerList.get('user_id')

  console.log(user_id)
    const activities = await prisma.activity.findMany({
        where:{   
          subjectId:params.id
        }
    });
  

    
  for (const activity of activities) {
    // Check if a corresponding record already exists in DoneActivity
    const existingDoneActivity = await prisma.doneActiviy.findFirst({
      where: {
        activityId: activity.id,
        userId: user_id // Specify the user ID
      }
    });
  
    // If the record doesn't exist, create a new one
    if (!existingDoneActivity) {
      await prisma.doneActiviy.create({
        data: {
          activity: { connect: { id: activity.id } },
          user: { connect: { id: user_id }, // Specify the user ID as needed
          // Any other fields you want to set for DoneActivity
        }
      }
      })
    }
  }
  
    console.log("updated successfully")
    
  
  //? queery to find subject
    const data = await prisma.doneActiviy.findMany({
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