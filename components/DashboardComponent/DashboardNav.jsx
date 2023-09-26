'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
const DashboardNav = ({name,email,level,rank}) => {
  const pathname = usePathname();
  const [data,setData] = React.useState({
    name,
    level,  
    email,
    rank
  })
  return (
    <div className='flex items-center justify-between w-full px-5 py-6 absolute top-0'>
        <ul className='flex items-center justify-center gap-7  '>
            <li className={pathname === '/dashboard' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/dashboard'}>Dashboard</Link></li>
            <li className={pathname === '/message' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/message'}>Messages</Link></li>
            <li className={pathname === '/progress' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/progress'}>Progress</Link></li>
            <li className={pathname === '/leaderboard' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/leaderboard'}>Leaderboard</Link></li>
            <li className={pathname === '/redeem' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/redeem'}>Redeem</Link></li>
        </ul>


        <div className='flex items-center justify-center gap-5'>
            <span className='text-sm'>Level {data.level}</span>
            <span className='text-sm'>{data.name}</span>
            <button className='px-3 py-2 bg-red-500 rounded' onClick={() => signOut()}>Logout</button>
            <div className='w-8 h-8 rounded-full bg-orange-500'></div>
        </div>

          
    </div>
  )
}

export default DashboardNav