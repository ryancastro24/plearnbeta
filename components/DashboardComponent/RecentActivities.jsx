import React from 'react'
import Image from 'next/image'
const RecentActivities = () => {
  return (
    <div>
        <h1 className='text-xl '>Recent Activities</h1>

        <ul>
            <li className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image  src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>Sub Quest - EEP 1</li>
            <li className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image  src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>Sub Quest - EEP 1</li>
            <li className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image  src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>Sub Quest - EEP 1</li>
            <li className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image  src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>Sub Quest - EEP 1</li>
            <li className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image  src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>Sub Quest - EEP 1</li>
            <li className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image  src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>Sub Quest - EEP 1</li>
        </ul>
    </div>
  )
}

export default RecentActivities