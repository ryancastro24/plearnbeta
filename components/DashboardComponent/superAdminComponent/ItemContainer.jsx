'use client'
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
const ItemContainer = ({id,name,description,image,price,setItemData}) => {

  const handleDelete = async(id) => {

    const res = await  axios.delete(`/api/superadmin/items/${id}`)
                            .then(() => alert("item has been deleted"));

  }


  const handleUpdate = async(id) => {

    const res = await  axios.get(`/api/superadmin/items/${id}`);
    const data = res.data;
    setItemData({
      id:data.id,
      name:data.name,
      description:data.description,
      price:data.price,
    })

  }

  return (
    <>
        <div className='w-full h-32 bg-[#2f3235] p-3 relative rounded flex items-center gap-3' key={id}>
            <div className='w-28 h-28 rounded' style={{backgroundImage:`url("/itemsAssets/${image}")`,backgroundSize:"cover"}}></div>

            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold'>{name}</h2>
                <span className='text-sm'>{description}</span>
                <span className='text-sm'>{price} pts</span>
            </div>


            <div className='flex gap-3 items-center absolute top-4 right-4'>
              <button onClick={() =>  handleDelete(id)} className='px-2 py-2 rounded bg-red-500'><RiDeleteBin7Line /></button>
              <button onClick={() => handleUpdate(id)} className='px-2 py-2 rounded bg-blue-500'><MdOutlineEdit /></button>
            </div>

        </div>
    </>
  )
}

export default ItemContainer