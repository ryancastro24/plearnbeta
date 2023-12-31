'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { sectionTimeSchedule } from '@/libs/testing'

const AddSectionModal = ({subjectId,sectionData}) => {

    const router = useRouter();

    const [openModal,setOpenModal] = useState(false);
    const [data,setData] = useState({
        name:"",
        schedule:"",
        subjectId
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post('/api/section', data)
                            .then(() => {
                                setData({
                                    ...data,
                                    name:"",
                                    schedule:""
                                })
                        
                                setOpenModal(false);

                                alert("data has been added!")
                            });

     
    }
  return (
    <div className='w-full h-full right-0'>
         <div className='w-[500px] absolute top-10 right-10 h-32 flex flex-row-reverse gap-3'>
            
            {sectionData.map(val =>  <div key={val.id} onClick={() => router.push(`/sections/${val.id}`)} className='w-44 h-28 bg-[#D2F5FF] cursor-pointer gap-3 rounded text-[#141414] flex justify-center flex-col items-center'> 
            <h1 className='text-3xl font-bold'>{val.name}</h1>
            <span className='text-xs text-centers'>{val.shedule}</span>
            </div>)}
           
             
         </div>
        {openModal && <div className='w-full h-full p-5 flex justify-center items-center absolute top-0 right-0  z-[1000]'>
            <div className='w-full h-full rounded bg-[#D2F5FF] p-5'>

                <form onSubmit={handleSubmit} action="" className='w-full h-full flex'> 

                        <div className='w-3/5 h-full text-[#151515] flex flex-col gap-4'>   
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="sectionTitle">Section Title</label>
                                <input value={data.name} onChange={(e) => setData({...data,name:e.target.value})} type="text" placeholder='Enter Section' id='sectionTitle' className='w-full px-3 py-2 rounded outline-none' />
                            </div>  

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="sectionSchedule">Section Schedule</label>
                                <select className="px-3 py-2 rounded" value={data.schedule} onChange={(e) => setData({...data,schedule:e.target.value})} id="">
                                    {sectionTimeSchedule.map(val => <option className='text-black' key={val.id} value={val.time}>{val.time}</option>)}
                                </select>
                                
                            </div>
                        </div>

                        <div className='w-2/5 h-full flex pt-0 p-5 flex-col justify-center items-center gap-4'>
                            <button type='button' onClick={(e) => {e.stopPropagation(); setOpenModal(false)}} className='px-3 w-full  py-2 rounded bg-red-500'>Cancel</button>
                            <button type='submit' className='px-3 w-full  py-3 rounded bg-blue-500'>Add Section</button>
                        </div>
                </form>

            </div>

            </div>}
        <button onClick={() => setOpenModal(true)} className='px-3 py-2 rounded bg-orange-500 absolute bottom-10 right-10'>Add Section</button>
    </div>
  )
}

export default AddSectionModal