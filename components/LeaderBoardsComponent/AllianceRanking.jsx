import React from 'react'

const AllianceRanking = () => {
  return (
    <div className='mt-3 '>
        <h2 className='text-xl font-bold'>Alliance Rankings</h2>
        <ul className='flex flex-col gap-3 mt-2 px-3'>
            <li className='text-md w-full font-light overflow-hidden flex justify-between items-center truncate pr-2'><span >1. SITES</span> 5000pts</li>
            <li className='text-md w-full font-light overflow-hidden flex justify-between items-center truncate pr-2'><span >2. ABESS</span> 4000pts</li>
            <li className='text-md w-full font-light overflow-hidden flex justify-between items-center truncate pr-2'><span >3. Chorale Adveniente</span> 3000pts</li>
            <li className='text-md w-full font-light overflow-hidden flex justify-between items-center truncate pr-2'><span >4. EMINWS</span> 2000pts</li>
            <li className='text-md w-full font-light overflow-hidden flex justify-between items-center truncate pr-2'><span >5. CEAFES</span> 1000pts</li>
        </ul>
    </div>
  )
}

export default AllianceRanking