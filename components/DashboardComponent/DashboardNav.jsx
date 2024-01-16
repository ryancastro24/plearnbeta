'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ProfileNav from './ProfileNav'
import { levelIdentifier } from '@/libs/testing'
import { colorLevelIdentifier } from '@/libs/testing'
const DashboardNav = ({id,idNumber,course,name,email,level,role,cartItems}) => {

  const  [cartData,setCartData] = React.useState([])
 
  const pathname = usePathname();
  const [data,setData] = React.useState({
    name,
    level,  
    email,
  })


  const rank = levelIdentifier(level)
  const rankColor = colorLevelIdentifier(level)
  useEffect(() => {

    setCartData(cartItems.filter(val =>  val.purchased === false))
    
    
  },[])
  return (
    <div className='flex items-center justify-between w-full px-5 py-6 z-10  absolute top-0'>
        <ul className='flex items-center justify-center gap-7  '>
            <li className={pathname === '/dashboard' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/dashboard'}>Dashboard</Link></li>
            <li className={pathname === '/events' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/events'}>Events</Link></li>
       {role ==="student" && <li className={pathname === '/progress' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/progress'}>Alliances</Link></li>}     
            <li className={pathname === '/leaderboard' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/leaderboard'}>Leaderboard</Link></li>
        {role === "student" && <li className={pathname === '/redeem' ? 'text-orange-500 font-bold text-xl ': 'text-sm text-white'}><Link href={'/redeem'}>Redeem</Link></li>}    
        </ul>


        <div className='flex items-center justify-center gap-5'>
           {role === "student" ? <span className={`text-sm flex justify-center items-center gap-2`}>Level {parseInt(data.level)} <b><span style={{color:rankColor}} > {rank}</span></b></span> : null} 
           <div className='relative'>
              {!!cartItems.length && <div className='w-4 h-4 absolute top-[-10px] right-[-10px] rounded-full bg-red-500 flex justify-center items-center'>
                <span className='text-xs'>{cartData.length}</span>
              </div>}
            <Link className='cursor-pointer' href={`/cart/${id}`}><Image width={20} height={20} alt='cart' src={'/DashboardAssets/icons/cart.svg'}/></Link>
          </div>
            <ProfileNav idNumber={idNumber} course={course} name={name} email={email}/>
        </div>

          
    </div>
  )
}

export default DashboardNav