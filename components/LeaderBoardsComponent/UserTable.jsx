'use client'
import React from 'react'
import { Suspense } from 'react'
const UserTable = ({data,idNumber}) => {

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
                <tbody>
                <Suspense fallback={<p>Loading Rankings...</p>}>
                 {data.slice(0,10).map((val,i) => (
                  <tr className={`text-center ${idNumber === val.idNumber ? 'bg-[#E58E27]' : i % 2 === 0 ? '' : 'bg-[#3A3D42]'}`} key={val.id}>
                    <td className='p-2 text-left'><span className='flex gap-4 px-2'><b>{i + 1}.</b> {val.idNumber}</span></td>
                    <td className='p-2'>{val.name}</td>
                    <td className='p-2'>{val.course.name} {val.yearLevel}</td>
                    <td className='p-2'>{val.level}</td>
                    <td className='p-2'>{val.points} pts</td>
                  </tr>
                 ))}
                </Suspense>
                </tbody>
            </table>
          
    </div>
  )
}

export default UserTable