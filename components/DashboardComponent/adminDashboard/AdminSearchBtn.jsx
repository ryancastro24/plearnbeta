'use client'

import React from 'react'
import Image from 'next/image'
import { CgSearch } from "react-icons/cg";
const AdminSearchBtn = () => {
  return (
    <div className='flex justify-center items-center h-10  '>
        <div className='flex justify-center items-center h-full px-3 bg-[#D2F5FF] rounded-s'><span className='text-black '><CgSearch /></span></div>
        <input type="text"  placeholder='search'  className='w-96 px-3 h-full bg-[#41454A] rounded-e outline-none '/>
    </div>
  )
}

export default AdminSearchBtn