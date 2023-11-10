
import React from 'react'
import Image from 'next/image'
import Notes from '@/components/DashboardComponent/Notes';
import Backbutton from '@/components/DashboardComponent/Backbutton';
import AddStudents from '@/components/DashboardComponent/adminDashboard/AddStudents';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import QuestField from '@/components/DashboardComponent/QuestField';
import NoteCotainer from '@/components/DashboardComponent/NoteCotainer';
import LessonField from '@/components/DashboardComponent/LessonField';

async function getLessons(id){
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/lesson/${id}`,{
      next:{
        revalidate:0
      }
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
  }  


async function getAdminSubs(id){

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/adminSubjects/${id}`,

    {

        next:{revalidate:0}
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()

}


async function getData(id,user_id){

    const requestOptions = {
        method: 'GET',
        headers: {
          'user_id': user_id,
          // Add more custom headers as needed
        },
      };
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/subject/${id}`,
    requestOptions,
    {

        next:{revalidate:3600}
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}  



// get subject notes

async function getNote(id,user_id){

    const requestOptions = {
        method: 'GET',
        headers: {
          'user_id': user_id,
          'subject_id':id
          // Add more custom headers as needed
        },
      };
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/notes/`,
    requestOptions,
    {
        next:{revalidate:0}
    });


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}  

const Subject = async ({params}) => {

    const session = await getServerSession(authOptions);

    const lessonData = await getLessons(params.id)
    const data = await getData(params.id,session.user.id);
    const adminData = await getAdminSubs(params.id)
    const noteData = await getNote(params.id, session.user.id)
  

  return ( 
   <>
   <div className={`w-full h-screen absolute top-0 bg-forest z-20 bg-cover`}>
        <Backbutton/>
        <div className={`w-full bg-forest h-2/5 bg-cover relative`}>

   
            <div className='w-full bg-[#161a1e99] p-10 h-full   '>
                <div className='flex flex-col gap-3 mt-8 ml-8'>
                    <span className='text-2xl font-bold'>{data.finalData[0].subjectDetails.title}</span>
                    <span>{data.finalData[0].subjectDetails.subjectCode}</span>
                    <span>Section: {data.finalData[0].subjectDetails.section}</span>
                    
                </div>


            {session.user.role === "employee" && <div className='absolute top-10 right-0'>
                        <AddStudents subjectId={adminData.id}/>
                </div> }
               
            </div>

        </div>

        <div className='w-full bg-[#41454A] p-10 rounded-t-3xl h-3/5 relative'>


            <div className='w-full  h-full'>
                <div className='flex flex-col gap-3 ml-8'>
                    <span className='text-2xl font-bold text-[#E58E27]'>Welcome to the Jungle</span>
                    <span>Mr. Mark Phil Pacot</span>
                </div>

                <div className='flex flex-col gap-1 ml-8 mt-8 w-1/2'>
                    <span className='text-xl font-bold]'>About this adventure</span>
                    <p className='text-sm font-extralight'>Fundamentals of Programming is an introductory course that teaches the basics of programming languages, data structures, and control flow. It provides essential skills for creating software and solving problems through coding.</p>
                </div>

                
                <div className='flex gap-5 ml-8 mt-10 w-1/2'>



                    <QuestField role={session.user.role} adminData={adminData} subId={data.finalData[0].subjectDetails.id}  data={data.finalData[1].activityData}/>

                    <LessonField lessonData={lessonData} subId={data.finalData[0].subjectDetails.id}/>                 

                  
                </div>

            </div>


            <div className='h-full w-1/2  absolute flex flex-col gap-2 items-end py-10 px-16 top-0 right-0'>
                
                <div className=' bg-[#36393E] h-44 w-96 rounded-md p-5'>
                    <span className='flex gap-1 font-bold'>Announcements <Image
                     height={15} width={15} alt='annoucement' src={'/DashboardAssets/icons/announcement.svg'}/>
                     </span>

                     <p className='text-sm font-extralight mt-3 text-justify'>Join us for a programming exercise on September 08, 2023 at CCIS Building. Whether you're a beginner or an experienced coder, this is a great opportunity to practice your skills and have some fun!</p>
                </div>


            {session.user.role === 'employee' ? <button className='px-3 py-2 rounded bg-[#E58E27] mt-5'>Add Announcements</button>: <Notes subId={params.id} userId={session.user.id}/>}
            <NoteCotainer noteData={noteData}/>
            </div>
        </div>
   </div>
   </>
  )
}

export default Subject