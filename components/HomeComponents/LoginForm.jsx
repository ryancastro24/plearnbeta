'use client'
import {signIn} from 'next-auth/react'
import React from 'react'
import  {useRouter} from 'next/navigation'
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
        alert(callback.error);
        setLogging(false)
        setData({
          idNumber:"",
          password:""
        })
      }
      if(callback?.ok && !callback?.error){
       alert("User login successfully")
       router.push('/dashboard');
      

      }
    });

  }
    

  return (
    <div>
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