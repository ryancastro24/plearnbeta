'use client'
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { ToastContainer,toast,Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ItemCard = ({name,description,price,user,id,image}) => {
      const [data,setData] = React.useState({
          user,
          id
      })
      const [adding,setAdding] = React.useState(false);

      const handleSubmit = async(e)=> {
        e.preventDefault();
          const res = await axios.post('/api/cart_items',data)
                      .then(()=> {
                        toast.success('Item Added To Cart', {
                          position: "top-right",
                          autoClose: 1500,
                          hideProgressBar: true,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark"
                          
                          });
                        setAdding(false)
                        })
      }
   return (
    <div className='w-60 h-72 p-3 rounded bg-[#D2F5FF] flex flex-col'>
      <ToastContainer
       position="top-right"
       autoClose={1500}
       hideProgressBar={true}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       closeButton={false}
      transition={Zoom}
       />
        <div  style={{backgroundImage:`url("/itemsAssets/${image}")`,backgroundSize:"cover"}} className='w-full h-36  rounded'></div>
        <div className='mt-3'>
            <div>
                <h3 className='text-black flex justify-between items-center'><span className='font-bold'>{name}</span><span className='text-sm'>{price}pts</span></h3>
                <span className='text-black text-sm line-clamp-1'>{description}</span>
              
               
            </div>

            <form onSubmit={handleSubmit}>
            <button onClick={() => setAdding(true)} className='bg-[#E58E27] mt-3 py-3 w-full rounded gap-2 flex justify-center items-center'>

               
                <Image width={17} height={17} alt='cart' src={'/DashboardAssets/icons/cart.svg'}/>
                {adding ? 'adding item ' : "add to cart"}
            </button>
            </form>
        </div>
    </div>
  )
}

export default ItemCard