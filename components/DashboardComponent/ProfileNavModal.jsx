import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
const ProfileNavModal = ({name,email}) => {
  return (
    <div className='w-64 h-72 bg-[#D2F5FF] p-5 text-black flex flex-col gap-3  rounded absolute right-4 z-50 top-3'>
          <div className='flex  gap-2'>
                <div className='w-12 h-12 bg-[#E58E27] rounded-full '>

                </div>

                <div className='flex flex-col justify-center '>
                    <span className='font-bold'>{name}</span>
                    <span className='text-xs'>181-02048</span>
                </div>
            </div>

            <div className='flex flex-col'>
                <span className='text-sm'><b>Email:</b> {email}</span>
                <span className='text-sm'><b>Course:</b> BSIT</span>
                <span className='text-sm'><b>YearLevel:</b> 4th Year</span>
               
            </div>

            <div>
                <div className='w-full flex justify-center items-center'>
                    <Link href={'/userProfile'} style={{width:"100%"}} className="rounded flex justify-center items-center py-2 bg-[#A0C5CF] hover:bg-[#8aabb4] font-light text-black">Manage Account</Link>
                </div>
            </div>
            <div className='w-full'>
              <button className='px-3 py-2 text-white mt-3 bg-red-500 rounded cursor-pointer' onClick={() => {
                signOut()
                localStorage.removeItem('hasDisplayedModal');

                }}>Logout</button>
            </div>
    </div>
  )
}

export default ProfileNavModal