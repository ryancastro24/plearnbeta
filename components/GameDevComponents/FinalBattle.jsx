'use client'

import React from 'react'
import Battleground from './Battleground';
import { useEffect } from 'react';
const FinalBattle = ({data}) => {
    const [isRight,setIsRight] = React.useState(null);
    const [count,setCount]  = React.useState(0);

    useEffect(() => {

        setTimeout(() => { setIsRight(null)},1500)
       
    },[count])

  return (
    <div className='flex flex-col absolute top-0 z-40 w-full h-full bg-[#161A1E]'>
        <Battleground lives={data.activity.questions.length}  isRight={isRight}/>   


        <div className='w-full  h-full px-10 py-6'>
              <div className='w-full h-36 bg-[#41454A] rounded py-5 px-10 flex justify-center items-center'>
                <p className='text-xl'>{data.activity.questions[count].questionText}</p>
              </div>

              <div className='w-full h-40 flex-col  rounded p-5 flex justify-between  items-center'>
                    <div className='flex w-full justify-between items-center'>
                        <div onClick={() => {setCount(count + 1); setIsRight(data.activity.questions[0].choices[0].isCorrectChoice)}} className='w-[600px] text-black flex items-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#8BB1BC]'>
                            <span>{data.activity.questions[count].choices[0].choiceText}</span>
                        </div>
                        <div onClick={() => {setCount(count + 1); setIsRight(data.activity.questions[0].choices[1].isCorrectChoice)}} className='w-[600px] text-black flex items-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#8BB1BC]'>
                            <span>{data.activity.questions[count].choices[1].choiceText}</span>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div  onClick={() => {setCount(count + 1); setIsRight(data.activity.questions[0].choices[2].isCorrectChoice)}} className='w-[600px] text-black flex items-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#8BB1BC]'>
                            <span>{data.activity.questions[count].choices[2].choiceText}</span> 
                        </div>
                        <div onClick={() => {setCount(count + 1); setIsRight(data.activity.questions[0].choices[3].isCorrectChoice)}} className='w-[600px] text-black flex items-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#8BB1BC]'>
                            <span>{data.activity.questions[count].choices[3].choiceText}</span>
                        </div>
                    </div>
              </div>
        </div>
        
       
    </div>
  )
}

export default FinalBattle