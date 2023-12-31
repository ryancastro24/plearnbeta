'use client'


import {useState} from 'react'

const ItemsForm = ({itemData,setItemData}) => {

 

    const [loading,setLoading] = useState(false);


    

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(!itemData.image) return;
        try{
          const data = new FormData();
          data.set('file', itemData.image)
          data.set('name', itemData.name)
         data.set('price', itemData.price)
         data.set('description', itemData.description)
    
          const res = await fetch('http://localhost:3000/api/superadmin/items',{
            method:'POST',
            body:data
          }).then(() => {
            setItemData({
                name:"",
                description:"",
                price:"",
                image:""
            })
            setLoading(false);
            })
    
          if(!res.ok) throw new Error(await res.text());
    
        }
        catch(e) {
          console.error(e)
        }
      }

  return (
    <div className='flex flex-col gap-5'>

        <h2 className='text-lg text-center'>Items Management</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input value={itemData.name} onChange={(e) => setItemData({...itemData,name:e.target.value})} type="text" placeholder='Item Name' className='px-3 py-2 rounded w-full text-black' />
            <textarea value={itemData.description} onChange={(e) => setItemData({...itemData,description:e.target.value})} placeholder='Description' className='px-3 py-2 rounded w-full text-black resize-none'></textarea>
            <input value={itemData.price} onChange={(e) => setItemData({...itemData,price:e.target.value})} type="number" placeholder='Price' className='px-3 py-2 rounded w-full text-black' />
            <input onChange={(e) => setItemData({...itemData,image:e.target.files?.[0]})} type="file" placeholder='Image' className='px-3 py-2 rounded w-full' />
        
            <button className='px-3 py-3 rounded bg-orange-600 w-full' onClick={() => setLoading(true)}>{loading ? "Adding Item..." : "Add Item"}</button>
        </form>
    </div>
  )
}

export default ItemsForm