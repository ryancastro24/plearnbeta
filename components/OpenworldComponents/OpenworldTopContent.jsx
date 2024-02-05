import React from 'react'
import { openworldCourseRelatedTopics } from '@/libs/testing'
import OpenworldCourseRelatedContainer from './OpenworldCourseRelatedContainer'
const OpenworldTopContent = () => {
  return (
    <div className='w-full h-[420px] rounded bg-[#41454A] p-6 flex flex-col justify-between'>

        <h2 className='text-xl'>Course Related Topics</h2>
        <div className='flex justify-between items-center'>
        
        {openworldCourseRelatedTopics.map(val =>  <OpenworldCourseRelatedContainer key={val.id} {...val}/>)}
           

        </div>

    </div>
  )
}

export default OpenworldTopContent