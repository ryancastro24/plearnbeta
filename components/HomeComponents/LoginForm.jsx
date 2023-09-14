'use client'
import {signIn} from 'next-auth/react'
import React from 'react'

const LoginForm = () => {
    const [data,setData] = React.useState({
        idNumber:"",
        password:""
    });
    
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
      }
      if(callback?.ok && !callback?.error){
       alert("User login successfully")
      }
    });

  }
    

  return (
    <div>
        <form action="" onSubmit={loginUser}>
            <div>
                <label htmlFor="idNumber">ID Number</label>
                <input 
                    className='text-black'                   
                    type="text" 
                    placeholder='Enter ID Number'
                    value={data.idNumber}
                    onChange={handleChange}
                    name='idNumber'
                    id='idNumber'
                 />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    className='text-black'
                    type="password" 
                    placeholder='Enter Password'
                    value={data.password}
                    onChange={handleChange}
                    name='password'
                 />
            </div>

            <button className='bg-[#E58E27] px-4 py-3 rounded ' type='submit'>Login</button>
        </form>

        
    </div>
  )
}

export default LoginForm