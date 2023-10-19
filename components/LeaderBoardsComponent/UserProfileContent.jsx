import React from 'react'
import { levelIdentifier } from '@/libs/testing'
import Image from 'next/image'
const UserProfileContent = ({data}) => {

    const rank  = levelIdentifier(data.level)
  return (
    <div className='w-full h-3/5  flex p-7 relative items-center flex-col'>
            
            <div style={{ top: '-100px' }} className='w-48 h-48 rounded-full bg-red-500 absolute'>

            </div>

            
            <div className='flex justify-center items-center gap-56 relative'>
                <div className='flex flex-col items-end'>
                    <span className='flex justify-center items-center gap-3'><span className='text-sm'>Level {data.level}</span> <b>{rank}</b></span>
                    <span>Chorale Adveniente</span>
                </div>

              
                <div className='flex justify-center items-center gap-2'>
                    <button className='bg-[#E58E27] rounded p-2'>
                        <Image width={25} height={25} alt='add friend' src={'/LeaderBoardAssets/icons/addFriend.svg'} />
                    </button>

                    <button className='bg-[#41454A] rounded p-2 px-3'>
                       Collaborate
                    </button>
                </div>
            </div>


            <div className='mt-10 flex flex-col justify-center items-center gap-3'>
                <h2 className='text-2xl font-bold'>{data.name}</h2>
                <span className='flex justify-center items-center gap-2'>{data.course.name} <span>{data.yearLevel}{data.yearLevel === 1 ? "st" : data.yearLevel === 2 ? "nd" : data.yearLevel === 3 ? "rd" : "th"} year</span></span>
                
            </div>

            <div className='flex justify-between items-center gap-6 mt-8'>
                <div className='w-32 h-32 rounded bg-[#A0C5CF]'></div>
                <div className='w-32 h-32 rounded bg-[#A0C5CF]'></div>
                <div className='w-32 h-32 rounded bg-[#A0C5CF]'></div>
                <div className='w-32 h-32 rounded bg-[#A0C5CF]'></div>
            </div>
    </div>
  )
}

export default UserProfileContent