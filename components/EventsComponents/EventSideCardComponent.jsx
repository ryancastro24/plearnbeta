'use client'
import {useState,useEffect} from 'react'

const EventSideCardComponent = ({id,eventData,title,image,dateAndTime,description,setEventData,startsOn,endsOn,starts,ends}) => {
  

    const targetDate = new Date(startsOn);
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
      }, []); 
    
  
    return (
    <>
        <div   className={` ${eventData?.title  === title ? " border-orange-500 border" : ""}  w-full  h-56 rounded bg-[#242629] flex flex-col gap-2 p-3`}>

            <div className='w-full h-28 flex gap-3'>
                <div style={{
                    backgroundImage:`url("/announcementsAssets/${image}")`,
                    backgroundSize:"cover",
                    backgroundPosition:"center center"
                    }} 
                 className='w-28 h-28 rounded gap-3'></div>
                <div  className='flex flex-col'>
                    <h2 className='text-xl'>{title}</h2>
                    <span className='text-sm'>{dateAndTime}</span>

                    <div className='flex justify-between items-end'>
                        <button onClick={() => setEventData({id,title,image,dateAndTime,description, startsOn,endsOn,starts,ends})} className='px-3 py-2 text-sm hover:bg-orange-700 mt-3 rounded bg-orange-600'>preview</button>
                       
                       <div className='flex flex-col'>
                        <span className='text-xs'>Starts on:</span>
                       <span className='text-sm'>{countdown}</span>
                       </div>
                       
                    </div>
                </div>
            </div>

            <div>
                <span className='text-sm text-justify'>{description}</span>
            </div>
            
        </div>
    </>
  )
}

export default EventSideCardComponent