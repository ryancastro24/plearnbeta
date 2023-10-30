'use client'
import axios from 'axios'
import React from 'react'

const NotesModal = ({setIsOpenModal,subId,userId}) => {

  const [addNote,setAddNote] = React.useState(false);
  const [data,setData] = React.useState({
    title:"",
    content:"",
    userId,
    subId,

  })
  const handleSubmit  = async(e) => {
    e.preventDefault();

    const res = await axios.post("/api/notes",data)
                  .then(() => {
                    alert("data is recieved")
                    setData({
                      ...data,
                      title:"",
                      content:"",
                    })

                    setIsOpenModal(false)
                  })
  }
  return (
    <div className='w-full h-full z-40 absolute top-0 p-10 flex justify-center items-center'>
            <div className='w-full h-full p-5 flex flex-col justify-between bg-[#D2F5FF] relative rounded'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2 h-full' action="">
                        <div className='flex flex-col gap-1'>
                            <label className='text-black' htmlFor="title">Title</label>
                            <input value={data.title} onChange={(e) => setData({...data,title:e.target.value})} id='title' className='w-full px-3 py-2 border-none outline-none text-black bg-[#abc8d0] rounded' type="text" placeholder='Enter Note Title' />
                        </div>

                        <div className='flex flex-col gap-1'>
                                <label className='text-black' htmlFor="content">Note Content</label>
                                <textarea value={data.content} onChange={(e) => setData({...data,content:e.target.value})}  placeholder='Enter Note' className='w-full resize-none h-28 outline-neutral-50 roundend bg-[#abc8d0] text-black p-2' name="" id="" cols="30" rows="10"></textarea>
                        </div>

                        <div className='flex items-end justify-end gap-2'>
                           
                            <button onClick={() =>setAddNote(true)} type='submit' className='px-3 py-2 rounded bg-orange-500'>{addNote ? "Adding Note" :"Add Note"}</button>
                        </div>

                    </form>



                    <div className='absolute bottom-7'>
                      <button onClick={() => setIsOpenModal(false)} className='px-3 py-2 rounded bg-red-500'>Close</button>
                    </div>


                
            </div>
    </div>
  )
}

export default NotesModal