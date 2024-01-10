'use client'
import { useEffect, useState } from 'react'
import { levelRewards } from '@/libs/testing'
import Carousel from './Carousel';
import LevelPassItemModal from './LevelPassItemModal';



const Announcement = ({userId,levelPassData,userLevel}) => {


  
  const [levelItemActualData,setLevelItemActualData] = useState({
    id: "",
    name:"",
    leve:"",
    iamge:"",
  })

  const [showModal,setShowModal] = useState(false);
  
  console.log(userLevel)


  return (
    <div className='w-full h-56 rounded-md bg-[#41454A]'>
        
        

        <div className='h-full w-full '>
          

       
           <Carousel userLevel={userLevel}   setLevelItemActualData={setLevelItemActualData} setShowModal={setShowModal} levelPassData={levelPassData}/>
     
     

      </div>


      {showModal && <LevelPassItemModal userId={userId} setShowModal={setShowModal} levelItemActualData={levelItemActualData}/>}

      </div>
    

  )
}

export default Announcement