import React from 'react'
import AddStudents from '@/components/DashboardComponent/adminDashboard/AddStudents'
const Sections = ({params}) => {
  return (
    <div className='w-full h-screen pt-16 p-6'>
        <h2>{params.id}</h2>

        
        <AddStudents sectionId={params.id}/>
    </div>
  )
}

export default Sections