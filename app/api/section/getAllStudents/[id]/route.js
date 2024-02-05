import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';



export async function GET(req,{params}){


    const sectionSubject = await prisma.section.findFirst({
        where:{
            id:params.id
        }
    })


    const sectionStudents = await prisma.section.findFirst({
        where:{
            id: params.id
        },
        select:{
            users:{
                include:{
                    DoneActivity:{
                        
                        where: {
                            isDone:true,
                            activity: {
                                subjectId: sectionSubject.subjectId,
                            },
                        },
                        include: {
                            activity:{
                                include:{
                                    questions:{
                                      include:{
                                        choices:true,
                                      }
                                      
                                    }
                                }
                            }
                        },
                    } 
                }
            }
            
        }
    })

    return NextResponse.json(sectionStudents)

}