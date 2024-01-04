import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb';
import { writeFile } from "fs/promises";
import { join } from "path";

export async function DELETE(req,{params}){
     const item = await prisma.item.delete({
        where:{
            id: params.id
        }
     })

     return NextResponse.json({message:"item has been deleted!"});
}




export async function GET(req,{params}){
    const item = await prisma.item.findFirst({
       where:{
           id: params.id
       }
    })

    return NextResponse.json(item);
}




export async function PATCH(req,{params}){

    const data = await req.formData();
    
    const name = data.get('name');
    const price = data.get('price');
    const description = data.get('description');
    const file = data.get('file');
   
    if(file && typeof file.arrayBuffer === 'function') {
            
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
        
            const path  = join(process.cwd(), 'public', 'itemsAssets', file.name);
            await writeFile (path,buffer)
            console.log(`open  path ${path} to see the upload file`)


                const fileUploaded = await prisma.item.update({
                    where:{
                        id: params.id
                    },
                    data:{
                        name: name,
                        description:description,
                        price: +price,
                        image:file.name,
                        
                    }
                    })
        console.log(fileUploaded);
    }
    else {
        await prisma.item.update({
            where:{
                id: params.id
            },
            data:{
                name: name,
                description:description,
                price: +price,
            }
            })
   }
  
  
    return NextResponse.json({success:true});
  
}