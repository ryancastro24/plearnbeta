'use client'

import {useState,useEffect} from 'react'
import axios from 'axios'
// import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'


export default function StudentRegisterPage() {
  const [data,setData] = useState({
    idNumber:'',
    name:'',
    email:'',
    password:'',
    gender:'',
    age:null,
    yearLevel:null,
    course:'',
    role:''
  })

  const [course,setCourse] =  useState([]);

  useEffect(() => {
    const courseGetter = async () => {
      try {
        const response = await axios.get('/api/course');
        const courseData = response.data;
        setCourse(courseData)
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        throw error; // Re-throw the error to propagate it further if needed
      }
    };
    
    // You can call the function like this:
    courseGetter()
      .then((data) => {
        console.log(data); // Array of course data
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
    
    
  },[])

  const router  = useRouter();


  const handleChange  = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const registerUser = async(e) =>{
     e.preventDefault()
    
     axios.post('/api/register',data)
     .then(() => {
     
     alert("User has been registered");
     
      setData({
        idNumber:'',
        name:'',
        email:'',
        password:'',
        gender:'',
        age:'',
        yearLevel:'',
        course:'',
        role:''
     })
      router.push('/');
    })                               
     .catch(() => alert("Something went error"))

   
  }


   return (
    <>
    
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Create Student Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={registerUser} method="POST">

          <div>
              <label htmlFor="idNumber" className="block text-sm font-medium leading-6 ">
                ID Number
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={data.idNumber}
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>





          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 ">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={data.name}
                  id="name"
                  name="name"
                  type="text"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                value={data.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                value={data.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <label htmlFor="gender" className="block text-sm font-medium leading-6 ">
                Gender
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={data.gender}
                  id="gender"
                  name="gender"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            
            <div>
              <label htmlFor="age" className="block text-sm font-medium leading-6 ">
                Age
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={data.age}
                  id="age"
                  name="age"
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
            <div>
              <label htmlFor="yearLevel" className="block text-sm font-medium leading-6 ">
                Year Level
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={data.yearLevel}
                  id="yearLevel"
                  name="yearLevel"
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
            <select onChange={handleChange} value={data.course}  className='text-black' name="course" id="course">
                {course.map(val => <option key={val.id} value={val.id}>{val.name}</option>)}
            </select>

               
            <select onChange={handleChange} value={data.role}  className='text-black' name="role" id="role">
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
            </select>

            


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

         

        </div>
      </div>
    </>
  )
}
