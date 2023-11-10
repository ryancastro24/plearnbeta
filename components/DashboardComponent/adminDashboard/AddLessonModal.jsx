'use client'

import React from 'react'
import LessonModalContent from './LessonModalContent';
const AddLessonModal = ({subjectId}) => {
  const [openModal ,setOpenModal] = React.useState(false);

  return (
    <>
      {openModal && <LessonModalContent subjectId={subjectId} setOpenModal={setOpenModal}/>}

      <button onClick={() => setOpenModal(true)} className='bg-orange-500 px-3 py-2 rounded'>Add Lesson</button>
        
    </>
  )
}

export default AddLessonModal