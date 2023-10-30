import React from 'react'
import Image from 'next/image'
const RedeemSearchButton = ({pointsAvailable}) => {
  return (
    <div className='flex justify-between  items-center gap-3'>
    <div className='flex  gap-2'>
        <input className='bg-[#41454A] py-2 rounded px-3 w-80 outline-none' type="text" placeholder='search' />
        <button className='p-2 px-3 rounded bg-[#E58E27]'><Image width={20} height={20} alt='search' src={'/DashboardAssets/icons/searchIconWhite.svg'}/></button>
    </div>

   
    <span className='flex justify-center items-center gap-3'><span className='text-sm'><b>points available:</b> </span> <span className='px-3 py-1 bg-orange-500 rounded'>{pointsAvailable} pts</span></span>
    </div>
  )
}

export default RedeemSearchButton