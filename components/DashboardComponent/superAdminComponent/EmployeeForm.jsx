'use client'
import { useState ,useEffect} from 'react'
import axios from 'axios'
const EmployeeForm = ({data,setData,toUpdate,setToUpdate}) => {
   

  const [loading ,setLoading] = useState(false);      
 


  const handleSubmit = async(e) => {
        e.preventDefault();

        if(!toUpdate){
              const res = await axios.patch(`/api/users/employees/${data.id}`,data)
              .then(() => {
              
              setData({
                idNumber:'',
                name:'',
                email:'',
                password:'',
                gender:'',
                age:'',
              });
              setLoading(false);
            
            })                               
              .catch((e) => alert(e.message))
        

        }

        else{
          const res = await axios.post('/api/register/registeremployee',data)
          .then(() => {
          
           setData({
             idNumber:'',
             name:'',
             email:'',
             password:'',
             gender:'',
             age:'',
          });
          setLoading(false);
         
         })                               
          .catch((e) => alert(e.message))
     
        }

        setToUpdate(true);
       
  }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setData({...data,idNumber:e.target.value})} value={data.idNumber} type="text" placeholder='Id Number' className='px-3 py-2 rounded w-full outline-orange-500 text-black'  required/>
            <input onChange={(e) => setData({...data,name:e.target.value})} value={data.name} type="text" placeholder='Full Name' className='px-3 py-2 rounded w-full outline-orange-500 text-black'  required/>
            <input onChange={(e) => setData({...data,email:e.target.value})} value={data.email} type="email" placeholder='Email' className='px-3 py-2 rounded w-full outline-orange-500 text-black'  required/>
        {toUpdate  &&    <input onChange={(e) => setData({...data,password:e.target.value})} value={data.password} type="password" placeholder='Password' className='px-3 py-2 rounded w-full outline-orange-500 text-black'  required/> }
         {toUpdate && <select name="" value={data.gender} onChange={(e) => setData({...data,gender:e.target.value})}  className='px-3 py-2 w-full rounded text-black'>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>}   
            <input onChange={(e) => setData({...data,age:e.target.value})} value={data.age} type="number" placeholder='Age' className='px-3 py-2 rounded w-full outline-orange-500 text-black'  required/>
           
            

            <button onClick={() => setLoading(true)} className={`py-3 w-full ${toUpdate ? "bg-orange-600" : "bg-blue-500"} rounded`}>{loading ?  toUpdate ? "Registering...": "Updating..." :  toUpdate ? "Register Employee" :"Update Employee"}</button>
          {!toUpdate &&   <button onClick={() => {

            setToUpdate(true)
            setData({
              idNumber:'',
              name:'',
              email:'',
              password:'',
              gender:'',
              age:'',
           });
            }} className={`py-3 w-full bg-red-500 rounded`}>Cancel</button> }
        </form>
    </div>
  )
}

export default EmployeeForm