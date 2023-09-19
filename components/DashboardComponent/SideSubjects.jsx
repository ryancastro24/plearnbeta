import React from 'react'
import Image from 'next/image'
const SideSubjects = ({subjects}) => {
  return (
    <div className='w-full mt-5 flex justify-between flex-col gap-4'>
        <h2 className='font-bold'>Other Realms</h2>


        <div className='flex flex-col gap-2'>
            {subjects.slice(4).map(val => (
                <div key={val.id} className='bg-[#D2F5FF] h-14 w-full rounded-sm flex p-2 items-center gap-3'>

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