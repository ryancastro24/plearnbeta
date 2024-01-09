'use client'

import { validateHeaderName } from 'http';
import React, {useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"
import { FaPlay } from "react-icons/fa";
const GeneralAnnouncementCarousel = ({announcementData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcementData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === announcementData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center relative h-full ">
      <button style={{left:-70}} onClick={handlePrev} className=" cursor-pointer text-4xl text-white hover:text-orange-500 absolute z-20 ">
      <IoIosArrowDropleftCircle />
      </button>

      <div className="w-full h-full">
        {announcementData.map((val,index) => (
          <div key={index} style={{backgroundImage:`url("/announcementsAssets/${val.image}")`,backgroundSize:"cover"}} className={` h-full w-full relative p-5 ${index === currentIndex ? 'block' : 'hidden'}`}>
           
               <div>
                <button className='px-3 py-2  bg-[#161A1E] text-sm rounded'>subsribe</button>
               </div>
                <div className='w-[500px] pt-14 h-44 right-3 absolute bottom-6 flex flex-col justify-center items-center' style={{backgroundImage:`url("/announcementsAssets/splash.png")`,backgroundSize:"cover"}}>
                    <span className='font-bold text-lg'>{val.title}</span>
                    <span className='text-sm'>{val.dateAndTime}</span>
                </div>
          </div>
        ))}
      </div>
      <button style={{right:-70}} onClick={handleNext} className=" cursor-pointer text-white hover:text-orange-500 absolute  z-20 text-4xl">
      <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default GeneralAnnouncementCarousel;
