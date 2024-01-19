'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const AllianceMembersTable = ({allianceMembers}) => {

    const router = useRouter();

  

  return (
    <div>
        <table className='w-full mt-4 '>
                <thead >
                  <tr className="bg-[#272A2E]" >
                    <th className='py-2 '>Id Number</th>
                    <th className='py-2 '>Name</th>
                    <th className='py-2 '>Course & Year</th>
                    <th className='py-2 '>Level & Rank</th>
                    <th className='py-2 '>Position</th>
                    <th className='py-2 '>Approval</th>
                  </tr>
                </thead>
                <tbody>
            
                 {allianceMembers.slice(0,10).map((val,i) => (
                  <tr onClick={() =>  router.push(`/leaderboard/${val.id}`)} className={`text-center hover:bg-[#D2F5FF] hover:text-black  cursor-pointer ${ i % 2 === 0 ? '' : 'bg-[#3A3D42]'}`} key={val.id}>
                    <td className='p-2 text-left'><span className='flex gap-4 px-2'><b>{i + 1}.</b> {val.idNumber}</span></td>
                    <td className='p-2'>{val.name}</td>
                    <td className='p-2'> {val.yearLevel}</td>
                    <td className='p-2'>{val.level}</td>
                    <td className='p-2'>{val.alliancePosition}</td>
                    <td className='p-2'>
                        <button className='px-3 py-2 rounded bg-red-600 hover:bg-red-700'>report</button>
                    </td>
                  </tr>
                 ))}
               
                </tbody>
            </table>
    </div>
  )
}

export default AllianceMembersTable