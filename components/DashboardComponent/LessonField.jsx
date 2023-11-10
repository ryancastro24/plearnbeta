'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const LessonField = ({subId,lessonData}) => {
 

    const router = useRouter()
  return (
      
    <div onClick={() => router.push(`/lessonContent/${subId}`)} className=' flex h-16 w-60 rounded p-1 relative bg-[#D2F5FF] cursor-pointer hover:bg-[#879fa5]'>
    <div className=' h-full w-3/5 rounded flex flex-col p-2 '>
    
            <span className='text-black flex gap-2 font-semibold'><Image alt='quest' 
            src={'/DashboardAssets/icons/lessons.svg'} 
            height={15}
            width={15}
            />
            Lessons
            </span>

            <span className='text-black text-xs'>
                Available: <b>{lessonData.length}</b>
            </span>

        
    </div> 
    <div className=' h-full w-2/5 rounded bg-[#E58E27] flex items-center justify-center '>

      <span>{lessonData.length} <span className='text-xs'>Lesson</span></span>
    
    </div> 
</div>
  )
}

export default LessonField