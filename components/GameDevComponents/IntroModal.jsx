'use client'

import {useState} from 'react'
import 'animate.css';
import Image from 'next/image';
const IntroModal = ({play,topicData,character}) => {

  const [currentIndex,setCurrentIndex] = useState(0);

  
  return (
    <div className='flex  absolute justify-center  items-center top-0 z-50 w-full h-full bg-[#151718c4]'>
       
       
       
        <div>

       
         { currentIndex === 0  && <div className='w-[800px] flex justify-center  left-20 top-28 absolute items-center h-[400px] bg-[#D2F5FF] rounded'>
                    <div className='w-2/3 h-full flex justify-center items-end '>
                        <div className='relative bottom-0'>
                            <Image src={`/GameDevAssets/${character === "luffy"? "luffy_left" : character === "naruto" ? "naruto_left" : "nami_left"}.png`} 
                            width={character ==="luffy" ? 500 : character === "naruto" ? 400 : 270} 
                            height={character ==="luffy" ? 500 : character === "naruto" ? 400 : 270} 
                            alt='narutoLeft' />
                        </div>
                    </div>
                    <div className='w-2/3 h-full relative p-5'>
                      <span className='text-black text-lg'>{topicData[0]}</span>
                      <button onClick={() => setCurrentIndex(prev => prev + 1)} className='px-3 py-2 rounded bg-orange-500 absolute bottom-7 right-7'>NEXT</button>
                    </div>
            </div>
          }



          { currentIndex === 1  &&<div className='w-[800px] flex justify-center right-20 bottom-20 absolute items-center h-[400px] bg-[#D2F5FF] rounded'>
                  <div className='w-2/3 h-full relative p-5'>
                      <span className='text-black text-lg'>{topicData[1]}</span>
                      <button onClick={() => setCurrentIndex(prev => prev + 1)} className='px-3 py-2 rounded bg-orange-500 absolute bottom-7 left-7'>NEXT</button>
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-end '>
                        <div className='relative bottom-0'>
                            <Image src={`/GameDevAssets/${character ==="luffy" ? "luffy_right" : character === "naruto" ? "naruto_right" : "nami_right" }.png`} 
                            width={character ==="luffy" ? 500 : character === "naruto" ? 300 : 500} 
                            height={character ==="luffy" ? 500 : character === "naruto" ? 300 : 500} 
                            alt='narutoLeft' />
                        </div>
                    </div>
                   
            </div>
          }


          { currentIndex === 2  && <div className='w-[800px] flex justify-center  left-20 top-20 absolute items-center h-[400px] bg-[#D2F5FF] rounded'>
                    <div className='w-2/3 h-full flex justify-center items-end '>
                        <div className='relative bottom-0'>
                          <Image src={`/GameDevAssets/${character === "luffy"? "luffy_left" : character === "naruto" ? "naruto_left" : "nami_left"}.png`} 
                            width={character ==="luffy" ? 500 : character === "naruto" ? 400 : 270} 
                            height={character ==="luffy" ? 500 : character === "naruto" ? 400 : 270} 
                            alt='narutoLeft' />
                        </div>
                    </div>
                    <div className='w-2/3 h-full relative p-5'>
                      <span className='text-black text-lg'>{topicData[2]}</span>
                      <button onClick={() => setCurrentIndex(prev => prev + 1)} className='px-3 py-2 rounded bg-orange-500 absolute bottom-7 right-7'>NEXT</button>
                    </div>
            </div>
          }

        { currentIndex === 3  && <div className='w-[800px] flex justify-center  right-20 bottom-20 absolute items-center h-[400px] bg-[#D2F5FF] rounded'>
                   <div className='w-2/3 h-full relative p-5'>
                      <span className='text-black text-lg'>{topicData[1]}</span>
                      <button onClick={() => setCurrentIndex(prev => prev + 1)} className='px-3 py-2 rounded bg-orange-500 absolute bottom-7 left-7'>NEXT</button>
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-end '>
                        <div className='relative bottom-0'>
                        <Image src={`/GameDevAssets/${character ==="luffy" ? "luffy_right" : character === "naruto" ? "naruto_right" : "nami_right" }.png`} 
                            width={character ==="luffy" ? 500 : character === "naruto" ? 300 : 500} 
                            height={character ==="luffy" ? 500 : character === "naruto" ? 300 : 500} 
                            alt='narutoLeft' />
                        </div>
                    </div>
            </div>
          }


          { currentIndex === 4   && <div className='w-[800px] flex justify-center  left-20 top-20 absolute items-center h-[400px] bg-[#D2F5FF] rounded'>
                    <div className='w-2/3 h-full flex justify-center items-end '>
                        <div className='relative bottom-0'>
                        <Image src={`/GameDevAssets/${character === "luffy"? "luffy_left" : character === "naruto" ? "naruto_left" : "nami_left"}.png`} 
                            width={character ==="luffy" ? 500 : character === "naruto" ? 400 : 270} 
                            height={character ==="luffy" ? 500 : character === "naruto" ? 400 : 270} 
                            alt='narutoLeft' />
                        </div>
                    </div>

                    <div className='w-2/3 h-full relative p-5'>
                      <span className='text-black text-lg'>{topicData[4]}</span>
                      <button onClick={() => setCurrentIndex(prev => prev + 1)} className='px-3 py-2 rounded bg-orange-500 absolute bottom-7 right-7'>NEXT</button>
                    </div>
            </div>
          }



  
  
        </div>
     
       
      {currentIndex === 5 &&  <div className='bg-[#D2F5FF] w-[600px]  flex flex-col justify-center items-center gap-6 h-[400px] rounded animate__animated animate__backInUp' >
           
            <div>
                <Image alt='crossSwords' width={100} height={100} src={'/GameDevAssets/crossSwords.png'} />
            </div>
           
           <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='text-5xl font-bold text-black'>Welcome Warrior</h2>
              <span className='text-black'>Fight with all your might and finish the enemy!</span>
              <button onClick={() => play(false)} className='bg-orange-500 rounded px-3 py-2 mt-5'>PLAY</button>
            </div>
        </div>
      } 
    </div>
  )
}

export default IntroModal