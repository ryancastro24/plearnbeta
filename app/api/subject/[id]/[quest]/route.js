import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function GET(request,{params}){
    const {quest} = params;

}