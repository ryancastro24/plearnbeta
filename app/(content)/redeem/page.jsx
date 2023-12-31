import React from 'react'
import RedeemSearchButton from '@/components/RedeemComponents/RedeemSearchButton'
import RedeemUpperContent from '@/components/RedeemComponents/RedeemUpperContent'
import RedeemBottomContent from '@/components/RedeemComponents/RedeemBottomContent'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
const getData = async() => {
  const res = await fetch('http://localhost:3000/api/cart_items',{
    next:{
      revalidate:0
    }
  })

  return res.json()
}


const Redeem = async() => {

  const data = await getData()
  const session = await getServerSession(authOptions);
  return (
    <div className='w-full  pt-16 p-6'>
       
      <div className='w-full h-full pt-5 flex flex-col gap-5'>
          <RedeemSearchButton pointsAvailable={session.user.points} />
          <RedeemUpperContent data={data}/>
          <RedeemBottomContent data={data}/>
      </div>
     
    </div>
  )
}

export default Redeem