import NextAuth from "next-auth/next";
import prisma from '@/libs/prismaDb';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from 'next-auth/providers/credentials'
import brcypt from 'bcrypt'
export const authOptions = {
    adapter:  PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                idNumber: {label:"Idnumber", type:"text", placeholder:"Enter ID Number"},
                password: {label:"Password", type:"password", placeholder:"Enter Password"},
            },
            async authorize(credentials) {
 

                
                // check if email and password fields are empty
                if(!credentials.idNumber || !credentials.password){
                    throw new Error("Please enter email and password")
                }

                // check if use exist or registered
                 const user = await prisma.user.findUnique({
                    where:{
                        idNumber: credentials.idNumber,
                        email: credentials.email
                    }
                 });

                //  if no user was found
                if(!user || !user?.hashedPassword){
                    throw new Error("NO user Found!")
                }   
                // if password match
                const passwordMatch = await brcypt.compare(credentials.password, user.hashedPassword);

                // if password dont match

                if(!passwordMatch){
                    throw new Error("Incorrect Password")
                }

                return user;
            } //!end of authorize callbackfunction
        })
    ],

    secret:process.env.SECRET,
    session:{
        strategy: 'jwt' //json web tokens
    },
    debug:process.env.NODE_ENV === "development",

}

const handler =  NextAuth(authOptions);

export {handler as GET, handler as POST}