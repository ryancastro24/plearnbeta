'use client'

import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const CartItemCard = ({name, description,price,purchasedId,isPurchased,user}) => {

    const [data,setData] = React.useState({
        purchasedId,
        user,
        price
    })
    const [loading,setloading] = React.useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.patch('/api/cart_items',data)
                        .then(() => {
                           
                                toast.success('Thank you for Purchasing :)', {
                                  position: "top-right",
                                  autoClose: 1500,
                                  hideProgressBar: true,
                                  closeOnClick: false,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: "dark"
                                 
                                  });
                                  
                        })
                        .catch(err => {
                            toast.error(`Insufficient Points Try again!`, {
                                position: "top-right",
                                autoClose: 1500,
                                hideProgressBar: true,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark"
                               
                                });
                            setloading(false)
        
                        }

                    
                        
                        )
                        
                        
    }

  return (
    <>
     
    <div className={`p-3 rounded  w-full ${isPurchased ? "bg-[#41454A]" : "bg-[#D2F5FF]"} h-28 flex items-center gap-4 relative`}>
       
        <div className={`${isPurchased ? "bg-[#323539]" : "bg-[#A1BEC7]"} w-28 h-full rounded`}>
            
        </div>
      
        <div className='flex flex-col'> 
            <span className={`${isPurchased ? "text-white" :" text-black"} text-2xl font-bold`}>{name}</span>
            <span className={`${isPurchased ? "text-white" :" text-black"} text-sm`}>{description}</span>
            <span className={`${isPurchased ? "text-white" :" text-black"} text-lg`}>{price}pts</span> 
        </div>

        <div className='flex justify-center items-center gap-2 absolute top-5 right-3'>
            <button className={`p-2 ${isPurchased ? "bg-red-700" : "bg-red-500"} rounded`}>
                <Image width={15} height={15} alt='delete' src={'/DashboardAssets/icons/trash-can-regular 1.svg'} />
            </button>
            <form onSubmit={handleSubmit}>
                  {!isPurchased && <button onClick={() =>setloading(true)} className='p-2 bg-[#E58E27] rounded text-sm'>
                        {loading ? 'confirming payment' :  <Image width={15} height={15} alt='buy' src={'/DashboardAssets/icons/bag-shopping-solid 1.svg'} />}
                       
                    </button>}  
            </form>
        </div>


      

    </div>
    </>
  )
}

export default CartItemCard