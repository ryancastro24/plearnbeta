
import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import { headers } from 'next/headers'


export async function GET(request,{params}){
    const headerList = headers()
    const user_id = headerList.get("user_id")

    try{    


        const subject  =  await prisma.subject.findFirst({
            where:{
                id:params.id
            }
        })

        console.log(subject);



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
                          choices:true,
                         
                        }
                        
                      }
                  }
                }
            }
          
        })
    
        return NextResponse.json({finalData:[{subjectDetails:subject},{activityData:data}]})
       

    }
    catch(err){
        console.log(err);
    }
   

}