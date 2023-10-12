'use client'
import {signIn} from 'next-auth/react'
import React from 'react'
import  {useRouter} from 'next/navigation'
import { ToastContainer,toast,Zoom } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
    const [data,setData] = React.useState({
        idNumber:"",
        password:""
    });




    const [logging,setLogging] = React.useState(false)

    const router = useRouter();
    
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    
  const loginUser = (e) => {
    e.preventDefault();
    signIn('credentials', {...data, redirect:false})
    .then((callback)=> {
      if(callback?.error){
        toast.error(`${callback.error}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setLogging(false)
        setData({
          idNumber:"",
          password:""
        })
      }
      if(callback?.ok && !callback?.error){
        toast.success('You Have Successfully Login!', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          onClose: () =>  router.push('/dashboard'),
          
          });
     
      

      }
    });

  }
    

  return (
    <div>
       <ToastContainer
       position="top-center"
       autoClose={1500}
       hideProgressBar={true}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       closeButton={false}
      transition={Zoom}
       />
        <form action="" onSubmit={loginUser} className='w-80 h-96 p-4 rounded-md bg-[#a6c7d04d]'>
            <div className='flex flex-col w-full mt-5 gap-2' >
                <label htmlFor="idNumber">ID Number</label>
                <input 
                    className='text-black px-2 py-3 rounded outline-none'                   
                    type="text" 
                    placeholder='Enter ID Number'
                    value={data.idNumber}
                    onChange={handleChange}
                    name='idNumber'
                    id='idNumber'
                 />
            </div>

            <div className='flex flex-col w-full mt-5 gap-2'>
                <label htmlFor="password">Password</label>
                <input
                    className='text-black px-2 py-3 rounded outline-none'
                    type="password" 
                    placeholder='Enter Password'
                    value={data.password}
                    onChange={handleChange}
                    name='password'
                 />
            </div>

            <button onClick={() => setLogging(true)} className='bg-[#E58E27] w-full mt-5 py-4 rounded ' type='submit'>{logging ? "Logging In" : "Login"}</button>
        </form>


     
        
    </div>
  )
}

export default LoginForm