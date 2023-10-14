import React from 'react'
import RedeemSearchButton from '@/components/RedeemComponents/RedeemSearchButton'
import RedeemUpperContent from '@/components/RedeemComponents/RedeemUpperContent'
import RedeemBottomContent from '@/components/RedeemComponents/RedeemBottomContent'
const Redeem = () => {
  return (
    <div className='w-full  pt-16 p-6'>
      <div className='w-full h-full pt-5 flex flex-col gap-5'>
          <RedeemSearchButton/>
          <RedeemUpperContent/>
          <RedeemBottomContent/>
      </div>
     
    </div>
  )
}

export default Redeem