'use client'
import { useState } from 'react'

import axios from 'axios'
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
const AllianceContainer = ({id,alliance_name,alliance_image}) => {

  const handleDelete = async(id) => {
    alert("this is delete")
  }


  const handleUpdate = async(id) => {

   alert("this is update")

  }

  return (
    <>
        <div className='w-full h-32 bg-[#2f3235] p-3 relative rounded flex items-center gap-3' key={id}>
            <div className='w-28 h-28 rounded' style={{backgroundImage:`url("/AllianceAssets/${alliance_image}")`,backgroundSize:"cover"}}></div>

            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold'>{alliance_name}</h2>
            </div>


            <div className='flex gap-3 items-center absolute top-4 right-4'>
              <button onClick={() =>  handleDelete(id)} className='px-2 py-2 rounded bg-red-500'><RiDeleteBin7Line /></button>
              <button onClick={() => { 
                handleUpdate(id)

              }} className='px-2 py-2 rounded bg-blue-500'><MdOutlineEdit /></button>
            </div>

        </div>
    </>
  )
}

export default AllianceContainer