'use client'

import React from 'react'
import Image from 'next/image'
import AddQuestionsModal from './adminDashboard/AddQuestionsModal'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const QuestsPage = ({activityId,role,adminData,subId}) => {

    const router  = useRouter();
   
  // Add showModal:false to each object in the activityId array
const updatedActivityId = adminData.activityId.map(item => ({
  ...item,
  showModal: false,
  deployed: false
}));
 

  const [data,setData] = React.useState(updatedActivityId)

  



  const handleUpdate = async(id) =>{
      const res = await axios.patch(`http://localhost:3000/api/activity/${id}`,{
        isEditable:false
      })
      .then(() =>{ 

        setData((prevState) => {
          // Close all open modals
          const updatedData = prevState.map((val) => ({
            ...val,
            deployed: false
          }));
      
          return updatedData;
        });
        alert("data has been updated")
        window.location.reload();
      
      })


  }



  const handleShowModal = (id) => {
    setData((prevState) => {
      // Close all open modals
      const updatedData = prevState.map((val) => ({
        ...val,
        showModal: false
      }));
  
      // Find the item with the specified id and open its modal
      const itemToOpen = updatedData.find((val) => val.id === id);
  
      if (itemToOpen) {
        itemToOpen.showModal = true;
      }
  
      return updatedData;
    });
  };

  
  const handleDeploy = (id) => {
    setData((prevState) => {
      // Close all open modals
      const updatedData = prevState.map((val) => ({
        ...val,
        deployed: false
      }));
  
      // Find the item with the specified id and open its modal
      const itemToOpen = updatedData.find((val) => val.id === id);
  
      if (itemToOpen) {
        itemToOpen.deployed = true;
      }
  
      return updatedData;
    });
  };
  

  return (
    <div className='w-full h-full mt-5 '>

        {role === 'student' ? 
        <div className='pb-5'>
            
                { activityId.map(val => <div  className='flex justify-between relative items-center px-4 py-4 w-full bg-[#41454A] rounded mt-4' key={val.id}>
                  
                  {val.activity.isEditable && <div className='w-full h-full absolute inset-0 bg-[#e58f2783] z-40 flex justify-center items-center'>
                        <span>locked</span>
                    </div>}


                    <div className='flex flex-col gap-1'>
                      <span>{val.activity.title}</span>
                      <span className='text-sm'>{val.activity.type} {!!val.activity.questions.length &&<span className={`ml-3 text-black  px-2 py-1 rounded text-xs font-bold
                      ${val.activity.questions.length > 10 ? val.activity.questions.length > 25 ? 'bg-red-500' : 'bg-orange-500' : 'bg-yellow-500'}`} >{val.activity.questions.length} pts</span> } </span>
                    
                    </div>
                <div>
                  <div>
                  {role === 'student' && !val.isDone && <button onClick={() => router.push(`/activityContent/${val.id}?subId=${subId}`)} className='px-3 py-2 bg-[#E58E27] rounded'>Enter Battle</button>}
                  {role === 'student' && val.isDone && <Image  src={'/DashboardAssets/icons/doneEdit.svg'} alt='edit quest' width={25} height={25}/> }  
                  </div>
                  {val.showModal && <AddQuestionsModal setData={setData} data={val}/>}

                  <div className='flex justify-center items-center gap-4'>
                  {role === 'employee' && !val.isEditable   && <Image  src={'/DashboardAssets/icons/doneEdit.svg'} alt='edit quest' width={25} height={25}/>}
                  {role === 'employee' && val.isEditable && <button onClick={()=>{ 
                    handleDeploy(val.id) 
                    handleUpdate(val.id)
                    
                    }} className='px-3 py-2 rounded bg-[#E58E27] text-white'>{val.deployed ? "Deploying..." : "Deploy"}</button>}
                  {role === 'employee' && val.isEditable && <Image className='cursor-pointer' onClick={() => handleShowModal(val.id)} src={'/DashboardAssets/icons/edit.svg'} alt='edit quest' width={25} height={25}/>}
                  </div>
                </div>
                  
                </div>)}

        </div> 
        
        
        
        
        : 
        
        
        <div className='pb-5'>
                            
              {data.map(val => <div  className='flex justify-between items-center px-4 py-4 w-full bg-[#41454A] rounded mt-4' key={val.id}>
                  <div className='flex flex-col gap-1'>
                    <span>{val.title}</span>
                    <span className='text-sm'>{val.type} {!!val.questions.length &&<span className={`ml-3 text-black  px-2 py-1 rounded text-xs font-bold
                    ${val.questions.length > 10 ? val.questions.length > 25 ? 'bg-red-500' : 'bg-orange-500' : 'bg-yellow-500'}`} >{val.questions.length} pts</span> } </span>
                  
                  </div>
              <div>
                <div>
                {role === 'student' && !val.isDone && <button onClick={() => router.push(`/activityContent/${val.id}`)} className='px-3 py-2 bg-[#E58E27] rounded'>Enter Battle</button>}
                {role === 'student' && val.isDone && <Image  src={'/DashboardAssets/icons/doneEdit.svg'} alt='edit quest' width={25} height={25}/> }  
                </div>
                {val.showModal && <AddQuestionsModal setData={setData} data={val}/>}

                <div className='flex justify-center items-center gap-4'>
                {role === 'employee' && !val.isEditable   && <Image  src={'/DashboardAssets/icons/doneEdit.svg'} alt='edit quest' width={25} height={25}/>}
                {role === 'employee' && val.isEditable && <button onClick={()=>{ 
                  handleDeploy(val.id) 
                  handleUpdate(val.id)
                  
                  }} className='px-3 py-2 rounded bg-[#E58E27] text-white'>{val.deployed ? "Deploying..." : "Deploy"}</button>}
                {role === 'employee' && val.isEditable && <Image className='cursor-pointer' onClick={() => handleShowModal(val.id)} src={'/DashboardAssets/icons/edit.svg'} alt='edit quest' width={25} height={25}/>}
                </div>
              </div>
                
              </div>)}

        </div>
        
        
        }



    </div>
  )
}

export default QuestsPage