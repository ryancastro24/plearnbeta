
import React from 'react'
import OpenworldTopContent from '@/components/OpenworldComponents/OpenworldTopContent'
import Backbutton from '@/components/DashboardComponent/Backbutton'
import OpenwordBottomContent from '@/components/OpenworldComponents/OpenwordBottomContent'
const OpenWorld = () => {
  return (
    <div className='w-full h-screen p-6 pt-16 pb-5 absolute inset-0 bg-[#161A1E] z-[1000]'>

      
        <Backbutton/>

        <OpenworldTopContent/>
        <OpenwordBottomContent/>


    </div>
  )
}

export default OpenWorld