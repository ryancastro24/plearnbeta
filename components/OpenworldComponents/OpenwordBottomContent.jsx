import React from 'react'
import { openworldGeneralTopics } from '@/libs/testing'
import OpenworldCourseRelatedContainer from './OpenworldCourseRelatedContainer'
const OpenwordBottomContent = () => {
  return (
    <div className='w-full rounded bg-[#41454A] p-6 flex flex-col gap-5 justify-between mt-5'>

    <h2 className='text-2xl'>General Topics</h2>
    <div className='flex justify-between items-center flex-wrap gap-6 '>
    
    {openworldGeneralTopics.map(val =>  <OpenworldCourseRelatedContainer key={val.id} {...val}/>)}
       

    </div>

</div>
  )
}

export default OpenwordBottomContent