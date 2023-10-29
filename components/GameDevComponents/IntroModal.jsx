import React from 'react'
import 'animate.css';
import Image from 'next/image';
const IntroModal = ({play}) => {
  return (
    <div className='flex  absolute justify-center items-center top-0 z-50 w-full h-full bg-[#151718c4]'>
        <div className='bg-[#D2F5FF] w-[600px]  flex flex-col justify-center items-center gap-6 h-[400px] rounded animate__animated animate__backInUp' >
           
            <div>
                <Image alt='crossSwords' width={100} height={100} src={'/GameDevAssets/crossSwords.png'} />
            </div>
           
           <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='text-5xl font-bold text-black'>Welcome Warrior</h2>
              <span className='text-black'>Fight with all your might and finish the enemy!</span>
              <button onClick={() => play(false)} className='bg-orange-500 rounded px-3 py-2 mt-5'>PLAY</button>
            </div>
        </div>
    </div>
  )
}

export default IntroModal