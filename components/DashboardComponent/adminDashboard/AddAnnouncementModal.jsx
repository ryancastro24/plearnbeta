'use client'

import { useState } from "react"
import axios from 'axios'

const AddAnnouncementModal = ({setOpenModal,subject_id,user_id}) => {
    const [data,setData] = useState({
        content:"",
        subject_id,
        user_id
    })

    const handleSubmit = async(e) =>{
      e.preventDefault();

      const res = axios.post('/api/announcements', data)
                  .then(() => {
                    alert("announcement has been added")
                    setOpenModal(false)
                  })

    }
  return (
    <div className='w-full  absolute h-full z-50  rounded p-5'>
            <div className='w-full h-full bg-[#D2F5FF] rounded p-8  relative'>

                    <form onSubmit={handleSubmit} className="flex flex-col  gap-2" action="">
                        <label className="text-black" htmlFor="announcement">Annoucement</label>
                        <textarea placeholder="Enter Announcement" className="w-full text-black resize-none h-44 outline-none p-4  rounded bg-[#aac7cf]" value={data.content} onChange={(e) => setData({...data,content:e.target.value})} name="" id="announcement" required></textarea>
                        <div className="flex justify-end items-end">
                            <button type="submit" className="px-3 py-2  bg-orange-500 rounded">Add Announcement</button>
                        </div>
                    </form>

                    <button  onClick={() => setOpenModal(false) } className="px-3 py-2 bg-red-500 rounded absolute bottom-16 right-56">Cancel</button>
            </div>
    </div>
  )
}

export default AddAnnouncementModal