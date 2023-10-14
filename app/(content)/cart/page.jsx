'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cartItems } from '@/libs/testing'
import CartItemCard from '@/components/CartComponents/CartItemCard'
const Page = () => {
  const router  = useRouter();
  return (
    <div className='bg-[#161A1E] w-full h-full absolute z-50 p-7 '>
          <div className='flex  items-center gap-10'>
              <button onClick={() => router.back()} className='flex justify-center items-center gap-2 hover:gap-3'>                
                <Image width={15} height={15} alt='back' src={'/DashboardAssets/icons/backArrow.svg'} />
                BACK
                </button>

              <h2 className='text-xl font-bold'>My Cart</h2>
          </div>


          <div className='mt-5 flex flex-col gap-3'>
            <h4>Available Items</h4>
            <div className='w-full flex'>
                  <div className='w-2/3 flex flex-col gap-4'>
                    {cartItems.map(val => <CartItemCard {...val}/>)}
                  </div>

                  <div className='w-1/3 pl-7 '>
                      <div className='bg-[#41454A] w-full h-96 rounded sticky top-5'>

                      </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Page