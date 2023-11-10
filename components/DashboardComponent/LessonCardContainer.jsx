import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const LessonCardContainer = ({title,filename, lessonNumber}) => {
  return (
    <div className=' h-44 w-60 rounded bg-[#D2F5FF]'>
            <div className='w-full h-2/5 flex justify-between  p-3 pb-1'>
                <span className='text-black font-bold'>{title}</span>
                <div>
                    <span className='text-black text-xs line-clamp-none'>lesson #{lessonNumber + 1}</span>
                </div>
            </div>

            <div className=' w-full h-3/5 bg-[#41454A] flex justify-center items-center rounded'>
            <Link className='flex flex-col gap-2 justify-center items-center ' href={`/api/download?filename=${filename}`}>
              <Image alt='download' src={'/DashboardAssets/icons/download.svg'} width={20} height={20} />
              <span className='text-xs'>Download</span>
             </Link>  
            </div>
    </div>
  )
}

export default LessonCardContainer