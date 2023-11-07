import React from 'react'
import LessonCardContainer from '@/components/DashboardComponent/LessonCardContainer'
import FooterBackButton from '@/components/DashboardComponent/FooterBackButton'
import AddLessonModal from '@/components/DashboardComponent/adminDashboard/AddLessonModal'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

async function getData(id){
  const res = await fetch(`http://localhost:3000/api/lesson/${id}`,{
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
const LessonPage = async({params}) => {


    const data = await getData(params.id)
    const session = await getServerSession(authOptions)

  
  return (
    <div className='bg-[#161A1E] z-40 p-10 absolute flex flex-col justify-between top-0 w-full h-full'>
        <div>
            <h2 className='text-2xl'>Available Lessons</h2>
        </div>

        {data.length === 0 ? <div className='w-full h-full flex justify-center items-center'><span>No Available lesson</span></div>

        :
        <div className=' w-full h-full  flex flex-col'>
          <div className='w-full h-1/2 flex gap-5 items-center'>
            {data.slice(0,5).map((val,i) =>  <LessonCardContainer lessonNumber={i} {...val}/> )}
          </div>

        <div className='w-full h-1/2 flex justify-between items-center'>
        {data.slice(5,10).map((val,i) =>  <LessonCardContainer lessonNumber={i} {...val}/> )}
         
        </div>
         
      </div>

        }
        
       

        <div className='w-full h-20 flex gap-3 items-center'>
            <FooterBackButton/>

          {session.user.role === "employee" &&  <AddLessonModal subjectId={params.id}/>}
           
            
        </div>
    </div>
  )
}

export default LessonPage