'use client'

import React from 'react'

const NoteModalContent = ({setNoteList,title,content}) => {

    const [isDeleting,setIsDeleting] = React.useState(false)

    const handleCloseModal = (id) => {
        setNoteList((prevState) => {
          // Close all open modals
          const updatedData = prevState.map((val) => ({
            ...val,
            showModal: false
          }));
      
          // Find the item with the specified id and open its modal
          const itemToOpen = updatedData.find((val) => val.id === id);
      
          if (itemToOpen) {
            itemToOpen.showModal = false;
          }
      
          return updatedData;
        });
      };

  return (
    <div className='w-full h-full z-40 absolute top-0 p-10 flex justify-center items-center'>
            <div className='w-full h-full p-5 flex flex-col justify-between bg-[#D2F5FF] relative rounded'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl text-black'>{title}</h2>
                        <p className='text-black'>{content}</p>
                    </div>
                    
                    <div className='absolute bottom-7 flex gap-2'>
                      <button onClick={() => handleCloseModal(false)} className='px-3 py-2 rounded bg-red-500'>Close</button>
                      <button onClick={() => setIsDeleting(true)}  className='px-3 py-2 rounded bg-[#41454A]'>{isDeleting ? "Deleting": "Delete"}</button>
                
                    </div>


                
            </div>
    </div>
  )
}

export default NoteModalContent