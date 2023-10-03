import React from 'react'
import Image from 'next/image'
const QuestsPage = ({activityId,role}) => {
  return (
    <div className=' w-full mt-5'>
        {activityId.map(val => <div className='flex justify-between items-center px-4 py-4 w-full bg-[#41454A] rounded mt-4' key={val.id}>
            <div className='flex flex-col gap-1'>
              <span>{val.title}</span>
              <span className='text-sm'>{val.type}</span>
            </div>


        {role === 'employee' && <Image src={'/DashboardAssets/icons/edit.svg'} alt='edit quest' width={25} height={25}/>}
        
          
        </div>)}
    </div>
  )
}

export default QuestsPage