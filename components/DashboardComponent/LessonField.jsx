'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const LessonField = ({subId}) => {
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


        
        
    </div> 
    <div className=' h-full w-2/5 rounded bg-[#E58E27] flex items-center justify-center '>

        <span className='text-xs font-extralight'>No Available</span>
    

    </div> 
</div>
  )
}

export default LessonField