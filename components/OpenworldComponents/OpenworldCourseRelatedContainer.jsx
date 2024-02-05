'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const OpenworldCourseRelatedContainer = ({id,title,image}) => {

    const router = useRouter();
  return (
    <div onClick={() => router.push(`/open_world/${id}`)} className='h-80 w-72 bg-[#D2F5FF] rounded p-3 flex flex-col gap-3 cursor-pointer hover:bg-[#7a8f94]'>
    <div style={{backgroundImage:`url("/DashboardAssets/img/${image}.png")`,backgroundSize:"cover"}} className='w-full h-52 rounded'></div>

    <div>
        <h2 className='text-black text-xl font-bold truncate'>{title}</h2>
        <h3 className='text-black text-sm'><b>Rewards</b></h3>
        <div className='flex flex-col'>
            <li className='text-black text-xs list-disc'>+100000 pts total</li>
            <li className='text-black text-xs list-disc'>Certificate</li>
        </div>
    </div>
</div>
  )
}

export default OpenworldCourseRelatedContainer