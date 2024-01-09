import React from 'react'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";
const CharacterCustomization = () => {
  return (
    <div className='w-full h-screen absolute z-[1000] inset-0 bg-[#161A1E]'>
        

        <div className='w-full h-full flex justify-center items-center '>
            <div className='w-1/3 h-full p-5'>
                <div className='w-full h-full bg-[#41454A] rounded p-4'>
                    <Link href={"dashboard"} className='text-sm flex items-center hover:text-orange-500 gap-2 hover:gap-3'><FaArrowLeftLong /> Back</Link>
                

                    <div>
                        <div className='flex justify-center gap-5 mt-5 flex-wrap items-center'>
                            <div className='bg-[#2d3034] w-32 h-32 rounded' ></div>
                            <div className='bg-[#2d3034] w-32 h-32 rounded' ></div>
                            <div className='bg-[#2d3034] w-32 h-32 rounded' ></div>
                            <div className='bg-[#2d3034] w-32 h-32 rounded' ></div>
                        </div>

                        <div className='flex justify-center gap-3 mt-6 flex-wrap items-center'>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                            <div className='bg-[#2d3034] w-20 h-20 rounded' ></div>
                        </div>
                    </div>
                </div>

            
            </div>

            <div className='w-2/3 h-full p-5'>
                <div className='w-full h-full bg-[#41454A] rounded'></div>
            </div>
        </div>

    </div>
  )
}

export default CharacterCustomization