'use client'

import React from 'react'
import Image from 'next/image'
import axios from 'axios';

const LevelPassItemModal = ({levelItemActualData,setShowModal,userId}) => {

    const {name,image,id,level} = levelItemActualData;

   

    const handleClaimUpdate = async() => {
            
            await axios.patch("/api/claimLevelItem",{...levelItemActualData,userId})
                        .then(() => alert("item has been claimed!"))
                        .then(() => setShowModal(false))
                        .then(() => window.location.reload())
                        .catch((e) => alert(e.message))
           
    } 
  
  return (
    <div className='w-full h-screen absolute inset-0 bg-[#000000aa] z-[2000] flex justify-center items-center'>
        <div className='w-96 h-96  rounded flex justify-center items-center flex-col gap-5'>

                    <Image src={image} width={300} height={300} alt='item image' />


                    <span>{name === "coin" ? "+ 100pts" : name === "coinbag" ? "+ 1000pts" : name}</span>

                <button onClick={handleClaimUpdate} className='px-3 py-2 rounded bg-orange-500'>claim</button>

        </div>
    </div>
  )
}

export default LevelPassItemModal