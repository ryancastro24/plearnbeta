import { NextResponse } from "next/server";
import { headers } from "next/headers";
import OpenAI from "openai";

const openai = new OpenAI();


export async function GET(req){

  const headerList = headers();
  const topic = headerList.get('topic');



    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Give a 5 overveiw of this topic ${topic} `,
        max_tokens: 1000,
        temperature: 0,
      });
    
   ;
    
      return NextResponse.json(completion);
}
