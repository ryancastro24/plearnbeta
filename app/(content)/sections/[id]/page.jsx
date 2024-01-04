import React from 'react'
import AddStudents from '@/components/DashboardComponent/adminDashboard/AddStudents'
import axios from 'axios'

async function getSectionStudents(id){
  
  const res = await fetch(`http://localhost:3000/api/section/getAllStudents/${id}`,{
    next:{
      revalidate:0
    }
  });
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return res.json()
}  



const Sections = async({params}) => {

  const  studentData = await getSectionStudents(params.id);


  return (
    <div className='w-full h-screen pt-16 p-6'>
        <h2>{params.id}</h2>

        
        <AddStudents sectionId={params.id}/>


        {studentData.users.map(val => <div key={val.id}>
          <ul>
              <li>
                {val.name}
                <ol>
                    {val.DoneActivity.map(val => <li className='text-sm list-disc'>{val.activity.title} {val.totalScore}pts</li>)}
                </ol>
              </li>
          </ul>
        </div>)}


    </div>
  )
}

export default Sections