'use client'
import Battleground from './Battleground';
import { useEffect,useState } from 'react';
import DoneModal from './DoneModal';
import styles from '@/styles/GameDevStyles/BattleGroundStyle.module.css'
import IntroModal from './IntroModal';


const FinalBattle = ({data,userId,character,subjectTheme}) => {
    const [isRight,setIsRight] = useState(null);
    const [count,setCount]  = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [score,setScore] =  useState([])
    const [introModal,setIntroModal] = useState(true)
    const [topicData,setTopicData] = useState([]);
    
    const totalScore =  score.filter( val => val == true)
    console.log(data.activity.topic);
    console.log(subjectTheme);

    useEffect(() => {

        setTimeout(() => { setIsRight(null)},1500)
        setScore([...score,isRight])

    if(count  ===  data.activity.questions.length){
        setIsDone(true);
        
    }

       
    },[count])


    
  useEffect(() => {
    const fetchData = async () => {

      const requestOptions = {
        next:{
          revalidate:0,
        },
        method: 'GET',
        headers: {
          'topic': data.activity.topic,
          // Add more custom headers as needed
        },
      
      };
      try {
        const response = await fetch('http://localhost:3000/api/openai',requestOptions); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        
       let pointsArray = data.choices[0].text.split('\n').filter(point => point.trim() !== '');
        setTopicData(pointsArray);
      } catch (error) {
      
        console.error('Error fetching data:', error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []); 


    



  return (
    <div className='flex flex-col absolute top-0 z-40 w-full h-full bg-[#161A1E]'>
        {introModal && <IntroModal character={character} topicData={topicData}  play={setIntroModal}/>}
        {isDone && <DoneModal userId={userId} actId={data.id}  totalScore={totalScore.length} score={score.length - 1}/>}
        <Battleground subjectTheme={subjectTheme} character={character} lives={data.activity.questions.length}  isRight={isRight}/>   


        <div className='w-full overflow-hidden  h-full px-10 py-6'>
              <div  className={styles.questionborder}>
                    
                <div className='w-full p-5 h-full bg-[#101316] flex justify-center items-center'>
                         <p className='text-xl text-center '>{data.activity.questions[count]?.questionText}</p>
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