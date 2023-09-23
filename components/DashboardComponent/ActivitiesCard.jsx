'use client'
import React from 'react'

const ActivitiesCard = ({activities}) => {


  return (
    <>
        {activities.map(val => (
            <div key={val.id} className='flex flex-col bg-orange-700 p-5 rounded mt-3'>
              <span className='text-2xl font-bold'>{val.title}</span>
              <span>{val.type}</span>
            </div>
          ))}
    </>
  )
}

export default ActivitiesCard