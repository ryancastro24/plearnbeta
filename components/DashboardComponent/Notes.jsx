'use client'

import React from 'react'
import Image from 'next/image'
import NotesModal from './NotesModal'

const Notes = ({userId,subId}) => {
  const [isOpenModal,setIsOpenModal] = React.useState(false);

  return (
    <div className=' h-44 w-96 p-2 flex justify-end items-start'>
        {isOpenModal && <NotesModal userId={userId} subId={subId} setIsOpenModal={setIsOpenModal}/>}
        <button onClick={() => setIsOpenModal(true)} className='px-3 py-2 bg-[#E58E27] flex justify-center items-center  rounded gap-2'>Add Notes <Image alt='add' 
        src={'/DashboardAssets/icons/add.svg'} 
        height={15}
        width={15}  
        />
        </button>
    </div>
  )
}

export default Notes