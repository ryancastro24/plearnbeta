'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Backbutton = () => {
  const router = useRouter();
  return (
   <>
   <button onClick={() => router.back() } className='text-sm flex absolute top-7 left-7 z-50 justify-center items-center gap-2 cursor-pointer hover:gap-3'>
    <Image alt='back arrow' src={'/DashboardAssets/icons/backArrow.svg'} height={12} width={12}/>
    BACK
   </button>
   </>
  )
}

export default Backbutton