'use client'


import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle  } from "react-icons/io"
const data = [ 
    {id:1, title:"REWARDS: Level 1 - 10"},
    {id:2, title:"REWARDS: Level 11 - 20"},
    {id:3, title:"REWARDS: Level 21 - 30"},
    {id:4, title:"REWARDS: Level 31 - 40"},
    {id:5, title:"REWARDS: Level 41 - 50"},
    {id:6, title:"REWARDS: Level 51 - 60"},
    {id:7, title:"REWARDS: Level 61 - 70"},
    {id:8, title:"REWARDS: Level 71 - 80"},
    {id:9, title:"REWARDS: Level 81 - 90"},
    {id:10, title:"REWARDS: Level 91 - 100"},
    {id:11, title:"REWARDS: Level 101 - 110"},
    {id:12, title:"REWARDS: Level 111 - 120"},
    {id:13, title:"REWARDS: Level 121 - 130"},
    {id:14, title:"REWARDS: Level 131 - 140"},
    {id:15, title:"REWARDS: LEvel 141 - 150"},
]


const Carousel = ({levelPassData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress ,setProgress] = useState(3);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };
  


  return (
    <div className="flex justify-center items-center relative h-full ">
      <button  onClick={handlePrev} className=" cursor-pointer text-3xl text-[#393c41] hover:text-orange-500 absolute bottom-4 left-5 z-20 ">
      <IoIosArrowDropleftCircle />
      </button>

      <div className="w-full h-full">
        {data.map((item,index) => (
          <div key={index} className={` h-full w-full p-5 ${index === currentIndex ? 'block' : 'hidden'}`}>
           
            {/* Add more content or customize as needed */}

            <span>{item.title}</span>

          { item.id == 1 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div  className={`w-full relative h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 0 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[0].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 0 ? "scale-150" : ""} rounded  relative`}> 
                      <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[0].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 1 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[1].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 1 ? "scale-150 " : ""} rounded  relative`}>
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[1].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 2 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[2].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 2 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[2].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 3 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[3].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 3 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[3].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 4 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[4].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 4 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[4].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 5 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[5].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 5 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[5].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 6  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[6].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 6 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[6].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 7   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[7].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 7 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[7].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center ${progress > 8 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[8].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 8 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[8].level}</span>
                      </div>
                  </div></div>
                <div  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 9 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[9].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 9 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[9].level}</span>
                      </div>
                  </div></div>
            </div>
          }

          { item.id == 2 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 10 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[10].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 10 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[10].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 11 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[11].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 11 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[11].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 12 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[12].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 12 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[12].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 13 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[13].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 13 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[13].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 14 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[14].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 14 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[14].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 15 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[15].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 15 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[15].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 16  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[16].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 16 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[16].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 17   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[17].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 17 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[17].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 18 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[18].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 18 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[18].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 19 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[19].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 19 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[19].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }   


        { item.id == 3 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 20 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[20].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 20 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[20].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 21 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[21].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 21 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[21].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 22 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[22].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 22 ? "scale-150" : ""} rounded  relative`}>
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[22].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 23 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[23].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 23 ? "scale-150" : ""} rounded  relative`} >
                
                  <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[23].level}</span>
                      </div>
                
                </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 24 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[24].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 24 ? "scale-150" : ""} rounded  relative`} >
                
                  <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[24].level}</span>
                      </div>
                
                </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 25 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[25].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 25 ? "scale-150" : ""} rounded  relative`} >
                
                  <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[25].level}</span>
                      </div>
                
                </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 26  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[26].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 26 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[26].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 27   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[27].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 27 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[27].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 28 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[28].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 28 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[28].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 29 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[29].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 29 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[29].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  



      { item.id == 4 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 30 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[30].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 30 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[30].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 31 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[31].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 31 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[31].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 32 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[32].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 32 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[32].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 33 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[33].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 33 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[33].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 34 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[34].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 34 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[34].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 35 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[35].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 35 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[35].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 36  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[36].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 36 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[36].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 37   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[37].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 37 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[37].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 38 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[38].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 38 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[38].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 39 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[39].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 39 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[39].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        { item.id == 5 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 40 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[40].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 40 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[40].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 41 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[41].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 41 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[41].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 42 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[42].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 42 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[42].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 43 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[43].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 43 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[43].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 44 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[44].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 44 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[44].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 45 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[45].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 45 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[45].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 46  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[46].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 46 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[46].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 47   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[47].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 47 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[47].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 48 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[48].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 48 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[48].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 49 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[49].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 49 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[49].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        
        { item.id == 6  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 50 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[50].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 50 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[50].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 51 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[51].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 51 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[51].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 52 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[52].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 52 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[52].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 53 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[53].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 53 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[53].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 54 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[54].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 54 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[54].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 55 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[55].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 55 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[55].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 56  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[56].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 56 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[56].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 57   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[57].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 57 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[57].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 58 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[58].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 58 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[58].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 59 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[59].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 59 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[59].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        { item.id == 7  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 60 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[60].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 60 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[60].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 61 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[61].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 61 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[61].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 62 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[62].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 62 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[62].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 63 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[63].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 63 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[63].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 64 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[64].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 64 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[64].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 65 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[65].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 65 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[65].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 66  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[66].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 66 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[66].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 67   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[67].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 67 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[67].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 68 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[68].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 68 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[68].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 69 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[69].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 69 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[69].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


          
        { item.id == 8  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 70 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[70].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 70 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[70].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 71 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[71].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 71 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[71].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 72 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[72].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 72 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[72].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 73 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[73].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 73 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[73].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 74 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[74].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 74 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[74].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 75 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[75].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 75 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[75].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 76  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[76].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 76 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[76].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 77   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[77].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 77 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[77].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 78 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[78].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 78 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[78].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 79 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[79].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 79 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[79].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  



            
          {  item.id == 9  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 80 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[80].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 80 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[80].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 81 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[81].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 81 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[81].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 82 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[82].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 82 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[82].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 83 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[83].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 83 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[83].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 84 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[84].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 84 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[84].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 85 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[85].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 85 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[85].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 86  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[86].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 86 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[86].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 87   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[87].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 87 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[87].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 88 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[88].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 88 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[88].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 89 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[89].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 89 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[89].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


             
        {  item.id == 10  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 90 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[90].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 90 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[90].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 91 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[91].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 91 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[91].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 92 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[92].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 92 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[92].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 93 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[93].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 93 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[93].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 94 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[94].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 94 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[94].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 95 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[95].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 95 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[95].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 96  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[96].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 96 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[96].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 97   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[97].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 97 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[97].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 98 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[98].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 98 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[98].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 99 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[99].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 99 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[99].level}</span>
                      </div>
                  
                  
                  </div></div>
            </div>
          }  

                
        {  item.id == 11 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 100 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[100].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 100 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[100].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 101 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[101].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 101 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[101].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 102 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[102].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 102 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[102].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 103 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[103].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 103 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[103].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 104 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[104].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 104 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[104].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 105 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[105].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 105 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[105].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 106  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[106].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 106 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[106].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 107   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[107].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 107 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[107].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 108 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[108].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 108 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[108].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 109 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[109].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 109 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[109].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  

{  item.id == 12 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 110 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[110].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 110 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[110].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 111 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[111].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 111 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[111].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 112 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[112].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 112 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[112].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 113 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[113].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 113 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[113].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 114 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[114].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 114 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[114].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 115 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[115].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 115 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[115].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 116  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[116].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 116 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[116].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 117   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[117].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 117 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[117].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 118 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[118].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 118 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[118].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 119 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[119].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 119 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[119].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  



        {  item.id == 13 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 120 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[120].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 120 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[120].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 121 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[121].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 121 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[121].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 122 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[122].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 122 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[122].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 123 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[123].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 123 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[123].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 124 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[124].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 124 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[124].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 125 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[125].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 125 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[125].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 126  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[126].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 126 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[126].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 127   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[127].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 127 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[127].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 128 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[128].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 128 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[128].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 129 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[129].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 129 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[129].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        {  item.id == 14 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 130 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[130].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 130 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[130].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 131 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[131].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 131 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[131].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 132 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[132].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 132 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[132].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 133 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[133].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 133 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[133].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 134 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[134].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 134 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[134].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 135 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[135].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 135 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[135].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 136  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[136].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 136 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[136].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 137   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[137].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 137 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[137].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 138 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[138].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 138 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[138].level}</span>
                      </div>
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 139 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[139].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 139 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[139].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


{  item.id == 15 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 140 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[140].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 140 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[140].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 141 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[141].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 141 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[141].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 142 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[142].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 142 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[142].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 143 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[143].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 143 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[143].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 144 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[144].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 144 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[144].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 145 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[145].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 145 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[145].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 146  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[146].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 146 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[146].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 147   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[147].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 147 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[147].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 148 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[148].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 148 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[148].level}</span>
                      </div>
                  
                  
                  </div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 149 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[149].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 149 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[149].level}</span>
                      </div>
                  
                  
                  </div></div>
            </div>
          }  





          </div>
        ))}
      </div>
      <button onClick={handleNext} className=" cursor-pointer text-[#393c41] hover:text-orange-500 absolute right-5 bottom-4 z-20 text-3xl">
      <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default Carousel;
