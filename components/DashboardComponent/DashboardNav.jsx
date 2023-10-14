'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ProfileNav from './ProfileNav'
const DashboardNav = ({name,email,level,rank,role}) => {
  const pathname = usePathname();
  const [data,setData] = React.useState({
    name,
    level,  
    email,
    rank
  })
  return (
    <div className='flex items-center justify-between w-full px-5 py-6 z-10  absolute top-0'>
        <ul className='flex items-center justify-center gap-7  '>
            <li className={pathname === '/dashboard' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/dashboard'}>Dashboard</Link></li>
            <li className={pathname === '/message' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/message'}>Messages</Link></li>
            <li className={pathname === '/progress' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/progress'}>Progress</Link></li>
            <li className={pathname === '/leaderboard' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/leaderboard'}>Leaderboard</Link></li>
            <li className={pathname === '/redeem' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/redeem'}>Redeem</Link></li>
        </ul>


        <div className='flex items-center justify-center gap-5'>
           {role === "student" ? <span className='text-sm'>Level {data.level}</span> : null} 
           
            <Link className='cursor-pointer' href={'/cart'}><Image width={20} height={20} alt='cart' src={'/DashboardAssets/icons/cart.svg'}/></Link>
            <ProfileNav name={name} email={email}/>
        </div>

          
    </div>
  )
}

export default DashboardNav