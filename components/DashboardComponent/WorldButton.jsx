import React from 'react'
import Image from 'next/image'
const WorldButton = () => {
  return (
    <div>
        <button className='bg-[#E58E27] w-full py-3 flex gap-3 justify-center items-center rounded '>
            <Image src={'/DashboardAssets/icons/map-location-dot-solid 1.svg'} height={20} width={20}/>
            Open World
        </button>
    </div>
  )
}

export default WorldButton