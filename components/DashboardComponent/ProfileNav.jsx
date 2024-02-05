'use client'

import React from 'react'
import ProfileNavModal from './ProfileNavModal'
import Image from 'next/image'
const ProfileNav = ({name,email,idNumber,course}) => {
    const [openModal,setOpenModal] = React.useState(false)
  return (
    <div>
          <div onClick={() => setOpenModal(!openModal)}  className='cursor-pointer w-8 h-8 rounded-full  relative'>
                 <div className='w-full h-full relative overflow-hidden rounded-full'>
                 <Image fill className='object-cover' src={'/HomePageAssets/Albert_Einstein animated2.png'}/>
                 </div>
               {openModal && <ProfileNavModal idNumber={idNumber} course={course} name={name} email={email}/>}     
          </div>
    </div>
  )
}

export default ProfileNav