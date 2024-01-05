'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import 'animate.css';
import { useSession } from 'next-auth/react';
import axios from 'axios';
const DashboardAnnouncementInnerContent = ({setShowModal}) => {

  const [character,setCharacter] = useState('');
  const [loading,setLoading] = useState(false);
  const  {data:session} = useSession();
  

  const handleUpdate = async(e) => {
        e.preventDefault();

        setLoading(true);

       await axios.patch(`/api/character/${session.user.id}`,{character})
             .then(() => alert("user has choosen his/her character"))
             .then(() => setShowModal(false))
             .catch((e) => alert(e.message))
  }



  if(session.user.character === null) {

    return (
      <div className='w-full h-full bg-[#161a1e9c] z-40 flex justify-center items-center absolute  top-0 right-0'>
     
  
      
        <div style={{backgroundImage: character  === "luffy" ? `url("/DashboardAssets/luffy wallpaper.jpg")` : character === "nami"  ? `url("/DashboardAssets/nami wallpaper.jpg")` :  character === "naruto" ? `url("/DashboardAssets/naruto wallpaper.jpg")` : `url("/DashboardAssets/anime fight.jpg")` ,backgroundSize:"cover" }}  className={`w-[800px] h-[500px]  rounded  gap-7 relative  animate__animated animate__backInUp`}>
  
              <div className='w-full h-full bg-[#000000c9] flex justify-center items-center flex-col gap-5'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                        <h2 className='text-2xl font-bold'>Choose Your Character</h2>
                        <span className='text-xs'><i>Note: Once you pick your character you cannot switch to another one </i> </span>
                  </div>
  
                  <div className='flex justify-center items-center gap-4'>
                      <div onClick={() => setCharacter("luffy")} className={`w-40 p-2 cursor-pointer h-40 rounded ${character === "luffy" ? "bg-orange-500" : "bg-[#D2F5FF]"} `}>
                        <div style={{backgroundImage:`url("/DashboardAssets/luffy profile.jpg")`,backgroundSize:"cover" }} className='w-full h-full rounded '></div>
                      </div>
                      <div onClick={() => setCharacter("nami")} className={`w-40 p-2 cursor-pointer h-40 rounded ${character === "nami" ? "bg-orange-500" : "bg-[#D2F5FF]"} `}>
                        <div style={{backgroundImage:`url("/DashboardAssets/nami profile.jpg")`,backgroundSize:"cover" }} className='w-full h-full rounded '></div>
                      </div>
                      <div onClick={() => setCharacter("naruto")} className={`w-40 p-2 cursor-pointer h-40 rounded ${character === "naruto" ? "bg-orange-500" : "bg-[#D2F5FF]"} `}>
                        <div style={{backgroundImage:`url("/DashboardAssets/naruto profile.jpg")`,backgroundSize:"cover" }} className='w-full h-full rounded '></div>
                      </div>
                  </div>
                
                  <div>
                    <button onClick={handleUpdate} className='py-2 px-3 rounded bg-orange-600 mt-2'>{loading ? "confirming" : "confirm"}</button>
                  </div>
               
  
  
          
  
            </div> 
          </div>
  
          
  
          
      </div>
    )

  }

  return (

    <div className='w-full h-full bg-[#161a1e9c] z-40 flex justify-center items-center absolute  top-0 right-0'>

          <div className={`w-[800px] h-[500px] bg-orange-500  rounded  gap-7 relative  animate__animated animate__backInUp`}>
            <button style={{top:-10,right:-10}}  onClick={() => setShowModal(false)} className='bg-red-500 px-2 py-2 absolute  rounded-full'>
            <Image alt='close' width={15} height={13} src={'/DashboardAssets/icons/xmark.svg'} />
          </button>
        </div>      
    </div>

  )


  
}

export default DashboardAnnouncementInnerContent