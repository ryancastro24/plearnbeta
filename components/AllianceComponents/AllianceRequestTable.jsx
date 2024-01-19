'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const AllianceRequestTable = ({allianceRequests}) => {

    const router = useRouter();

    const handleStopPropagation = (e) =>{
        e.stopPropagation();
    }

    const handleUpdate = async(request_id,user_id,alliance_id,e) => {
        handleStopPropagation(e);

        await  axios.patch('/api/allianceRequests',{request_id,user_id,alliance_id})
                    .then(() => alert("user has been added to the clan"))
                    .catch((e) => alert(e.message))
    }
    
   


  return (
    <div>
        <table className='w-full mt-4 '>
                <thead >
                  <tr className="bg-[#272A2E]" >
                    <th className='py-2 '>Id Number</th>
                    <th className='py-2 '>Name</th>
                    <th className='py-2 '>Course & Year</th>
                    <th className='py-2 '>Level & Rank</th>
                    <th className='py-2 '>Approval</th>
                  </tr>
                </thead>
                <tbody>
            
                 {allianceRequests.slice(0,10).map((val,i) => (
                  <tr onClick={() =>  router.push(`/leaderboard/${val.user.id}`)} className={`text-center hover:bg-[#D2F5FF] hover:text-black  cursor-pointer ${ i % 2 === 0 ? '' : 'bg-[#3A3D42]'}`} key={val.id}>
                    <td className='p-2 text-left'><span className='flex gap-4 px-2'><b>{i + 1}.</b> {val.user.idNumber}</span></td>
                    <td className='p-2'>{val.user.name}</td>
                    <td className='p-2'> {val.user.yearLevel}</td>
                    <td className='p-2'>{val.user.level}</td>
                    <td className='p-2'>
                        <button onClick={(e) =>{ 
                    
                            handleUpdate(val.id, val.user.id, val.alliance_id ,e)
                            }} className='px-3 py-2 rounded bg-orange-600 hover:bg-orange-700'>approve</button>
                    </td>
                  </tr>
                 ))}
               
                </tbody>
            </table>
    </div>
  )
}

export default AllianceRequestTable