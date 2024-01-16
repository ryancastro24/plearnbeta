'use client'

import { useEffect, useState } from 'react';

const Progress = () => {
  // Set the target date and time (replace with your desired date and time)
  const targetDate = new Date("2024-01-16T00:00:00");

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
      return "Countdown expired!";
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
    <div className='w-full h-full pt-16'>
      <h1>Countdown Timer</h1>
      <p>{countdown}</p>
    </div>
  );
};

export default Progress;
