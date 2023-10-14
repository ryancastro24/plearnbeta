'use client'

import React from 'react'
import UserTable from './UserTable'
import { useEffect } from 'react';
import AllianceRanking from './AllianceRanking';
import Image from 'next/image'
 const LeaderboardInnerPage = ({idNumber}) => {

    const [content,setContent] = React.useState('overall')
    const [data,setData] = React.useState([])

    const [loading,setLoading] =  React.useState(false)

    useEffect(() => {
     fetch(`http://localhost:3000/api/students/${content}`,{
        next:{
          revalidate:0
        }
      }).then(response => response.json())
      .then(json => setData(json))
    },[content])

  return (
    <div className='w-full h-screen pt-16 p-6'>
    
    <div className='w-full h-full p-5 flex justify-between items-center'>

        <div className='w-1/5 rounded-md h-full bg-[#41454A] p-5 flex flex-col justify-between'>
          <div>
            <h1 className='text-2xl'>Rankings</h1>
            <ul className='flex  flex-col mt-5'>
                <li  onClick={() => setContent("overall")} className={`p-2 px-4 rounded cursor-pointer ${content === 'overall' ? "bg-[#272A2E]": "hover:bg-[#E58E27] "}`}  >Overall Rankings</li>
                <li onClick={() => setContent("college")} className={`p-2 px-4 rounded  cursor-pointer ${content === 'college' ? "bg-[#272A2E]": "hover:bg-[#E58E27]"}`} >College Rankings</li>
                <li  onClick={() => setContent("course")} className={`p-2 px-4 rounded  cursor-pointer ${content === 'course' ? "bg-[#272A2E] ": "hover:bg-[#E58E27]"}`} >Course Rankings</li>
               
            </ul>

            <AllianceRanking/>

            <div>
                <button className='bg-[#E58E27] mt-6 w-full flex justify-center items-center gap-2 p-3 rounded'>
                    <Image width={20} height={20} alt="map" src={'/LeaderBoardAssets/icons/map.svg'}/>
                    Open World
                </button>
            </div>

         </div>

        </div>

        <div  className='w-3/4 rounded-md h-full  flex flex-col  p-5 bg-[#41454A]'>
            <div>
              <h1 className='mb-2 text-lg'>{content} Rakings</h1>
              <hr className='opacity-25'/>
            </div>

          
              <UserTable  idNumber={idNumber} data={data}/>
         
        </div>

    </div>

  
  </div>
  )
}

export default LeaderboardInnerPage