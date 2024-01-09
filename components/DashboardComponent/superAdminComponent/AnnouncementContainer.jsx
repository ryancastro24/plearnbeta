'use client'
import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import axios from 'axios';
const AnnouncementContainer = ({id,title,description,image,dateAndTime}) => {


    const handleDelete = async(id) => {
        await axios.delete(`/api/superadmin/announcements/${id}`)
                    .then(() => alert("announcement has been deleted!"))
                    .catch((e) => alert(e.message))
    } 
  return (
    <div className='w-full h-32 bg-[#2f3235] relative flex gap-2 items-center rounded p-3'>
        <div style={{backgroundImage:`url("/announcementsAssets/${image}")`,backgroundSize:"cover"}} className='w-28 h-full'></div>
        <div className='h-full gap-2 flex flex-col pr-4'>
            <span className='text-lg'> <b>Title: </b> {title}</span>
            <span className='text-sm'> <b>Date & Time:</b> {dateAndTime}</span>
            <span className='text-sm'> <b>Description:</b> {description}</span>

        </div>

        <div className='flex gap-3 items-center absolute top-4 right-4'>
              <button onClick={() => handleDelete(id)}  className='px-2 py-2 rounded bg-red-500'><RiDeleteBin7Line /></button>
              <button  className='px-2 py-2 rounded bg-blue-500'><MdOutlineEdit /></button>
            </div>

    </div>
  )
}

export default AnnouncementContainer