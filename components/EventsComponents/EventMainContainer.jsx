'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';

const EventMainContainer = ({ eventData }) => {
  
  const [countdown, setCountdown] = useState('');

  const updateEventProgressStart = async () => {
    await axios.patch(`/api/superadmin/announcements/announcementsEventApi/${eventData.id}`);
  };

  
  // const updateEventProgressEnd= async () => {
  //   await axios.patch(`/api/superadmin/announcements/announcementsEventApiEnd/${eventData.id}`);
  // };

  useEffect(() => {
    const calculateTimeDifference = () => {
      let targetDate = new Date(eventData.startsOn);
      const currentDate = new Date();
      let timeDifference = targetDate - currentDate;

     

      if (timeDifference <= 0) {
        // Event has ended, update targetDate to eventData.endsOn
        targetDate = new Date(eventData.endsOn);
        timeDifference = targetDate - currentDate;

        
        if (timeDifference <= 0) {
          // Event has ended and endsOn time has passed, perform update logic
          updateEventProgressStart();
          return '';
        }



      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      if (days > 0) {
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        return `${hours}h ${minutes}m ${seconds}s`;
      }
    };

    setCountdown(calculateTimeDifference());

    const interval = setInterval(() => {
      setCountdown(calculateTimeDifference());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [eventData.startsOn, eventData.endsOn, eventData.id]);


  return (
    <>
      <div
        style={{
          backgroundImage: `url("/announcementsAssets/${eventData.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        className='w-full h-full bg-[#41454A] rounded relative'
      >
        {!eventData.starts ? (
          <div className='w-full flex flex-col gap-3 justify-center items-center absolute h-full inset-0 bg-[#000000ca]'>
            <span className='text-xl'>starts on:</span>
            <h2 className='text-5xl font-bold'>{countdown}</h2>
            <span className='px-3 py-2 rounded bg-[#D2F5FF] text-black mt-5'>{eventData.title}</span>
          </div>
        )

        :

      (
        <div className='w-full flex flex-col gap-3 justify-center items-center absolute h-full inset-0 bg-[#000000ca]'>
          <span className='text-xl'>ends on:</span>
          <h2>{countdown}</h2>
          <h2 className='text-5xl font-bold'>PARTICIPATE NOW</h2>
          <button className='px-3 py-2 rounded bg-orange-600 mt-5'>{eventData.title}</button>
        </div>
      )
      }
      </div>
    </>
  );
};

export default EventMainContainer;
