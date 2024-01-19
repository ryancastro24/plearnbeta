import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'



export async function GET(req,{params}){
    
    const requests = await  prisma.allianceRequest.findMany({
        where:{
            alliance_id: params.id
        }
    })
    
        const requestsWithUserInfo = await Promise.all(requests.map(async (request) => {
            const user = await prisma.user.findUnique({
                where: {
                    id: request.userId
                }
            });

            // Merge user information into the request object
            return {
                ...request,
                user
            };
        }));

    return NextResponse.json(requestsWithUserInfo);
}
