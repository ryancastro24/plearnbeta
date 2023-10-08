'use client'

import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

let index = 0;
let sampleArr = [];
const AddQuestionsModal = ({setData,data}) => {
        const {id} = data

    

    const [arrayData,setArrayData] =  React.useState([]);
    const [questData,setQuestData] = React.useState({
        id,
        question:"",    
        firstChoiceIsCorrect:false,
        firstChoice:"",
        secondChoiceIsCorrect:false,
        secondChoice:"",
        thirdChoiceIsCorrect:false,
        thirdChoice:"",
        fourthCoiceIsCorrect:false,
        fourtChoice:""
    
    })

    const [adding,setAdding] = React.useState(false)


    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post('/api/activity/questions',questData)
        .then(() => {
           setQuestData({
            ...questData,
            question:"",    
            firstChoiceIsCorrect:false,
            firstChoice:"",
            secondChoiceIsCorrect:false,
            secondChoice:"",
            thirdChoiceIsCorrect:false,
            thirdChoice:"",
            fourthCoiceIsCorrect:false,
            fourtChoice:""
           })

           sampleArr.push({arrayQuestion:"question #",index: index + 1})
           setAdding(false)
        })

    }


    useEffect(() => {
        setArrayData([...sampleArr])
    },[arrayData])

    const handleCloseModal = (id) => {
        setData((prevState) => {
          // Close all open modals
          const updatedData = prevState.map((val) => ({
            ...val,
            showModal: false
          }));
      
          // Find the item with the specified id and open its modal
          const itemToOpen = updatedData.find((val) => val.id === id);
      
          if (itemToOpen) {
            itemToOpen.showModal = false;
          }
      
          return updatedData;
        });
      };
  return (
    <div className='w-full top-0 left-0 h-full bg-[#161a1eb3] flex justify-center items-center absolute z-40'>
        
        <div className='bg-[#A0C5CF] w-[600px] h-[500px] rounded p-5 flex justify-between flex-col'>
            <div className='flex justify-between w-full h-4/5'>
               
                <div className='bg-[#41454A] rounded h-full w-1/3 flex items-start   p-3'>
                <div className='flex flex-wrap gap-2'>
                    {arrayData.map((val,i) => (
                        <div key={val.index} className='w-6 h-6 flex justify-center items center  rounded bg-[#212325]'>
                            <span>{i + 1}</span>
                        </div>
                    ))}
                </div>
                </div>

                <div className=' rounded h-full w-2/3  px-4'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3' action="">
                        <div className='flex flex-col gap-1'>
                            <label className='text-black' htmlFor="question">Question</label>
                            <textarea value={questData.question} onChange={(e) => setQuestData({...questData,question:e.target.value})} name="question" id="question" placeholder='Enter Question'  className='w-full h-20 rounded bg-[#8BB1BC] p-3 outline-none text-black resize-none placeholder:text-[#658088]'></textarea>
                        </div>

                        <div className='flex items-center gap-2 cursor-pointer'>
                            <input checked={questData.firstChoiceIsCorrect} onChange={(e) => setQuestData({...questData,firstChoiceIsCorrect:!questData.firstChoiceIsCorrect})} type="checkbox" className='bg-[#8BB1BC] w-6 h-6'/>
                            <input value={questData.firstChoice} onChange={(e) => setQuestData({...questData,firstChoice:e.target.value})} type="text" placeholder='Enter Choice Number 1' className='bg-[#8BB1BC] px-3 py-2 rounded placeholder:text-[#658088] w-full'/>
                        </div>


                        <div className='flex items-center gap-2 cursor-pointer'>
                            <input checked={questData.secondChoiceIsCorrect} onChange={(e) => setQuestData({...questData,secondChoiceIsCorrect:!questData.secondChoiceIsCorrect})} type="checkbox" className='bg-[#8BB1BC] w-6 h-6'/>
                            <input value={questData.secondChoice} onChange={(e) => setQuestData({...questData,secondChoice:e.target.value})} type="text" placeholder='Enter Choice Number 2' className='bg-[#8BB1BC] px-3 py-2 rounded placeholder:text-[#658088] w-full'/>
                        </div>


                        <div className='flex items-center gap-2 cursor-pointer'>
                            <input checked={questData.thirdChoiceIsCorrect} onChange={(e) => setQuestData({...questData,thirdChoiceIsCorrect:!questData.thirdChoiceIsCorrect})} type="checkbox" className='bg-[#8BB1BC] w-6 h-6'/>
                            <input value={questData.thirdChoice} onChange={(e) => setQuestData({...questData,thirdChoice:e.target.value})} type="text" placeholder='Enter Choice Number 3' className='bg-[#8BB1BC] px-3 py-2 rounded placeholder:text-[#658088] w-full'/>
                        </div>

                        
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <input checked={questData.fourthCoiceIsCorrect} onChange={(e) => setQuestData({...questData,fourthCoiceIsCorrect:!questData.fourthCoiceIsCorrect})} type="checkbox" className='bg-[#8BB1BC] w-6 h-6'/>
                            <input value={questData.fourtChoice} onChange={(e) => setQuestData({...questData,fourtChoice:e.target.value})} type="text" placeholder='Enter Choice Number 4' className='bg-[#8BB1BC] px-3 py-2 rounded placeholder:text-[#658088] w-full'/>
                        </div>

                        <div>
                            <button onClick={() => setAdding(true)} type='submit' className='w-full py-2 rounded bg-[#E58E27]'>{adding ? "adding..." : "Add Question"}</button>
                        </div>
                    </form>

                </div>
            </div>

        <button onClick={() => handleCloseModal(data.id)} className='w-full py-3 bg-red-500 rounded'>Close</button>
            
        </div>
        
    </div>
  )
}

export default AddQuestionsModal