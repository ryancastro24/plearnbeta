'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const SideSubjects = ({subjects}) => {
  const router = useRouter();
  return (
    <div className='w-full mt-5 flex justify-between flex-col gap-4'>
        <h2 className='font-bold'>Other Realms</h2>


        <div className='flex flex-col gap-2'>
            {subjects.slice(4,7).map(val => (
                <div onClick={() => router.push(`/dashboard/${val.id}`)} key={val.id} className='bg-[#D2F5FF] cursor-pointer relative hover:bg-[#798f95] h-14 w-full rounded-sm flex p-2 items-center gap-3'>
                    
                    {/* {val.activityId.length > 0 && <div style={{top:-5,right:-5}} className='w-6 h-6 flex justify-center items-center bg-red-500 rounded-full absolute  '>
                    <span className='text-sm'>{val.activityId.length}</span></div>}  */}
                  <div>
                      <Image src={'/DashboardAssets/img/desert pixelate 0.png'} height={45} width={45}/>
                  </div>

                  <div>
                  <span className="text-sm text-black">{val.subjectCode}</span>
                  <span className="text-sm text-black line-clamp-1">{val.title}</span>
                  </div>
                 
                </div>
            ))} 
        </div>
        

    </div>
  )
}

export default SideSubjects