import React from 'react'
import ItemCard from './ItemCard'
const RedeemBottomContent = () => {
    return (
        <div className='w-full h-96 bg-[#20262C] rounded p-5 flex flex-col gap-3'>
        <h2 className='text-lg'>Available Products</h2>
        <div className='flex justify-between items-center'>   
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
        </div>
        </div>
      )
}

export default RedeemBottomContent