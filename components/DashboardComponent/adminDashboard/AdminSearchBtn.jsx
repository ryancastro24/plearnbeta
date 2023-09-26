'use client'

import React from 'react'
import Image from 'next/image'
const AdminSearchBtn = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
        <input type="text"  placeholder='search'  className='w-96 px-3 py-2 bg-[#41454A] rounded '/>
        <button className='bg-[#D2F5FF]  px-3 py-3 rounded flex justify-center items-center'><Image src={'/DashboardAssets/icons/searchIcon.svg'} height={15} width={15}/></button>
    </div>
  )
}

export default AdminSearchBtn