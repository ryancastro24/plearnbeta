'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { levelIdentifier } from '@/libs/testing'
const UserTable = ({data,idNumber}) => {

  const router = useRouter();

  return (
    <div>
          <table className='w-full   mt-4 '>
                <thead >
                  <tr className="bg-[#272A2E]" >
                    <th className='py-2 '>Id Number</th>
                    <th className='py-2 '>Name</th>
                    <th className='py-2 '>Course & Year</th>
                    <th className='py-2 '>Level & Rank</th>
                    <th className='py-2 '>Points Earned</th>
                  </tr>
                </thead>
                <tbody  >
            
                 {data.slice(0,10).map((val,i) => (
                  <tr onClick={() =>  router.push(`/leaderboard/${val.id}`)} className={`text-center  cursor-pointer hover:bg-[#de9337] ${idNumber === val.idNumber ? 'bg-[#D2F5FF] text-black' : i % 2 === 0 ? '' : 'bg-[#3A3D42]'}`} key={val.id}>
                    <td className='p-2 text-left'><span className='flex gap-4 px-2'><b>{i + 1}.</b> {val.idNumber}</span></td>
                    <td className='p-2'>{val.name}</td>
                    <td className='p-2'>{val.course.name} {val.yearLevel}</td>
                    <td className='p-2'>{levelIdentifier(val.level)}</td>
                    <td className='p-2'>{val.points} pts</td>
                  </tr>
                 ))}
               
                </tbody>
            </table>
          
    </div>
  )
}

export default UserTable