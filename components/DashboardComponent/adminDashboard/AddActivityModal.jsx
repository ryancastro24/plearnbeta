'use client'

import React from 'react'
import axios from 'axios'
const AddActivityModal = ({id,setShowModal}) => {

    const [data,setData] = React.useState({
        id,
        title:"",
        type:""
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
        <div className='w-[600px] h-96 p-7  bg-[#D2F5FF] rounded-md text-black flex items-center flex-col'>
            
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

                <button onClick={() => setSending(true)} type='submit' className='w-full py-4 bg-[#E58E27] text-white font-bold mt-4 rounded'>{sending ? "Adding..." : "Add Activity"} </button>


               
            </form>
        </div>
    </div>
  )
}

export default AddActivityModal