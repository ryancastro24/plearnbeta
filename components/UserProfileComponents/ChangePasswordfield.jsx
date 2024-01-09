'use client'

import React, { useState } from 'react'
import EditPasswordModal from './EditPasswordModal';
import Link from 'next/link';
const ChangePasswordfield = ({character}) => {

  const [showModal,setShowModal] = useState(false);

  return (
    <div className='w-full flex justify-center items-center h-40 mt-8'>
        <div className='w-96 h-40 bg-[#131619] rounded p-3 justify-center flex flex-col gap-3'>
          <div className={`${showModal ? "w-full" :"w-44"} h-10`}>
              {showModal ? <EditPasswordModal setShowModal={setShowModal}/> :<button onClick={() => setShowModal(true)} className='w-full h-full rounded bg-[#1b2025] text-sm'>Change Password</button>}
              
          </div>
        
          <div className='flex items-center gap-3'>
                <div className='bg-[#1b2025] w-20 h-20 rounded'></div>

                <div className='flex flex-col gap-2'>
                    <h2>{character === "luffy" ? "Monkey D. Luffy" : character === "nami" ? "Nami San" : "Uzumaki Naruto"} </h2>
                    <span className='text-xs'>{character === "luffy" ? "The Pirate King" : character === "nami" ? "The Noturios Queen" : "The Great Hokage"}</span>
                   <Link className='px-1 py-1 bg-orange-600 rounded text-xs text-center' href={"customizeCharacter"}>customize</Link>
                </div> 
          </div>
          

        </div>  
    </div>
  )
}

export default ChangePasswordfield