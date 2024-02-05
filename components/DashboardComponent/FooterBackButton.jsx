'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoMdArrowRoundBack } from "react-icons/io";
const FooterBackButton = () => {
    const router = useRouter()
  return (
   <>
   <button onClick={() => router.back()} className=' flex justify-center hover:gap-3 items-center gap-2'><IoMdArrowRoundBack /> BACK
    </button>
    
   </>
  )
}

export default FooterBackButton