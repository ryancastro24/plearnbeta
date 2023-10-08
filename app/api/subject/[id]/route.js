
import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(request,{params}){

    try{    
        const subject = await prisma.subject.findFirst({
            where: {
                id: params.id
            },
            include:{
                activityId:{
                    include:{
                        questions:{
                            include:{
                                choices:true
                            }
                        }
                    }
                },
                lessonId:true
            }
            
        });
        return  NextResponse.json(subject)

    }
    catch(err){
        console.log(err);
    }
   

}