'use client'
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const DoneModal = ({ totalScore, score, actId, userId }) => {

const router = useRouter()
const [isSubmitting,setIsSubmitting] = React.useState(false)

  const data = totalScore * 2;

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const requestOptions = {
            method: 'PATCH', // Use 'PATCH' method for the request
            headers: {
              'user_id': userId, 
            },
            body: JSON.stringify({ finalTotalScore: data }), // Replace with your data object
          };
          
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/activity/done_activity_api/${actId}`, requestOptions)
                            .then(() => {
                                router.back()
                            })
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  }

  return (
    <div className='flex justify-center items-center absolute top-0 z-50 w-full h-full bg-[#161a1ec8]'>
      <div className='w-96 h-60 bg-[#D2F5FF] rounded flex-col gap-2 flex justify-center items-center'>
      
       <div className="confetti">
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
      </div> 
      
        
        <span className='text-black'>SCORE</span>
        <span className='text-6xl font-bold relative text-black'>{totalScore}/{score}</span>
        <form onSubmit={handleSubmit} className='relative z-50'>
          <button onClick={() => setIsSubmitting(true)} className=' z-50 cursor-pointer bg-[#E58E27] mt-3 px-3 py-2 rounded'>{isSubmitting ? "Compiling" : "Done"}</button>
        </form>
      </div>
    </div>
  )
}

export default DoneModal;
