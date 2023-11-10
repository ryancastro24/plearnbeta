'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const CoverPhotoDiv = () => {
    const router = useRouter()
  return (
    <div className='w-full bg-blue-500 h-2/5  p-7'>
           
                <span className='text-sm cursor-pointer flex  items-center gap-2 hover:gap-3' onClick={() => router.back()}>
                    <Image alt='back' src={'/DashboardAssets/icons/backArrow.svg'} width={15} height={15}/>
                    BACK
                </span>
          
        </div>
  )
}

export default CoverPhotoDiv