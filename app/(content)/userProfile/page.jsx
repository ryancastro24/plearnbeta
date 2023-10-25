import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import ChangePasswordfield from '@/components/UserProfileComponents/ChangePasswordfield'
import BackButton from '@/components/UserProfileComponents/BackButton'
const UserProfile = async() => {
    const session = await getServerSession(authOptions)
    
  return (
    <div className='bg-[#161A1E] w-full h-full absolute z-50 p-7  flex justify-center items-center'>
           <div className='absolute left-10 top-10'>
                <BackButton/>
            </div>  
        
        <div className='w-3/5  h-full'>

           

            <div className='flex justify-center items-center pt-10 gap-6'>
                <div className='w-40 h-40 bg-yellow-500 rounded-full'></div>
                <div>
                    <h2 className='text-2xl'>{session.user.name}</h2>
                    <div className='flex flex-col mt-3'>
                        <span className='text-sm'><span className='font-bold'>Id Number:</span> {session.user.idNumber}</span>
                        <span className='text-sm'><span className='font-bold'>Course and Year:</span> {session.user.yearLevel}{session.user.yearLevel === 1 ? "st" : session.user.yearLevel === 2 ? "nd" : session.user.yearLevel === 3 ? "rd" : "th"} year</span>
                    </div>
                </div>
            </div> 
            <div className='flex justify-center items-center gap-6 mt-10'>
                <div className='w-28 h-28 rounded bg-[#A0C5CF] flex gap-2 flex-col justify-center items-center p-2'>
                    <Image alt='book' width={45} height={45} src={'/userProfile/book-open-solid 1.svg'} />
                    <span style={{fontSize:10}} className=' text-black text-center'>NOTES & PUBLISH ARTICLES</span>
                </div>

                <div className='w-28 h-28 rounded bg-[#A0C5CF] gap-2 flex flex-col justify-center items-center p-2'>
                    <Image alt='book' width={45} height={45} src={'/userProfile/medal-solid 1.svg'} />
                    <span style={{fontSize:10}} className=' text-black text-center'>SKILLS AND HOBBIES MASTERED</span>
                </div>

                <div className='w-28 h-28 rounded bg-[#A0C5CF] gap-2 flex flex-col justify-center items-center p-2'>
                    <Image alt='book' width={45} height={45} src={'/userProfile/trophy-solid 1.svg'} />
                    <span style={{fontSize:10}} className=' text-black text-center'>AWARDS & ACHIEVEMENTS</span>
                </div>

                <div className='w-28 h-28 rounded bg-[#A0C5CF] gap-2 flex flex-col justify-center items-center p-2'>
                    <Image alt='book' width={45} height={45} src={'/userProfile/user-solid 2.svg'} />
                    <span style={{fontSize:10}} className=' text-black text-center'>PERSONAL INFORMATION</span>
                </div>
            </div>


            <ChangePasswordfield/>

        </div>


        <div className='w-2/5  h-full p-5'>
                <div className='bg-[#41454A] w-full h-full rounded flex flex-col items-center gap-3 p-3'>
                    <h2>ITEMS COLLECTED</h2>
                    <div className='flex justify-center items-center flex-wrap gap-3'>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>
                        <div className='w-20 h-20 rounded bg-[#33363a]'></div>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default UserProfile