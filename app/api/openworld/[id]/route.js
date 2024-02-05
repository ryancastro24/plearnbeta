import { NextResponse } from "next/server";
import { allOpenworldSampleTopics } from "@/libs/testing";


export async function GET(req,{params}){
    
    const topic =  allOpenworldSampleTopics.filter(val => val.id == params.id);

    return NextResponse.json(topic);
    
}