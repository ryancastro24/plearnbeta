import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import { writeFile } from "fs/promises";
import { join } from "path";


export async function POST(request){
  const data = await request.formData();
  console.log(data);
  const file = data.get('file');
  const title = data.get('title');
  const subjectId = data.get('subjectId');

  console.log(title)
  console.log(subjectId)

  if(!file){
    return NextResponse.json({success:false})
  } 
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path  = join(process.cwd(), 'public', 'uploadfiles', file.name);
  await writeFile (path,buffer)
  console.log(`open  path ${path} to see the upload file`)

  const fileUploaded = await prisma.uploadedFile.create({
    data:{
        title: title,
        filename:file.name,
        subjectId:subjectId
    }
  })

  console.log(fileUploaded);


  return NextResponse.json({success:true});

  


    
}