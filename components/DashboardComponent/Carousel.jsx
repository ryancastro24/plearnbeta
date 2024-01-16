'use client'


import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle  } from "react-icons/io"
import LevelPassItemModal from './LevelPassItemModal';
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


const achieved  = true;

const Carousel = ({levelPassData,setLevelItemActualData,setShowModal,userLevel}) => { 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress ,setProgress] = useState(parseInt(userLevel));

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
                <div  onClick={ progress > 0 && !levelPassData[0].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[0].id,
                      name: levelPassData[0].name,
                      level: levelPassData[0].level,
                      image: levelPassData[0].image
                });

                setShowModal(true);
                }: null
                
                } 
                 className={`w-full relative h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 0 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[0].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 0 ? "scale-150" : ""} rounded  relative`}> 
                      <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[0].level}</span>
                      </div>
                  </div></div>


                <div onClick={ progress > 1 && !levelPassData[1].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[1].id,
                      name: levelPassData[1].name,
                      level: levelPassData[1].level,
                      image: levelPassData[1].image
                });

                setShowModal(true);
                }: null
                
                } 
                
                className={`w-full h-full flex justify-end items-center ${progress > 1 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[1].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 1 ? "scale-150 " : ""} rounded  relative`}>
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[1].level}</span>
                      </div>
                  </div></div>




                <div onClick={ progress > 2 && !levelPassData[2].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[2].id,
                      name: levelPassData[2].name,
                      level: levelPassData[2].level,
                      image: levelPassData[2].image
                });

                setShowModal(true);
                }: null
                
                } 
                
                  className={`w-full h-full flex justify-end items-center ${progress > 2 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[2].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 2 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[2].level}</span>
                      </div>
                  </div></div>




                <div onClick={ progress > 3 && !levelPassData[3].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[3].id,
                      name: levelPassData[3].name,
                      level: levelPassData[3].level,
                      image: levelPassData[3].image
                });

                setShowModal(true);
                }: null
                
                }   className={`w-full h-full flex justify-end items-center ${progress > 3 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[3].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 3 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[3].level}</span>
                      </div>
                  </div></div>




                <div onClick={ progress > 4 && !levelPassData[4].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[4].id,
                      name: levelPassData[4].name,
                      level: levelPassData[4].level,
                      image: levelPassData[4].image
                });

                setShowModal(true);
                }: null
                
                }   className={`w-full h-full flex justify-end items-center ${progress > 4 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[4].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 4 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[4].level}</span>
                      </div>
                  </div></div>





                <div onClick={ progress > 5 && !levelPassData[5].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[5].id,
                      name: levelPassData[5].name,
                      level: levelPassData[5].level,
                      image: levelPassData[5].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 5 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[5].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 5 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[5].level}</span>
                      </div>
                  </div></div>





                <div onClick={ progress > 6 && !levelPassData[6].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[6].id,
                      name: levelPassData[6].name,
                      level: levelPassData[6].level,
                      image: levelPassData[6].image
                });

                setShowModal(true);
                }: null
                
                }   className={`w-full h-full flex justify-end items-center ${progress > 6  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[6].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 6 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[6].level}</span>
                      </div>
                  </div></div>





                <div  onClick={ progress > 7 && !levelPassData[7].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[7].id,
                      name: levelPassData[7].name,
                      level: levelPassData[7].level,
                      image: levelPassData[7].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 7   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[7].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 7 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[7].level}</span>
                      </div>
                  </div></div>




                <div onClick={ progress > 8 && !levelPassData[8].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[8].id,
                      name: levelPassData[8].name,
                      level: levelPassData[8].level,
                      image: levelPassData[8].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 8 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[8].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 8 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[8].level}</span>
                      </div>
                  </div></div>


                <div onClick={ progress > 9 && !levelPassData[9].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[9].id,
                      name: levelPassData[9].name,
                      level: levelPassData[9].level,
                      image: levelPassData[9].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 9 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[9].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 9 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[9].level}</span>
                      </div>
                  </div></div>
            </div>
          }

          { item.id == 2 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 10 && !levelPassData[10].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[10].id,
                      name: levelPassData[10].name,
                      level: levelPassData[10].level,
                      image: levelPassData[10].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 10 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[10].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 10 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[10].level}</span>
                      </div>
                  
                  </div></div>





                  
                <div onClick={ progress > 11 && !levelPassData[11].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[11].id,
                      name: levelPassData[11].name,
                      level: levelPassData[11].level,
                      image: levelPassData[11].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 11 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[11].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 11 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[11].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 12 && !levelPassData[12].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[12].id,
                      name: levelPassData[12].name,
                      level: levelPassData[12].level,
                      image: levelPassData[12].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 12 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[12].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 12 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[12].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 13 && !levelPassData[13].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[13].id,
                      name: levelPassData[13].name,
                      level: levelPassData[13].level,
                      image: levelPassData[13].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 13 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[13].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 13 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[13].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 14 && !levelPassData[14].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[14].id,
                      name: levelPassData[14].name,
                      level: levelPassData[14].level,
                      image: levelPassData[14].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 14 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[14].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 14 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[14].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 15 && !levelPassData[15].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[15].id,
                      name: levelPassData[15].name,
                      level: levelPassData[15].level,
                      image: levelPassData[15].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 15 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[15].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 15 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[15].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 16 && !levelPassData[16].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[16].id,
                      name: levelPassData[16].name,
                      level: levelPassData[16].level,
                      image: levelPassData[16].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 16  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[16].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 16 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[16].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 17 && !levelPassData[17].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[17].id,
                      name: levelPassData[17].name,
                      level: levelPassData[17].level,
                      image: levelPassData[17].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 17   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[17].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 17 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[17].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 18 && !levelPassData[18].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[18].id,
                      name: levelPassData[18].name,
                      level: levelPassData[18].level,
                      image: levelPassData[18].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 18 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[18].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 18 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[18].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 19 && !levelPassData[19].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[19].id,
                      name: levelPassData[19].name,
                      level: levelPassData[19].level,
                      image: levelPassData[19].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 19 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[19].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 19 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[19].level}</span>
                      </div>
                  
                  </div></div>

            </div>
          }   


        { item.id == 3 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 20 && !levelPassData[20].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[20].id,
                      name: levelPassData[20].name,
                      level: levelPassData[20].level,
                      image: levelPassData[20].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 20 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[20].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 20 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[20].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 21 && !levelPassData[21].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[21].id,
                      name: levelPassData[21].name,
                      level: levelPassData[21].level,
                      image: levelPassData[21].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 21 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[21].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 21 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[21].level}</span>
                      </div>
                  
                  </div></div>







                <div onClick={ progress > 22 && !levelPassData[22].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[22].id,
                      name: levelPassData[22].name,
                      level: levelPassData[22].level,
                      image: levelPassData[22].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 22 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[22].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 22 ? "scale-150" : ""} rounded  relative`}>
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[22].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 23 && !levelPassData[23].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[23].id,
                      name: levelPassData[23].name,
                      level: levelPassData[23].level,
                      image: levelPassData[23].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 23 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[23].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 23 ? "scale-150" : ""} rounded  relative`} >
                
                  <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[23].level}</span>
                      </div>
                
                </div></div>





                <div onClick={ progress > 24 && !levelPassData[24].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[24].id,
                      name: levelPassData[24].name,
                      level: levelPassData[24].level,
                      image: levelPassData[24].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 24 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[24].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 24 ? "scale-150" : ""} rounded  relative`} >
                
                  <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[24].level}</span>
                      </div>
                
                </div></div>





                <div onClick={ progress > 25 && !levelPassData[25].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[25].id,
                      name: levelPassData[25].name,
                      level: levelPassData[25].level,
                      image: levelPassData[25].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 25 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[25].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 25 ? "scale-150" : ""} rounded  relative`} >
                
                  <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[25].level}</span>
                      </div>
                
                </div></div>




                <div onClick={ progress > 26 && !levelPassData[26].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[26].id,
                      name: levelPassData[26].name,
                      level: levelPassData[26].level,
                      image: levelPassData[26].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 26  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[26].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 26 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[26].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 27 && !levelPassData[27].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[27].id,
                      name: levelPassData[27].name,
                      level: levelPassData[27].level,
                      image: levelPassData[27].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 27   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[27].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 27 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[27].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 28 && !levelPassData[28].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[28].id,
                      name: levelPassData[28].name,
                      level: levelPassData[28].level,
                      image: levelPassData[28].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 28 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[28].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 28 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[28].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 29 && !levelPassData[29].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[29].id,
                      name: levelPassData[29].name,
                      level: levelPassData[29].level,
                      image: levelPassData[29].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 29 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[29].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 29 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[29].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  



      { item.id == 4 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 30 && !levelPassData[30].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[30].id,
                      name: levelPassData[30].name,
                      level: levelPassData[30].level,
                      image: levelPassData[30].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 30 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[30].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 30 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[30].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 31 && !levelPassData[31].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[31].id,
                      name: levelPassData[31].name,
                      level: levelPassData[31].level,
                      image: levelPassData[31].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 31 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[31].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 31 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[31].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 32 && !levelPassData[32].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[32].id,
                      name: levelPassData[32].name,
                      level: levelPassData[32].level,
                      image: levelPassData[32].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 32 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[32].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 32 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[32].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 33 && !levelPassData[33].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[33].id,
                      name: levelPassData[33].name,
                      level: levelPassData[33].level,
                      image: levelPassData[33].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 33 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[33].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 33 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[33].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 34 && !levelPassData[34].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[34].id,
                      name: levelPassData[34].name,
                      level: levelPassData[34].level,
                      image: levelPassData[34].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 34 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[34].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 34 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[34].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 35 && !levelPassData[35].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[35].id,
                      name: levelPassData[35].name,
                      level: levelPassData[35].level,
                      image: levelPassData[35].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 35 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[35].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 35 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[35].level}</span>
                      </div>
                  
                  </div></div>







                <div onClick={ progress > 36 && !levelPassData[36].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[36].id,
                      name: levelPassData[36].name,
                      level: levelPassData[36].level,
                      image: levelPassData[36].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 36  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[36].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 36 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[36].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 37 && !levelPassData[37].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[37].id,
                      name: levelPassData[37].name,
                      level: levelPassData[37].level,
                      image: levelPassData[37].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 37   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[37].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 37 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[37].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 38 && !levelPassData[38].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[38].id,
                      name: levelPassData[38].name,
                      level: levelPassData[38].level,
                      image: levelPassData[38].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 38 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[38].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 38 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[38].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 39 && !levelPassData[39].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[39].id,
                      name: levelPassData[39].name,
                      level: levelPassData[39].level,
                      image: levelPassData[39].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 39 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[39].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 39 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[39].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  






        { item.id == 5 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 40 && !levelPassData[40].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[40].id,
                      name: levelPassData[40].name,
                      level: levelPassData[40].level,
                      image: levelPassData[40].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 40 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[40].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 40 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[40].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 41 && !levelPassData[41].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[41].id,
                      name: levelPassData[41].name,
                      level: levelPassData[41].level,
                      image: levelPassData[41].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 41 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[41].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 41 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[41].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 42 && !levelPassData[42].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[42].id,
                      name: levelPassData[42].name,
                      level: levelPassData[42].level,
                      image: levelPassData[42].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 42 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[42].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 42 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[42].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 43 && !levelPassData[43].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[43].id,
                      name: levelPassData[43].name,
                      level: levelPassData[43].level,
                      image: levelPassData[43].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 43 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[43].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 43 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[43].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 44 && !levelPassData[44].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[44].id,
                      name: levelPassData[44].name,
                      level: levelPassData[44].level,
                      image: levelPassData[44].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 44 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[44].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 44 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[44].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 45 && !levelPassData[45].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[45].id,
                      name: levelPassData[45].name,
                      level: levelPassData[45].level,
                      image: levelPassData[45].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 45 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[45].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 45 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[45].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 46 && !levelPassData[46].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[46].id,
                      name: levelPassData[46].name,
                      level: levelPassData[46].level,
                      image: levelPassData[46].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 46  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[46].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 46 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[46].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 47 && !levelPassData[47].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[47].id,
                      name: levelPassData[47].name,
                      level: levelPassData[47].level,
                      image: levelPassData[47].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 47   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[47].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 47 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[47].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 48 && !levelPassData[48].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[48].id,
                      name: levelPassData[48].name,
                      level: levelPassData[48].level,
                      image: levelPassData[48].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 48 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[48].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 48 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[48].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 49 && !levelPassData[49].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[49].id,
                      name: levelPassData[49].name,
                      level: levelPassData[49].level,
                      image: levelPassData[49].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 49 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[49].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 49 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[49].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        
        { item.id == 6  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 50 && !levelPassData[50].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[50].id,
                      name: levelPassData[50].name,
                      level: levelPassData[50].level,
                      image: levelPassData[50].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 50 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[50].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 50 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[50].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 51 && !levelPassData[51].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[51].id,
                      name: levelPassData[51].name,
                      level: levelPassData[51].level,
                      image: levelPassData[51].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 51 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[51].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 51 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[51].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 52 && !levelPassData[52].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[52].id,
                      name: levelPassData[52].name,
                      level: levelPassData[52].level,
                      image: levelPassData[52].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 52 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[52].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 52 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[52].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 53 && !levelPassData[53].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[53].id,
                      name: levelPassData[53].name,
                      level: levelPassData[53].level,
                      image: levelPassData[53].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 53 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[53].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 53 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[53].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 54 && !levelPassData[54].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[54].id,
                      name: levelPassData[54].name,
                      level: levelPassData[54].level,
                      image: levelPassData[54].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 54 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[54].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 54 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[54].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 55 && !levelPassData[55].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[55].id,
                      name: levelPassData[55].name,
                      level: levelPassData[55].level,
                      image: levelPassData[55].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 55 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[55].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 55 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[55].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 56 && !levelPassData[56].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[56].id,
                      name: levelPassData[56].name,
                      level: levelPassData[56].level,
                      image: levelPassData[56].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 56  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[56].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 56 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[56].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 57 && !levelPassData[57].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[57].id,
                      name: levelPassData[57].name,
                      level: levelPassData[57].level,
                      image: levelPassData[57].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 57   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[57].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 57 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[57].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 58 && !levelPassData[58].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[58].id,
                      name: levelPassData[58].name,
                      level: levelPassData[58].level,
                      image: levelPassData[58].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 58 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[58].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 58 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[58].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 59 && !levelPassData[59].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[59].id,
                      name: levelPassData[59].name,
                      level: levelPassData[59].level,
                      image: levelPassData[59].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 59 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[59].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 59 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[59].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        { item.id == 7  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 60 && !levelPassData[60].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[60].id,
                      name: levelPassData[60].name,
                      level: levelPassData[60].level,
                      image: levelPassData[60].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 60 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[60].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 60 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[60].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 61 && !levelPassData[61].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[61].id,
                      name: levelPassData[61].name,
                      level: levelPassData[61].level,
                      image: levelPassData[61].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 61 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[61].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 61 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[61].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 62 && !levelPassData[62].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[62].id,
                      name: levelPassData[62].name,
                      level: levelPassData[62].level,
                      image: levelPassData[62].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 62 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[62].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 62 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[62].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 63 && !levelPassData[63].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[63].id,
                      name: levelPassData[63].name,
                      level: levelPassData[63].level,
                      image: levelPassData[63].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 63 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[63].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 63 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[63].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 64 && !levelPassData[64].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[64].id,
                      name: levelPassData[64].name,
                      level: levelPassData[64].level,
                      image: levelPassData[64].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 64 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[64].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 64 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[64].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 65 && !levelPassData[65].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[65].id,
                      name: levelPassData[65].name,
                      level: levelPassData[65].level,
                      image: levelPassData[65].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 65 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[65].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 65 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[65].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 66 && !levelPassData[66].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[66].id,
                      name: levelPassData[66].name,
                      level: levelPassData[66].level,
                      image: levelPassData[66].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 66  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[66].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 66 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[66].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 67 && !levelPassData[67].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[67].id,
                      name: levelPassData[67].name,
                      level: levelPassData[67].level,
                      image: levelPassData[67].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 67   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[67].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 67 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[67].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 68 && !levelPassData[68].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[68].id,
                      name: levelPassData[68].name,
                      level: levelPassData[68].level,
                      image: levelPassData[68].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 68 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[68].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 68 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[68].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 69 && !levelPassData[69].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[69].id,
                      name: levelPassData[69].name,
                      level: levelPassData[69].level,
                      image: levelPassData[69].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 69 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[69].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 69 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[69].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


          
        { item.id == 8  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 70 && !levelPassData[70].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[70].id,
                      name: levelPassData[70].name,
                      level: levelPassData[70].level,
                      image: levelPassData[70].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 70 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[70].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 70 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[70].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 71 && !levelPassData[71].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[71].id,
                      name: levelPassData[71].name,
                      level: levelPassData[71].level,
                      image: levelPassData[71].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 71 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[71].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 71 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[71].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 72 && !levelPassData[72].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[72].id,
                      name: levelPassData[72].name,
                      level: levelPassData[72].level,
                      image: levelPassData[72].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 72 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[72].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 72 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[72].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 73 && !levelPassData[73].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[73].id,
                      name: levelPassData[73].name,
                      level: levelPassData[73].level,
                      image: levelPassData[73].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 73 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[73].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 73 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[73].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 74 && !levelPassData[74].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[74].id,
                      name: levelPassData[74].name,
                      level: levelPassData[74].level,
                      image: levelPassData[74].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 74 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[74].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 74 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[74].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 75 && !levelPassData[75].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[75].id,
                      name: levelPassData[75].name,
                      level: levelPassData[75].level,
                      image: levelPassData[75].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 75 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[75].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 75 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[75].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 76 && !levelPassData[76].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[76].id,
                      name: levelPassData[76].name,
                      level: levelPassData[76].level,
                      image: levelPassData[76].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 76  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[76].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 76 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[76].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 77 && !levelPassData[77].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[77].id,
                      name: levelPassData[77].name,
                      level: levelPassData[77].level,
                      image: levelPassData[77].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 77   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[77].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 77 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[77].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 78 && !levelPassData[78].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[78].id,
                      name: levelPassData[78].name,
                      level: levelPassData[78].level,
                      image: levelPassData[78].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 78 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[78].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 78 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[78].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 79 && !levelPassData[79].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[79].id,
                      name: levelPassData[79].name,
                      level: levelPassData[79].level,
                      image: levelPassData[79].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 79 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[79].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 79 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[79].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  



            
          {  item.id == 9  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 80 && !levelPassData[80].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[80].id,
                      name: levelPassData[80].name,
                      level: levelPassData[80].level,
                      image: levelPassData[80].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 80 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[80].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 80 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[80].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 81 && !levelPassData[81].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[81].id,
                      name: levelPassData[81].name,
                      level: levelPassData[81].level,
                      image: levelPassData[81].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 81 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[81].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 81 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[81].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 82 && !levelPassData[82].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[82].id,
                      name: levelPassData[82].name,
                      level: levelPassData[82].level,
                      image: levelPassData[82].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 82 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[82].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 82 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[82].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 83 && !levelPassData[83].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[83].id,
                      name: levelPassData[83].name,
                      level: levelPassData[83].level,
                      image: levelPassData[83].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 83 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[83].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 83 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[83].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 84 && !levelPassData[84].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[84].id,
                      name: levelPassData[84].name,
                      level: levelPassData[84].level,
                      image: levelPassData[84].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 84 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[84].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 84 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[84].level}</span>
                      </div>
                  
                  </div></div>





                
                <div onClick={ progress > 85 && !levelPassData[85].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[85].id,
                      name: levelPassData[85].name,
                      level: levelPassData[85].level,
                      image: levelPassData[85].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 85 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[85].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 85 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[85].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 86 && !levelPassData[86].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[86].id,
                      name: levelPassData[86].name,
                      level: levelPassData[86].level,
                      image: levelPassData[86].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 86  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[86].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 86 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[86].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 87 && !levelPassData[87].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[87].id,
                      name: levelPassData[87].name,
                      level: levelPassData[87].level,
                      image: levelPassData[87].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 87   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[87].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 87 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[87].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 88 && !levelPassData[88].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[88].id,
                      name: levelPassData[88].name,
                      level: levelPassData[88].level,
                      image: levelPassData[88].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 88 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[88].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 88 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[88].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 89 && !levelPassData[89].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[89].id,
                      name: levelPassData[89].name,
                      level: levelPassData[89].level,
                      image: levelPassData[89].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 89 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[89].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 89 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[89].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


             
        {  item.id == 10  &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 90 && !levelPassData[90].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[90].id,
                      name: levelPassData[90].name,
                      level: levelPassData[90].level,
                      image: levelPassData[90].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 90 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[90].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 90 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[90].level}</span>
                      </div>
                  
                  
                  </div></div>



                <div onClick={ progress > 91 && !levelPassData[91].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[91].id,
                      name: levelPassData[91].name,
                      level: levelPassData[91].level,
                      image: levelPassData[91].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 91 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[91].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 91 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[91].level}</span>
                      </div>
                  
                  
                  </div></div>





                <div onClick={ progress > 92 && !levelPassData[92].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[92].id,
                      name: levelPassData[92].name,
                      level: levelPassData[92].level,
                      image: levelPassData[92].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 92 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[92].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 92 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[92].level}</span>
                      </div>
                  
                  
                  </div></div>





                <div onClick={ progress > 93 && !levelPassData[93].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[93].id,
                      name: levelPassData[93].name,
                      level: levelPassData[93].level,
                      image: levelPassData[93].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 93 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[93].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 93 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[93].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 94 && !levelPassData[94].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[94].id,
                      name: levelPassData[94].name,
                      level: levelPassData[94].level,
                      image: levelPassData[94].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 94 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[94].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 94 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[94].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 95 && !levelPassData[95].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[95].id,
                      name: levelPassData[95].name,
                      level: levelPassData[95].level,
                      image: levelPassData[95].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 95 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[95].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 95 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[95].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 96 && !levelPassData[96].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[96].id,
                      name: levelPassData[96].name,
                      level: levelPassData[96].level,
                      image: levelPassData[96].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 96  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[96].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 96 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[96].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 97 && !levelPassData[97].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[97].id,
                      name: levelPassData[97].name,
                      level: levelPassData[97].level,
                      image: levelPassData[97].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 97   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[97].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 97 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[97].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 98 && !levelPassData[98].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[98].id,
                      name: levelPassData[98].name,
                      level: levelPassData[98].level,
                      image: levelPassData[98].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 98 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[98].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 98 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[98].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 99 && !levelPassData[99].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[99].id,
                      name: levelPassData[99].name,
                      level: levelPassData[99].level,
                      image: levelPassData[99].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 99 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[99].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 99 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[99].level}</span>
                      </div>
                  
                  
                  </div></div>
            </div>
          }  

                
        {  item.id == 11 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 100 && !levelPassData[100].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[100].id,
                      name: levelPassData[100].name,
                      level: levelPassData[100].level,
                      image: levelPassData[100].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 100 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[100].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 100 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[100].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 101 && !levelPassData[101].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[101].id,
                      name: levelPassData[101].name,
                      level: levelPassData[101].level,
                      image: levelPassData[101].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 101 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[101].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 101 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[101].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 102 && !levelPassData[102].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[102].id,
                      name: levelPassData[102].name,
                      level: levelPassData[102].level,
                      image: levelPassData[102].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 102 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[102].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 102 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[102].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 103 && !levelPassData[103].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[103].id,
                      name: levelPassData[103].name,
                      level: levelPassData[103].level,
                      image: levelPassData[103].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 103 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[103].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 103 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[103].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 104 && !levelPassData[104].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[104].id,
                      name: levelPassData[104].name,
                      level: levelPassData[104].level,
                      image: levelPassData[104].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 104 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[104].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 104 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[104].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 105 && !levelPassData[105].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[105].id,
                      name: levelPassData[105].name,
                      level: levelPassData[105].level,
                      image: levelPassData[105].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 105 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[105].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 105 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[105].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 106 && !levelPassData[106].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[106].id,
                      name: levelPassData[106].name,
                      level: levelPassData[106].level,
                      image: levelPassData[106].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 106  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[106].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 106 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[106].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 107 && !levelPassData[107].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[107].id,
                      name: levelPassData[107].name,
                      level: levelPassData[107].level,
                      image: levelPassData[107].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 107   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[107].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 107 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[107].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 108 && !levelPassData[108].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[108].id,
                      name: levelPassData[108].name,
                      level: levelPassData[108].level,
                      image: levelPassData[108].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 108 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[108].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 108 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[108].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 109 && !levelPassData[109].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[109].id,
                      name: levelPassData[109].name,
                      level: levelPassData[109].level,
                      image: levelPassData[109].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 109 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[109].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 109 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[109].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  

{  item.id == 12 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 110 && !levelPassData[110].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[110].id,
                      name: levelPassData[110].name,
                      level: levelPassData[110].level,
                      image: levelPassData[110].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 110 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[110].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 110 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[110].level}</span>
                      </div>
                  
                  </div></div>






                <div onClick={ progress > 111 && !levelPassData[111].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[111].id,
                      name: levelPassData[111].name,
                      level: levelPassData[111].level,
                      image: levelPassData[111].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 111 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[111].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 111 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[111].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 112 && !levelPassData[112].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[112].id,
                      name: levelPassData[112].name,
                      level: levelPassData[112].level,
                      image: levelPassData[112].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 112 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[112].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 112 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[112].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 113 && !levelPassData[113].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[113].id,
                      name: levelPassData[113].name,
                      level: levelPassData[113].level,
                      image: levelPassData[113].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 113 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[113].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 113 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[113].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 114 && !levelPassData[114].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[114].id,
                      name: levelPassData[114].name,
                      level: levelPassData[114].level,
                      image: levelPassData[114].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 114 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[114].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 114 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[114].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 115 && !levelPassData[115].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[115].id,
                      name: levelPassData[115].name,
                      level: levelPassData[115].level,
                      image: levelPassData[115].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 115 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[115].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 115 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[115].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 116 && !levelPassData[116].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[116].id,
                      name: levelPassData[116].name,
                      level: levelPassData[116].level,
                      image: levelPassData[116].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 116  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[116].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 116 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[116].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 117 && !levelPassData[117].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[117].id,
                      name: levelPassData[117].name,
                      level: levelPassData[117].level,
                      image: levelPassData[117].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 117   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[117].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 117 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[117].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 118 && !levelPassData[118].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[118].id,
                      name: levelPassData[118].name,
                      level: levelPassData[118].level,
                      image: levelPassData[118].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 118 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[118].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 118 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[118].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 119 && !levelPassData[119].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[119].id,
                      name: levelPassData[119].name,
                      level: levelPassData[119].level,
                      image: levelPassData[119].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 119 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[119].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 119 ? "scale-150" : ""} rounded  relative`} >
                  
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[119].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  



        {  item.id == 13 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 120 && !levelPassData[120].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[120].id,
                      name: levelPassData[120].name,
                      level: levelPassData[120].level,
                      image: levelPassData[120].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 120 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[120].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 120 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[120].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 121 && !levelPassData[121].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[121].id,
                      name: levelPassData[121].name,
                      level: levelPassData[121].level,
                      image: levelPassData[121].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 121 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[121].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 121 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[121].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 122 && !levelPassData[122].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[122].id,
                      name: levelPassData[122].name,
                      level: levelPassData[122].level,
                      image: levelPassData[122].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 122 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[122].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 122 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[122].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 123 && !levelPassData[123].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[123].id,
                      name: levelPassData[123].name,
                      level: levelPassData[123].level,
                      image: levelPassData[123].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 123 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[123].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 123 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[123].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 124 && !levelPassData[124].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[124].id,
                      name: levelPassData[124].name,
                      level: levelPassData[124].level,
                      image: levelPassData[124].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 124 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[124].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 124 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[124].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 125 && !levelPassData[125].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[125].id,
                      name: levelPassData[125].name,
                      level: levelPassData[125].level,
                      image: levelPassData[125].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 125 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[125].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 125 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[125].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 126 && !levelPassData[126].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[126].id,
                      name: levelPassData[126].name,
                      level: levelPassData[126].level,
                      image: levelPassData[126].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 126  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[126].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 126 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[126].level}</span>
                      </div>
                  
                  </div></div>


                  
                <div onClick={ progress > 127 && !levelPassData[127].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[127].id,
                      name: levelPassData[127].name,
                      level: levelPassData[127].level,
                      image: levelPassData[127].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 127   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[127].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 127 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[127].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 128 && !levelPassData[128].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[128].id,
                      name: levelPassData[128].name,
                      level: levelPassData[128].level,
                      image: levelPassData[128].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 128 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[128].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 128 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[128].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 129 && !levelPassData[129].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[129].id,
                      name: levelPassData[129].name,
                      level: levelPassData[129].level,
                      image: levelPassData[129].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 129 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[129].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 129 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[129].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


        {  item.id == 14 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 130 && !levelPassData[130].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[130].id,
                      name: levelPassData[130].name,
                      level: levelPassData[130].level,
                      image: levelPassData[130].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 130 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[130].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 130 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[130].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 131 && !levelPassData[131].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[131].id,
                      name: levelPassData[131].name,
                      level: levelPassData[131].level,
                      image: levelPassData[131].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 131 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[131].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 131 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[131].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 132 && !levelPassData[132].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[132].id,
                      name: levelPassData[132].name,
                      level: levelPassData[132].level,
                      image: levelPassData[132].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 132 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[132].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 132 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[132].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 133 && !levelPassData[133].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[133].id,
                      name: levelPassData[133].name,
                      level: levelPassData[133].level,
                      image: levelPassData[133].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 133 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[133].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 133 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[133].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 134 && !levelPassData[134].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[134].id,
                      name: levelPassData[134].name,
                      level: levelPassData[134].level,
                      image: levelPassData[134].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 134 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[134].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 134 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[134].level}</span>
                      </div>
                  
                  </div></div>





                <div onClick={ progress > 135 && !levelPassData[135].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[135].id,
                      name: levelPassData[135].name,
                      level: levelPassData[135].level,
                      image: levelPassData[135].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 135 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[135].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 135 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[135].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 136 && !levelPassData[136].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[136].id,
                      name: levelPassData[136].name,
                      level: levelPassData[136].level,
                      image: levelPassData[136].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 136  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[136].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 136 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[136].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 137 && !levelPassData[137].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[137].id,
                      name: levelPassData[137].name,
                      level: levelPassData[137].level,
                      image: levelPassData[137].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 137   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[137].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 137 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[137].level}</span>
                      </div>
                  
                  </div></div>



                <div onClick={ progress > 138 && !levelPassData[138].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[138].id,
                      name: levelPassData[138].name,
                      level: levelPassData[138].level,
                      image: levelPassData[138].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 138 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[138].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 138 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[138].level}</span>
                      </div>
                  
                  </div></div>




                <div onClick={ progress > 139 && !levelPassData[139].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[139].id,
                      name: levelPassData[139].name,
                      level: levelPassData[139].level,
                      image: levelPassData[139].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 139 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[139].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 139 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[139].level}</span>
                      </div>
                  
                  </div></div>
            </div>
          }  


{  item.id == 15 &&  <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div onClick={ progress > 140 && !levelPassData[140].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[140].id,
                      name: levelPassData[140].name,
                      level: levelPassData[140].level,
                      image: levelPassData[140].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 140 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[140].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 140 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[140].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 141 && !levelPassData[141].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[141].id,
                      name: levelPassData[141].name,
                      level: levelPassData[141].level,
                      image: levelPassData[141].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 141 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[141].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 141 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[141].level}</span>
                      </div>
                  
                  
                  </div></div>





                <div onClick={ progress > 142 && !levelPassData[142].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[142].id,
                      name: levelPassData[142].name,
                      level: levelPassData[142].level,
                      image: levelPassData[142].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 142 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[142].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 142 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[142].level}</span>
                      </div>
                  
                  
                  </div></div>





                <div onClick={ progress > 143 && !levelPassData[143].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[143].id,
                      name: levelPassData[143].name,
                      level: levelPassData[143].level,
                      image: levelPassData[143].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 143 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[143].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 143 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[143].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 144 && !levelPassData[144].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[144].id,
                      name: levelPassData[144].name,
                      level: levelPassData[144].level,
                      image: levelPassData[144].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 144 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[144].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 144 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[144].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 145 && !levelPassData[145].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[145].id,
                      name: levelPassData[145].name,
                      level: levelPassData[145].level,
                      image: levelPassData[145].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 145 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[145].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 145 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[145].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 146 && !levelPassData[146].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[146].id,
                      name: levelPassData[146].name,
                      level: levelPassData[146].level,
                      image: levelPassData[146].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 146  ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[146].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 146 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[146].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 147 && !levelPassData[147].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[147].id,
                      name: levelPassData[147].name,
                      level: levelPassData[147].level,
                      image: levelPassData[147].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 147   ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[147].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 147 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[147].level}</span>
                      </div>
                  
                  
                  </div></div>




                <div onClick={ progress > 148 && !levelPassData[148].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[148].id,
                      name: levelPassData[148].name,
                      level: levelPassData[148].level,
                      image: levelPassData[148].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center ${progress > 148 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[148].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 148 ? "scale-150" : ""} rounded  relative`} >
                  
                    <div style={{bottom:-10}} className='px-1 flex justify-center items-center h-4 rounded-full absolute bg-[#D2F5FF] bottom-0'>
                        <span className='text-[10px]'>{levelPassData[148].level}</span>
                      </div>
                  
                  
                  </div></div>





                <div onClick={ progress > 149 && !levelPassData[149].achieved ?  () => {
                  setLevelItemActualData({
                      id: levelPassData[149].id,
                      name: levelPassData[149].name,
                      level: levelPassData[149].level,
                      image: levelPassData[149].image
                });

                setShowModal(true);
                }: null
                
                }  className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 149 ? " bg-orange-500" : ""}`}> <div style={{backgroundImage:`url(${levelPassData[149].image})`, backgroundSize:"cover",top:"-40px",backgroundPosition:"center center"}} className={`w-10 h-10 text-black flex justify-center items-center ${progress > 149 ? "scale-150" : ""} rounded  relative`} >
                  
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
