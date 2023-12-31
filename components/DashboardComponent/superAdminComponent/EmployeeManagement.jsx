'use client'
import {useState} from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeesTable from './EmployeesTable'
const EmployeeManagement = () => {

  const [data,setData] = useState({
    idNumber:'',
    name:'',
    email:'',
    password:'',
    gender:'',
    age:null,
  })

  const [toUpdate, setToUpdate] = useState(true);

  return (
    <div className='w-full h-full p-4'>
          <div className='w-full h-full flex justify-between items-center'>

              <div className='w-1/3 h-full pl-0 p-3 flex flex-col gap-4'>
                  <h2 className='text-lg text-center'>Employee Management</h2>
                  <EmployeeForm data={data} setData={setData} toUpdate={toUpdate} setToUpdate={setToUpdate}/>
              </div>


              <div className='w-2/3 h-full pt-3 overflow-y-auto'>
                 <EmployeesTable  data={data} setData={setData} toUpdate={toUpdate} setToUpdate={setToUpdate}/>
              </div> 
        </div>

        
    </div>
  )
}

export default EmployeeManagement