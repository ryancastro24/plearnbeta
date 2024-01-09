import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'
import { writeFile } from "fs/promises";
import { join } from "path";


export async function POST(request){
  const data = await request.formData();
  const file = data.get('file');
  const title = data.get('title');
  const dateAndTime = data.get('dateAndTime');
  const description = data.get('description');


  if(!file){
    return NextResponse.json({success:false})
  } 
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path  = join(process.cwd(), 'public', 'announcementsAssets', file.name);
  await writeFile (path,buffer)
  console.log(`open  path ${path} to see the upload file`)


  const announcementUpload  = await prisma.generalAnnouncement.create({
    data:{
        title: title,
        dateAndTime: dateAndTime,
        description: description,
        image: file.name
    }
  })
  

  console.log(announcementUpload);


  return NextResponse.json({success:true});

    
}



export async function GET(){
    const generalAnnouncement = await prisma.generalAnnouncement.findMany();


    return NextResponse.json(generalAnnouncement);
}
