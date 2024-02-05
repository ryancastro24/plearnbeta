'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoMdArrowRoundBack } from "react-icons/io";
const QuestPageFooter = ({role,setShowModal,activityLength}) => {
    const router = useRouter();
  return (
    <div className='w-full flex justify-between items-center mb-5 pb-4 pt-4 sticky top-4 bg-[#161A1E]'>
            <button onClick={() => router.back()} className=' flex justify-center hover:gap-3 items-center gap-2'><IoMdArrowRoundBack /> BACK
            </button>
            <div className='flex justify-center items-center gap-2'>
              {!!activityLength && <button className='px-3 py-2 rounded bg-[#242B32] flex justify-center items-center gap-2'>Sort
                <Image src={'/DashboardAssets/icons/sort.svg'} alt='sort' width={15} height={15}/>
                </button>}
              
                {role === 'employee' &&  <button onClick={() => setShowModal(true)} className='px-3 py-2 rounded bg-[#E58E27]'>Add Activity</button>}
               
            </div>
    </div>
  )
}

export default QuestPageFooter