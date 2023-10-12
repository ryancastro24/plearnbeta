import React from 'react'
import UserTable from '@/components/LeaderBoardsComponent/UserTable'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
async function getData(id){
  const res = await fetch(`http://localhost:3000/api/students`,{
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
const Leaderboards = async() => {

  const data = await getData();
  const session = await getServerSession(authOptions)
  return (
    <div className='w-full h-screen pt-16 p-6'>
    
      <div className='w-full h-full p-5 flex justify-between items-center'>

          <div className='w-1/5 rounded-md h-full bg-[#41454A] p-5 flex flex-col justify-between'>
            <div>
              <h1 className='text-2xl'>Rankings</h1>
              <ul className='flex  flex-col mt-5'>
                  <li className='p-2 px-4 rounded hover:bg-[#E58E27] cursor-pointer bg-[#272A2E]' >Overall Rankings</li>
                  <li className='p-2 px-4 rounded hover:bg-[#E58E27] cursor-pointer'>College Rankings</li>
                  <li className='p-2 px-4 rounded hover:bg-[#E58E27] cursor-pointer'>Course Rankings</li>
                  <li className='p-2 px-4 rounded hover:bg-[#E58E27] cursor-pointer'>Section Rankings</li>
              </ul>

           </div>

          </div>

          <div  className='w-3/4 rounded-md h-full  flex flex-col  p-5 bg-[#41454A]'>
              <div>
                <h1 className='mb-4 text-2xl'>Overall Rankings</h1>
                <hr className='opacity-25'/>
              </div>
            <UserTable  idNumber={session.user.idNumber} data={data}/>
          
          </div>

      </div>

    
    </div>
  )
}

export default Leaderboards