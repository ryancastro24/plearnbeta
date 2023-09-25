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
                 const student = await prisma.student.findUnique({
                    where:{
                        idNumber: credentials.idNumber,
                        email: credentials.email
                    },
                    include:{
                        subjects:{
                            include:{
                                activityId:true
                            }
                        }
                    }
                 });

                //  if no student was found
                if(!student || !student?.hashedPassword){
                    throw new Error("NO student Found!")
                }   
                // if password match
                const passwordMatch = await brcypt.compare(credentials.password, student.hashedPassword);

                // if password dont match

                if(!passwordMatch){
                    throw new Error("Incorrect Password")
                }
                return student;
            } //!end of authorize callbackfunction
        })
    ],


    callbacks:{ //create callback functions     
        async jwt({token, user ,session,trigger}){
            // console.log('jwt callback', {token, user,session}) //c
           
            if(user){
                return {
                    ...token,
                    id: user.id,
                    level: user.level,
                    idNumber: user.idNumber,
                    gender:user.gender,
                    age:user.age,
                    yearLevel:user.yearLevel,
                    role:user.role,
                    subjects:user.subjects,
                    points: user.points,
                    activities: user.subjects.activityId
                }
            }
        
            return token;
        },
        async session({session,token,user}){
            // console.log('Session callback',{session,token,user});
            
            return {
                ...session,
                user:{
                    ...session.user,
                    id: token.id,
                    level: token.level,
                    idNumber: token.idNumber,
                    gender:token.gender,
                    age:token.age,
                    yearLevel:token.yearLevel,
                    role:token.role,
                    subjects:token.subjects,
                    points: token.points,
                    activities:token.subjects.activities
                }
            }
            
        }
    },


    
    secret:process.env.SECRET,
    session:{
        strategy: 'jwt' //json web tokens
    },
    debug:process.env.NODE_ENV === "development",

}

const handler =  NextAuth(authOptions);

export {handler as GET, handler as POST}