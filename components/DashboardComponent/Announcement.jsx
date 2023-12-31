'use client'
import { useEffect, useState } from 'react'
import { levelRewards } from '@/libs/testing'


let testLevel = 5;
const Announcement = () => {

  const [levelIndicator,setLevelIndicator] = useState(testLevel);



  return (
    <div className='w-full h-56 rounded-md bg-[#41454A] overflow-x-auto p-5'>

        

      <div className='h-full w-full '>
        

        <div className='w-full h-3 bg-[#383b40]'>
           <div style={{width:`${levelIndicator * 10}%`}} className='h-full bg-orange-500 rounded'></div>
        </div>
      </div>


      </div>
    

  )
}

export default Announcement