'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const AdminInnerSubjectCard = ({subjects,role}) => {


    const router = useRouter();
  return (
    <>

            {subjects.map(val => ( 

                    
            <div onClick={() => router.push(`/dashboard/${val.id}`)} key={val.id} className='h-80 w-56 bg-[#D2F5FF] relative cursor-pointer hover:bg-[#5f7176] rounded-md p-3'>
                <div className='flex flex-col items-center rounded-md overflow-hidden'>
                    <Image alt='sampleImage' src={`/DashboardAssets/img/${val.realm ? val.realm + ".png" : 'forest pixelate 0 (1).png'}`} height={160} width={200}/>

                </div>

                <div className='w-full mt-3 flex flex-col '>
                    <h1 className='flex justify-between items-center font-bold w-full text-black text-xl'>{val.subjectCode} <Image src={'/DashboardAssets/icons/circle-info-solid 5.svg'} height={15} width={15}/></h1>
                    <span className='text-black text-sm line-clamp-1 mt-2'>{val.title}</span>
                    
            
                </div>
                
            </div>
            ))}
    
    </>
  )
}

export default AdminInnerSubjectCard