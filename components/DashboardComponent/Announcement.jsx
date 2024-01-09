'use client'
import { useEffect, useState } from 'react'
import { levelRewards } from '@/libs/testing'
import Carousel from './Carousel';






const Announcement = ({userId,levelPassData}) => {


  


  return (
    <div className='w-full h-56 rounded-md bg-[#41454A]'>

        

        <div className='h-full w-full '>
          

       
           <Carousel levelPassData={levelPassData}/>
      </div>


      </div>
    

  )
}

export default Announcement