'use client'

import { useState } from 'react'


const LessonModalContent = ({setOpenModal,subjectId}) => {

    const [file,setFile] = useState();
    const [fileData,setFileData] = useState({
        title:"",
    })
    const [adding,setAdding] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(!file) return;
    try{
      const data = new FormData();
      data.set('file', file)
      data.set('title', fileData.title)
     data.set('subjectId', subjectId)

      const res = await fetch('http://localhost:3000/api/uploadFile',{
        method:'POST',
        body:data
      }).then(() => {
        alert("file has been uploaded");
        setOpenModal(false)
        window.location.reload();
        })

      if(!res.ok) throw new Error(await res.text());

    }
    catch(e) {
      console.error(e)
    }
  }
  return (
    <div className='w-full h-full top-0 right-0 absolute  z-50 bg-[#161a1ec9] flex justify-center items-center'>
            <div className='w-96 bg-[#D2F5FF] p-5' >
                     
        <form className='flex gap-3 w-full h-4/5 flex-col'  onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
                <label className='text-black' htmlFor="title">Title</label>
                <input id='title' className='text-black bg-[#96e1f3] outline-none px-3 py-2 w-full'  value={fileData.title} type="text" onChange={(e) => setFileData({...fileData,title:e.target.value}) } />
            </div>

            <div className='mt-5 flex flex-col gap-2'>
                 <input className='text-black' type="file" name='file' onChange={(e) => setFile(e.target.files?.[0])} />
                <button onClick={() => setAdding(true)} className='bg-orange-500 hover:bg-orange-600 px-3 py-3 rounded my-3 w-full'>{adding ? "Adding Lesson" : "Add Lesson"}</button>    
            </div>
            
        </form>

        <button onClick={() => setOpenModal(false)} className='w-full py-3 rounded bg-[#b1d6d6] hover:bg-red-500'>Cancel</button>

            </div>
    </div>
  )
}

export default LessonModalContent