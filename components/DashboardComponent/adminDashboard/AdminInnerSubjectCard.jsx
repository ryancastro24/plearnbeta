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

                    {/* {val.activityId.length > 0 && <div style={{top:-10,right:-5}} className='w-7 h-7 flex justify-center items-center bg-red-500 rounded-full absolute  '>
                    <span>{val.activityId.length}</span></div>}  */}

                <div className='flex flex-col items-center rounded-md overflow-hidden'>
                    <Image alt='sampleImage' src={`/DashboardAssets/img/${val.realm ? val.realm + ".png" : 'forest pixelate 0 (1).png'}`} height={160} width={200}/>

                </div>

                <div className='w-full mt-3 flex flex-col '>
                    <h1 className='flex justify-between items-center font-bold w-full text-black text-xl'>{val.subjectCode} <Image src={'/DashboardAssets/icons/circle-info-solid 5.svg'} height={15} width={15}/></h1>
                    <span className='text-black text-sm line-clamp-1 mt-2'>{val.title}</span>
                    <span className='text-black text-sm'><b>Section:</b> {val.section}</span>
            
                </div>
                
            </div>
            ))}
    
    </>
  )
}

export default AdminInnerSubjectCard