'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const QuestField = ({activityId,id}) => {


    const router = useRouter();
  return (
   <>
   <div onClick={() => router.push(`/dashboard/${id}/${id}`) } className=' flex h-16 w-60 rounded p-1 relative bg-[#D2F5FF] cursor-pointer hover:bg-[#879fa5]'>
                        <div className=' h-full w-3/5 rounded flex flex-col p-2 '>
                        
                                <span className='text-black flex gap-2 font-semibold'><Image alt='quest' 
                                src={'/DashboardAssets/icons/quest.svg'} 
                                height={15}
                                width={15}
                                />
                                Quests
                                </span>

                                <span className='text-black text-xs'>
                                    Available: <b>{activityId.length}</b>
                                </span>
                            
                            
                        </div> 
                        <div className=' h-full w-2/5 rounded bg-[#E58E27] flex items-center justify-center '>
                            {activityId.length > 0 ? <div>
                                <span className='text-md font-thin mr-2'>0/{activityId.length}</span>
                                <span className='text-xs '>Done</span>
                            </div>
                            :
                            <span className='text-xs font-extralight'>No Available</span>
                        }
                    
                        </div> 
                    </div>

   </>
  )
}

export default QuestField