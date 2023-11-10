import bcrypt from 'bcrypt'
import prisma from '@/libs/prismaDb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body  = await request.json();
    const {idNumber,name,email,password,gender,age} = body;


    if(!name || !email || !password || !idNumber || !gender || !age ){ //validate input 
        return new NextResponse('Missing Fields', {status:400});
    }

    const dataExist = await prisma.user.findUnique({ //checks user in the database
        where:{
            idNumber,
            email
        }
    })
    
    if(dataExist){
        throw new Error('Email already Exist Or IdNumber Exist');
    }

    const hashedPassword = await  bcrypt.hash(password,10);


    const finalAge = +age;
    const user = await prisma.user.create({ //creates  a new user in the database
        data:{
            idNumber,
            name,
            email,
            hashedPassword,
            gender,
            age:finalAge,
            role:"employee"
,
        }
    })



    return NextResponse.json(user);

}   

