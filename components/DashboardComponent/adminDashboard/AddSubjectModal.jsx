'use client'
import React from 'react'

const AddSubjectModal = ({show}) => {
  return (
    <div className='w-full top-0 left-0 h-full bg-[#161a1eb3] flex justify-center items-center absolute z-40'>
       
            <div className='w-96 h-1/2 bg-blue-400'>

                <button onClick={() => show(false)} className='bg-red-500 px-3 py-2 rounded'>close</button>
            </div>
        
    </div>
  )
}

export default AddSubjectModal