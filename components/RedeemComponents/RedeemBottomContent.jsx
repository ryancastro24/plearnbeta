import React from 'react'
import ItemCard from './ItemCard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
const RedeemBottomContent = async({data}) => {
  const session = await getServerSession(authOptions)
  console.log(session.user.id)
    return (
        <div className='w-full h-96 bg-[#20262C] rounded p-5 flex flex-col gap-3'>
        <h2 className='text-lg'>Available Products</h2>
        <div className='flex justify-between items-center'>   
          {data.slice(5).map(val => <ItemCard key={val.id} user={session.user.id} {...val}/>)}
        </div>
        </div>
      )
}

export default RedeemBottomContent