'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const FooterBackButton = () => {
    const router = useRouter()
  return (
   <>
    <button onClick={() => router.back()} className='px-3 py-2 rounded bg-red-500 flex justify-center items-center gap-2'>Return <Image 
            src={'/DashboardAssets/icons/exit.svg'} 
            alt='return'
            width={15}
            height={15}
            />
    </button>
    
   </>
  )
}

export default FooterBackButton