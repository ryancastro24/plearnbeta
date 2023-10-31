'use client'
import { useState,useEffect } from 'react'
import NoteModalContent from './NoteModalContent'


const NoteCotainer = ({noteData}) => {


    // Add showModal:false to each object in the activityId array
const updatedNoteList = noteData.map(item => ({
  ...item,
  showModal: false,
}));

const [noteList,setNoteList] = useState(updatedNoteList)
 
console.log(noteList)

const handleShowModal = (id) => {
  setNoteList((prevState) => {
    // Close all open modals
    const updatedData = prevState.map((val) => ({
      ...val,
      showModal: false
    }));

    // Find the item with the specified id and open its modal
    const itemToOpen = updatedData.find((val) => val.id === id);

    if (itemToOpen) {
      itemToOpen.showModal = true;
    }

    return updatedData;
  });
};


  return (
     
    <div className='flex flex-row-reverse justify-start items-end  gap-2  w-full'>
          {noteList.slice(0,5).map((val,i) =><div>
          
            {val.showModal &&   <div className='w-full absolute top-0 left-0 h-full'><NoteModalContent setNoteList={setNoteList} {...val}/>  </div>} 
           
            <div onClick={() => handleShowModal(val.id)} key={val.id} className='w-20 flex justify-center items-center cursor-pointer hover:bg-[#E58E27] h-20 bg-[#5C626A] rounded'>
            <span className='text-sm font-light'>Note {i+1}</span>
        </div>
        </div>)}
    </div>
  )
}

export default NoteCotainer