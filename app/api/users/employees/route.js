import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';

export async function GET(){
    const employees = await prisma.user.findMany({
        where:{
            role: "employee"
        }
    })

    return NextResponse.json(employees);
}