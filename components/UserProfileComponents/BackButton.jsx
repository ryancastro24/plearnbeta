'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
const BackButton = () => {
    const router = useRouter()
  return (
    <div onClick={() => router.back()} className='flex justify-center gap-2 hover:gap-3 cursor-pointer items-center'>
        <Image width={15} height={15} alt='back' src={'/DashboardAssets/icons/backArrow.svg'}/>
        <span>BACK</span>
    </div>
  )
}

export default BackButton