'use client'

import React from 'react'
import axios from 'axios'
import Image from 'next/image'
const AddActivityModal = ({id,setShowModal}) => {
    
    const [data,setData] = React.useState({
        id,
        title:"",
        type:"",
        topic:"",
    })

    const [sending,setSending] = React.useState(false);


    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post('/api/activity',data)
                            .then(() => {
                                alert("Activity Added")
                                setSending(false)
                                setShowModal(false)
                            })


    }
   
  return (
    <div className='w-full top-0 left-0 h-full bg-[#161a1eb3] flex justify-center items-center absolute z-40'>
        <div className='w-[600px] p-7 relative  bg-[#D2F5FF] rounded-md text-black flex items-center flex-col'>
            
            <h1>Add Activity</h1>
            <form onSubmit={handleSubmit} action="" className='w-full mt-5 flex flex-col gap-5'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="title">Enter title</label>
                    <input value={data.title} onChange={(e) => setData({...data,title:e.target.value})} className='bg-[#8BB1BC] px-3 py-2 rounded w-full text-black placeholder:text-[#5b6d72]' type="text" placeholder='Enter Title' name="title" id='title'/>
                </div>

                
                <div className='flex flex-col gap-1'>
                    <label htmlFor="type">Enter Type</label>
                   <select value={data.type} onChange={(e) => setData({...data,type:e.target.value})} className='bg-[#8BB1BC] px-3 py-2 rounded w-full text-black' name="type" id="type">
                        <option  value="subquest">Sub Quest</option>
                        <option value="mainquest">Main Quest</option>
                   </select>
                </div>


                 
                <div className='flex flex-col gap-1'>
                    <label htmlFor="type">Enter Topic</label>
                    <input value={data.topic} onChange={(e) => setData({...data,topic:e.target.value})} className='bg-[#8BB1BC] px-3 py-2 rounded w-full text-black placeholder:text-[#5b6d72]' type="text" placeholder='Enter Topic' name="topic" id='topic'/>
                </div>  

                <button onClick={() => setSending(true)} type='submit' className='w-full py-4 bg-[#E58E27] text-white font-bold mt-4 rounded'>{sending ? "Adding..." : "Add Activity"} </button>


               
            </form>

            <button onClick={() => setShowModal(false)} className='bg-red-500  p-2 px-3 opacity-25 hover:opacity-100 rounded-full absolute top-3 right-3'>
                <Image width={15} height={15} alt='close'  src={'/DashboardAssets/icons/close.svg'}/>
            </button>
        </div>
    </div>
  )
}

export default AddActivityModal