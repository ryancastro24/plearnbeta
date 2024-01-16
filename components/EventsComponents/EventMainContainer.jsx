'use client'
import {useState,useEffect} from 'react'

const EventMainContainer = ({eventData}) => {


  const targetDate = new Date(eventData.startsOn);


  const calculateTimeDifference = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        if (days > 0) {
          return `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          return `${hours}h ${minutes}m ${seconds}s`;
        }
      } else {
        return "Event Started";
      }
    };
  
    const [countdown, setCountdown] = useState(calculateTimeDifference);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown(calculateTimeDifference);
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, [eventData]);
  

    

  
  

  

  return (
    <>
    

    

    <div style={{
        backgroundImage:`url("/announcementsAssets/${eventData.image}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
        }}  className='w-full h-full bg-[#41454A] rounded relative'>

        
    {!eventData.starts  && eventData && <div className='w-full flex  flex-col gap-3 justify-center items-center absolute h-full inset-0 bg-[#000000ca]'>
          <span className='text-xl'>starts on:</span>
          <h2 className='text-5xl font-bold'>{countdown}</h2>
          <span className='px-3 py-2 rounded bg-[#D2F5FF] text-black mt-5'>{eventData.title}</span>
      </div>}

       
    </div>
    </>
  )
}

export default EventMainContainer