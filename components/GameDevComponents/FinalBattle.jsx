'use client'

import React from 'react'
import Battleground from './Battleground';
import { useEffect } from 'react';
import DoneModal from './DoneModal';
import styles from '@/styles/GameDevStyles/BattleGroundStyle.module.css'
import IntroModal from './IntroModal';
const FinalBattle = ({data,userId}) => {
    const [isRight,setIsRight] = React.useState(null);
    const [count,setCount]  = React.useState(0);
    const [isDone, setIsDone] = React.useState(false);
    const [score,setScore] =  React.useState([])
    const [introModal,setIntroModal] = React.useState(true)

    const totalScore =  score.filter( val => val == true)

    useEffect(() => {

        setTimeout(() => { setIsRight(null)},1500)
        setScore([...score,isRight])

    if(count  ===  data.activity.questions.length){
        setIsDone(true);
        
    }

       
    },[count])



    



  return (
    <div className='flex flex-col absolute top-0 z-40 w-full h-full bg-[#161A1E]'>
        {introModal && <IntroModal play={setIntroModal}/>}
        {isDone && <DoneModal userId={userId} actId={data.id}  totalScore={totalScore.length} score={score.length - 1}/>}
        <Battleground lives={data.activity.questions.length}  isRight={isRight}/>   


        <div className='w-full overflow-hidden  h-full px-10 py-6'>
              <div  className={styles.questionborder}>
                    
                <div className='w-full p-5 h-full bg-[#101316] flex justify-center items-center'>
                         <p className='text-xl '>{data.activity.questions[count]?.questionText}</p>
                </div>
              </div>

              <div className='w-full h-40 flex-col  rounded p-5 flex justify-between  items-center'>
                    <div className='flex w-full justify-between items-center'>
                        <div onClick={() => {
                             
                                setCount(count + 1); setIsRight(data.activity.questions[count].choices[0].isCorrectChoice)
                                
                            }
                            } className='w-[600px] text-black flex items-center justify-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#D2F5FF]'>
                            <span>{data.activity.questions[count]?.choices[0].choiceText}</span>
                        </div>
                        <div onClick={() => {
                            
                                setCount(count + 1); setIsRight(data.activity.questions[count].choices[1].isCorrectChoice)
                                
                            }
                            } className='w-[600px] text-black flex items-center justify-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#D2F5FF]'>
                            <span>{data.activity.questions[count]?.choices[1].choiceText}</span>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div  onClick={() => {
                            
                                setCount(count + 1); setIsRight(data.activity.questions[count].choices[2].isCorrectChoice)
                                
                            }
                            } className='w-[600px] text-black flex items-center justify-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#D2F5FF]'>
                            <span>{data.activity.questions[count]?.choices[2].choiceText}</span> 
                        </div>
                        <div onClick={() => {
                            
                                setCount(count + 1); setIsRight(data.activity.questions[count].choices[3].isCorrectChoice)
                                
                            }
                            } className='w-[600px] text-black flex items-center justify-center px-3 rounded cursor-pointer hover:bg-[#E58E27] h-12 bg-[#D2F5FF]'>
                            <span>{data.activity.questions[count]?.choices[3].choiceText}</span>
                        </div>
                    </div>
              </div>
        </div>
        
       
    </div>
  )
}

export default FinalBattle