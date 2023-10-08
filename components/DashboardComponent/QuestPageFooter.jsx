'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const QuestPageFooter = ({role,setShowModal,activityLength}) => {
    const router = useRouter();
  return (
    <div className='mt-4 w-full flex justify-between items-center'>
            <button onClick={() => router.back()} className='px-3 py-2 rounded bg-red-500 flex justify-center items-center gap-2'>Return <Image 
            src={'/DashboardAssets/icons/exit.svg'} 
            alt='return'
            width={15}
            height={15}
            />
            </button>
            <div className='flex justify-center items-center gap-2'>
              {!!activityLength &&   <button className='px-3 py-2 rounded bg-[#242B32] flex justify-center items-center gap-2'>Sort
                <Image src={'/DashboardAssets/icons/sort.svg'} alt='sort' width={15} height={15}/>
                </button>}
              
                {role === 'employee' &&  <button onClick={() => setShowModal(true)} className='px-3 py-2 rounded bg-[#E58E27]'>Add Activity</button>}
               
            </div>
    </div>
  )
}

export default QuestPageFooter