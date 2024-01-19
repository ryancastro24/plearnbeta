'use client'


import {useState} from 'react'
import Image from 'next/image'
import axios from 'axios'
const AllianceContainer = ({id,alliance_name,alliance_image,userId}) => {

    const [data,setData] = useState({
        userId:userId,
        alliance_id:id
    })

    const handleSubmit = async(e) => {
      e.preventDefault();
        await axios.post('api/allianceRequests',data)
                  .then(() => alert("request has been sent!"))
                  .catch((e) => alert(e.message))
    }
    
  return (
    <div className='w-56 h-48 rounded bg-[#D2F5FF] p-3 flex flex-col justify-between items-center'>
            <div className='flex justify-center items-center flex-col gap-2 '>
                <h2 className='text-black'>{alliance_name}</h2> 
                <Image src={`/AllianceAssets/${alliance_image}`} width={90} height={90} alt='banner' />
            </div>

            <div className='w-full'>

                <form onSubmit={handleSubmit} action="">
                <button className='w-full py-2 text-sm rounded bg-orange-600'>request to join</button>
                </form>
            </div>

            
    </div>
  )
}

export default AllianceContainer