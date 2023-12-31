'use client'

import {useState,useEffect} from 'react'
import axios from 'axios';
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
const EmployeesTable = ({setData,setToUpdate}) => {
    const [employeeData,setEmployeeData] = useState([]);

    useEffect(() => {
        const employeeGetter = async () => {
          try {
            const response = await axios.get('/api/users/employees');
            const data = response.data;
            setEmployeeData(data)
          } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
            throw error; // Re-throw the error to propagate it further if needed
          }
        };
        
        // You can call the function like this:
        employeeGetter();
        
        
      },[employeeData])


      
      const handleDelete = (id) => {
        const res = axios.delete(`/api/users/students/${id}`)
                    .then(() => alert("user has been deleted"))
                    .catch((e) => alert(e.message))
    }

    
    const handleUpdate  = async(id) => {

      const res = await axios.get(`/api/users/employees/${id}`);
      const data = res.data;
      setData({
        id:data.id,
        idNumber:data.idNumber,
        name:data.name,
        email:data.email,
        password:data.password,
        gender:data.gender,
        age:data.age,
      })
      
    }

  return (
    <>

    {/* add h-full in table if there is enough data  */}
        <table  className='w-full p-3 rounded overflow-hidden'>
            <thead>
                <tr className='py-2 bg-[#272A2E]'>
                    <th className=' text-center py-2'>Id Number</th>
                    <th className=' text-center py-2'>Name</th>
                    <th className=' text-center py-2'>Email</th>
                    <th className=' text-center py-2'>Modify</th>
                </tr>
            </thead>
            <tbody>
                {employeeData.map((val,i) => <tr className={`${i % 2 ? "" : "bg-[#3A3D42]"}`} key={val.id}>
                    <td className='py-2 text-sm text-center'>{val.idNumber}</td>
                    <td className='py-2 text-sm text-center'>{val.name}</td>
                    <td className='py-2 text-sm text-center'>{val.email}</td>
                    <td className='flex justify-center items-center gap-2 py-2'>
                        <button onClick={() => handleDelete(val.id)} className='px-2 py-2 bg-red-500 rounded'><RiDeleteBin7Line /></button>
                        <button onClick={() => { 
                          setToUpdate(false);
                          handleUpdate(val.id);
                          }} className='px-2 py-2 bg-blue-500 rounded'><MdOutlineEdit /></button>
                    </td>
                </tr>)}
            </tbody>
        </table>


    </>
  )
}

export default EmployeesTable