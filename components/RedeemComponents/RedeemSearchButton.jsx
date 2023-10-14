import React from 'react'
import Image from 'next/image'
const RedeemSearchButton = () => {
  return (
    <div>
    <div className='flex  gap-2'>
        <input className='bg-[#41454A] py-2 rounded px-3 w-80 outline-none' type="text" placeholder='search' />
        <button className='p-2 px-3 rounded bg-[#E58E27]'><Image width={20} height={20} alt='search' src={'/DashboardAssets/icons/searchIconWhite.svg'}/></button>
    </div>
    </div>
  )
}

export default RedeemSearchButton