'use client'

import React from 'react'
import ProfileNavModal from './ProfileNavModal'
const ProfileNav = ({name,email,idNumber,course}) => {
    const [openModal,setOpenModal] = React.useState(false)
  return (
    <div>
          <div onClick={() => setOpenModal(!openModal)} className='cursor-pointer w-8 h-8 rounded-full bg-orange-500 relative'>
               {openModal && <ProfileNavModal idNumber={idNumber} course={course} name={name} email={email}/>}     
          </div>
    </div>
  )
}

export default ProfileNav