import bcrypt from 'bcrypt'
import prisma from '@/libs/prismaDb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body  = await request.json();
    const {idNumber,name,email,password,gender,course,age,yearLevel,role} = body;


    if(!name || !email || !password || !idNumber || !gender || !age || !yearLevel || !course || !role){ //validate input 
        return new NextResponse('Missing Fields', {status:400});
    }

    const dataExist = await prisma.student.findUnique({ //checks user in the database
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
    const finalYearLevel = +yearLevel;
    const user = await prisma.student.create({ //creates  a new user in the database
        data:{
            idNumber,
            name,
            email,
            hashedPassword,
            gender,
            age:finalAge,
            yearLevel:finalYearLevel,
            courseId: course,
            role
,
        }
    })



    return NextResponse.json(user);

}   


//todo:sample get method to get specific data from db
// export async function  GET(){

//     const user = await prisma.college.findMany();
    
//     return NextResponse.json(user)
// }