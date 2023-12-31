import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import { writeFile } from "fs/promises";
import { join } from "path";


export async function POST(request){
  const data = await request.formData();
  const file = data.get('file');
  const name = data.get('name');
  const price = data.get('price');
  const description = data.get('description');


  if(!file){
    return NextResponse.json({success:false})
  } 
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path  = join(process.cwd(), 'public', 'itemsAssets', file.name);
  await writeFile (path,buffer)
  console.log(`open  path ${path} to see the upload file`)

  const fileUploaded = await prisma.item.create({
    data:{
        name: name,
        description:description,
        price: +price,
        image:file.name,
       
    }
  })

  console.log(fileUploaded);


  return NextResponse.json({success:true});

    
}




export async function GET(){
    const items  = await prisma.item.findMany();

    return NextResponse.json(items)
}
