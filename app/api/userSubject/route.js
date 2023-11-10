import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'

export async function GET(){

    const me = await prisma.user.findMany();

    return NextResponse.json(me)

}