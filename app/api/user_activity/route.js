// import { NextResponse } from "next/server";
// import prisma from '@/libs/prismaDb'

// export async function GET(req,{params}){
    
//     const activities =  await prisma.doneActiviy.findMany({
//         where:{
//             userId: params.id,
//             isDone:true
//         },
//         orderBy: {
//             updatedAt: 'desc',
//           },
//     })
    
//     return NextResponse.json(activities);
// }