'use client'


import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle  } from "react-icons/io"
const data = [ 
    {id:1, title:"sample div 1"},
    {id:2, title:"sample div 2"},
    {id:3, title:"sample div 3"},
    {id:4, title:"sample div 4"},
    {id:5, title:"sample div 5"},
]


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const [userLevel, setUserLevel] = useState(3);
  const [progress ,setProgress] = useState(0);



  useEffect(() => {

   
      setProgress(prev  => prev + 1);


      if(userLevel % 10 === 0){
        setProgress(prev => prev * 0);
      }
  
    
     
  },[userLevel])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center relative h-full ">
      <button onClick={handlePrev} className=" cursor-pointer text-3xl text-[#393c41] hover:text-orange-500 absolute bottom-4 left-5 z-20 ">
      <IoIosArrowDropleftCircle />
      </button>

      <div className="w-full h-full">
        {data.map((item,index) => (
          <div key={index} className={` h-full w-full p-5 ${index === currentIndex ? 'block' : 'hidden'}`}>
           
            {/* Add more content or customize as needed */}

            <div className='flex justify-center items-center bg-[#393c41] w-full h-3 p-1 rounded-full mt-20'>
                <div className={`w-full h-full rounded-tl-full flex justify-end items-center rounded-bl-full ${progress > 0 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 0 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 1 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 1 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 2 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 2 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 3 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 3 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 4 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 4 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 5 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 5 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 6  ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 6 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 7   ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 7 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center ${progress > 8 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 8 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
                <div className={`w-full h-full flex justify-end items-center rounded-tr-full rounded-br-full ${progress > 9 ? " bg-orange-500" : ""}`}> <div className={`w-10 h-10 ${progress > 9 ? "scale-150 shadow-md shadow-[#0000008c]" : ""} rounded bg-[#D2F5FF] relative`} style={{top:"-40px"}}></div></div>
            </div>

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
