import React from 'react'
import Image from 'next/image'
const Notes = () => {
  return (
    <div className=' h-44 w-96 p-2 flex justify-end items-start'>
        <button className='px-3 py-2 bg-[#E58E27] flex justify-center items-center  rounded gap-2'>Add Notes <Image alt='add' 
        src={'/DashboardAssets/icons/add.svg'} 
        height={15}
        width={15}  
        />
        </button>
    </div>
  )
}

export default Notes