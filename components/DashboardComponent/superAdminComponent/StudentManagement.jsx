'use client'

import {useState} from 'react'
import StudentForm from './StudentForm'
import StudentsTable from './StudentsTable'
const StudentManagement = () => {
  const [data,setData] = useState({
    id:"",
    idNumber:'',
    name:'',
    email:'',
    password:'',
    gender:'',
    age:"",
    yearLevel:"",
    course:'',
    role:''
  })

  const [toUpdate,setToUpdate] = useState(true);
  return (  
    <div className='w-full h-full p-4'>

      <div className='w-full h-full flex justify-between items-center'>

              <div className='w-1/3 h-full pl-0 p-3'>
                  <StudentForm data={data}  setData={setData} toUpdate={toUpdate} setToUpdate={setToUpdate}/>
              </div>

          
              <div className='w-2/3 h-full pt-3 overflow-y-auto scrollbar-hidden'>
                  <StudentsTable setToUpdate={setToUpdate} setToUpdateData  setData={setData}/>
              </div> 
      </div>


    </div>
  )
}

export default StudentManagement