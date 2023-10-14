import React from 'react'
import Image from 'next/image'
const CartItemCard = ({name, description,price}) => {
  return (
    <div className='p-3 rounded bg-[#D2F5FF] w-full h-28 flex items-center gap-4 relative'>
        <div className='bg-[#A1BEC7] w-28 h-full rounded'>
            
        </div>
        
        <div className='flex flex-col'>
            <span className='text-black text-2xl font-bold'>{name}</span>
            <span className='text-black text-sm'>{description}</span>
            <span className='text-black text-lg'>{price}</span> 
        </div>

        <div className='flex justify-center items-center gap-2 absolute top-5 right-5'>
            <button className='p-2 bg-red-500 rounded'>
                <Image width={15} height={15} alt='delete' src={'/DashboardAssets/icons/trash-can-regular 1.svg'} />
            </button>

            <button className='p-2 bg-[#E58E27] rounded'>
                <Image width={15} height={15} alt='buy' src={'/DashboardAssets/icons/bag-shopping-solid 1.svg'} />
            </button>
        </div>
    </div>
  )
}

export default CartItemCard