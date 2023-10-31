import React from 'react'

const LessonPage = ({params}) => {
  return (
    <div className='bg-red-500 z-40 absolute top-0 w-full h-full'>
        <span>{params.id}</span>
    </div>
  )
}

export default LessonPage