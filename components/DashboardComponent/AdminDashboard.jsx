'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AdminSearchBtn from './adminDashboard/AdminSearchBtn'
import AddSubjectModal from './adminDashboard/AddSubjectModal'
import AdminSubjectCard from './adminDashboard/AdminSubjectCards'
const AdminDashboard = ({subjects,idNumber}) => {

    const [isShow,setIsShow] = useState(false);
  return (
    <div className='w-full h-screen pt-28 p-6 flex flex-col gap-10 relative'>


      
      {isShow && <AddSubjectModal idNumber={idNumber} show={setIsShow}/>}
          <div className='flex items-center justify-between'> 
          
            <AdminSearchBtn/>   

            <div className='flex justify-center items-center gap-3'>
              <button className='px-4 py-2 bg-[#41454A] flex justify-center items-center gap-2 rounded'><Image alt='archives' src={'/DashboardAssets/icons/archive.svg'} height={15} width={15}  />Archives</button>
              <button onClick={() => setIsShow(true)} className='px-4 py-2 bg-[#E58E27] flex justify-center items-center gap-2 rounded'><Image alt='archives' src={'/DashboardAssets/icons/add.svg'} height={15} width={15}  />Add Subject</button>
            </div>
          </div>

        

          <div className='flex gap-10 w-full flex-wrap pb-10 '>
              <AdminSubjectCard subjects={subjects}/>
          </div>
          
         
    </div>
  )
}

export default AdminDashboard