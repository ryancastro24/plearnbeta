'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
let arr = []
const RecentActivitiesInner = ({activities}) => {

  return (
    <div>

      {activities.length <= 0 ? <span>Empty</span> : <div>{activities.slice(0,5).map(val => <li key={val.id} className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image alt='details' src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>{val.activity.title}</li>)}</div>}
        


    </div>
  )
}

export default RecentActivitiesInner