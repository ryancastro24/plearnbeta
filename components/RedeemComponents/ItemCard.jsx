import React from 'react'
import Image from 'next/image'
const ItemCard = () => {
  return (
    <div className='w-60 h-72 p-3 rounded bg-[#D2F5FF] flex flex-col'>
        <div className='w-full h-36 bg-[#A0C5CF] rounded'></div>
        <div className='mt-3'>
            <div>
                <h3 className='text-black flex justify-between items-center'><span className='font-bold'>Notebook</span><span className='text-sm'>200pts</span></h3>
                <span className='text-black text-sm'>Brown Cover, 200 pages</span>
            </div>
            <button className='bg-[#E58E27] mt-3 py-3 w-full rounded gap-2 flex justify-center items-center'>
                <Image width={17} height={17} alt='cart' src={'/DashboardAssets/icons/cart.svg'}/>
                add to cart
            </button>

        </div>
    </div>
  )
}

export default ItemCard