import React from 'react'
import Image from 'next/image'
import 'animate.css';
const DashboardAnnouncementInnerContent = ({setShowModal}) => {
  return (
    <div className='w-full h-full bg-[#161a1ec2] z-40 absolute flex justify-center items-center top-0 right-0'>
   
        <div style={{ 
          backgroundImage: `url("/announcementsAssets/announcement1.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",}} className=' w-[800px] h-[500px] rounded flex justify-center items-center relative animate__animated animate__backInUp'>


          <button className='bg-orange-500 rounded px-3 py-2 absolute bottom-12 right-10 shadow-md'>Subscribe</button>
          
          <button style={{top:-10,right:-10}}  onClick={() => setShowModal(false)} className='bg-red-500 px-2 py-2 absolute  rounded-full'>
            <Image alt='close' width={15} height={13} src={'/DashboardAssets/icons/xmark.svg'} />
          </button>
        </div>
    </div>
  )
}

export default DashboardAnnouncementInnerContent