import bcrypt from 'bcrypt'
import prisma from '@/libs/prismaDb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body  = await request.json();
    const {idNumber,name,email,password,gender,course,age,yearLevel} = body;


    if(!name || !email || !password || !idNumber || !gender || !age){ //validate input 
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
    const finalYearLevel = +yearLevel;
    
    const levelPass = await prisma.levelPass.create({
        data:{
            name:"Level Pass 2024"
        }
    })


    const user = await prisma.user.create({ //creates  a new user in the database
        data:{
            idNumber,
            name,
            email,
            hashedPassword,
            gender,
            age:finalAge,
            yearLevel:finalYearLevel,
            courseId: course,
            role: "student",
            levelPassId: levelPass.id
,
        }
    })


    const items = await prisma.levelPassItem.createMany({
        data:[
            { name:"coin",level: 1,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 2,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 3,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 4,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 5,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 6,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 7,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 8,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 9,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 10,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 11,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 12,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 13,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 14,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 15,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 16,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 17,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 18,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 19,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 20,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 21,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 22,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 23,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 24,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 25,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 26,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 27,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 28,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 29,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"Lanyard 1",level: 30,image:"/LevelPassAssets/lanyard1.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 31,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 32,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 33,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 34,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 35,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 36,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 37,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 38,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 39,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 40,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 41,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 42,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 43,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 44,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 45,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 46,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 47,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 48,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 49,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 50,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 51,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 52,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 53,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 54,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 55,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 56,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 57,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 58,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 59,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"Lanyard 2",level: 60,image:"/LevelPassAssets/lanyard2.jpg",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 61,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 62,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 63,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 64,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 65,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 66,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 67,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 68,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 69,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 70,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 71,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 72,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 73,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 74,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 75,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 76,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 77,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 78,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 79,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 80,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 81,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 82,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 83,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 84,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 85,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 86,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 87,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 88,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 89,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"Lanyard 3",level: 90,image:"/LevelPassAssets/lanyard3.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 91,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 92,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 93,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 94,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 95,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 96,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 97,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 98,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 99,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 100,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 101,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 102,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 103,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 104,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 105,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 106,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 107,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 108,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 109,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 110,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 111,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 112,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 113,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 114,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 115,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 116,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 117,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 118,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 119,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"Lanyard 4",level: 120,image:"/LevelPassAssets/lanyard4.jpg",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 121,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 122,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 123,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 124,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 125,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 126,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 127,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 128,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 129,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 130,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 131,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 132,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 133,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 134,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 135,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 136,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 137,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 138,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coin",level: 139,image:"/LevelPassAssets/coinStack.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 140,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 141,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 142,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 143,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 144,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 145,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 146,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 147,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 148,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"coinbag",level: 149,image:"/LevelPassAssets/bagOfCoin.png",userId: user.id,levelPassId: levelPass.id},   
            { name:"Mystery Box",level: 150,image:"/LevelPassAssets/finalPrize.png",userId: user.id,levelPassId: levelPass.id},   
        ]
    })





    return NextResponse.json(user);

}   

