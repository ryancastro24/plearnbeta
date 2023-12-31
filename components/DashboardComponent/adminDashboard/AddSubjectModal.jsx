'use client'

import '@/styles/globals.css'
import axios from 'axios'
import { useState } from 'react'


const AddSubjectModal = ({show,idNumber}) => {

    const [data,setData] = useState({
        idNumber,
        realm:'',
        subjectTitle:'',
        subjectCode:'',
        type:'',
        
    });
    
    const [submitting,setSubmitting] = useState(false);

    const addSubject = async(e) => {
      e.preventDefault();
      const res = axios.post('/api/subject',data)
                  .then(() => {
                    alert('subject has been added!')
                    setData({
                      ...data,
                      realm:'',
                      subjectTitle:'',
                      subjectCode:'',
                      type:''
                    })
                    show(false)
                  })
                  .catch((err) => alert(err))

       
    }

  return (
    <div className='w-full top-0 left-0 h-full bg-[#161a1eb3] flex justify-center items-center absolute z-40'>


  


            <div className='w-[700px] h-[450px] bg-[#D2F5FF] relative rounded-md p-7'>


            <form onSubmit={addSubject} action="" className='flex flex-col justify-between h-full w-full'>

            <div className='flex flex-col gap-3'>
                <span className='text-black'>Choose Realm</span>
              <div className='flex gap-3'>
                  <input value="forest" checked={data.realm === 'forest'} onChange={(e) => setData({...data,realm:e.target.value})} type="radio" id="radioButton1" name="radioGroup" />
                  <label className="radio-button1" htmlFor="radioButton1"></label>


                  <input value="desert" checked={data.realm === 'desert'} onChange={(e) => setData({...data,realm:e.target.value})} type="radio" id="radioButton2" name="radioGroup" />
                  <label className="radio-button2" htmlFor="radioButton2"></label>



                  <input value="city" checked={data.realm === 'city'} onChange={(e) => setData({...data,realm:e.target.value})} type="radio" id="radioButton3" name="radioGroup" />
                  <label className="radio-button3" htmlFor="radioButton3"></label>


                  <input value="snow" checked={data.realm === 'snow'} onChange={(e) => setData({...data,realm:e.target.value})} type="radio" id="radioButton4" name="radioGroup" />
                  <label className="radio-button4" htmlFor="radioButton4"></label>

                  <input value="sea" checked={data.realm === 'sea'} onChange={(e) => setData({...data,realm:e.target.value})} type="radio" id="radioButton5" name="radioGroup" />
                  <label className="radio-button5" htmlFor="radioButton5"></label>
              </div>
            </div>

              <div className='flex flex-col gap-5'>

                  <div className='flex gap-5'>

                      <div className="flex flex-col">
                          <label className='text-black font-bold' htmlFor="subject-title">Subject Title</label>
                          <input value={data.subjectTitle} onChange={(e) => setData({...data,subjectTitle:e.target.value})} className='py-2 px-3 bg-[#99b8c0] text-black outline-none placeholder:text-[#161A1E]' type="text" placeholder='Enter Subject Title' id='subject-title' />
                      </div>

                      <div className="flex flex-col">
                          <label className='text-black font-bold' htmlFor="subject-title">Type</label>
                          <select value={data.type} onChange={(e) => setData({...data,type:e.target.value})} className='py-2 px-3 bg-[#99b8c0] text-black outline-none' name="" id="">
                            <option value="major">Major</option>
                            <option value="minor">Minor</option>
                          </select>
                      </div>

                       
                  </div>

                 <div className='flex  gap-5'>
                    <div className="flex flex-col">
                          <label className='text-black font-bold' htmlFor="subject-code">Subject Code</label>
                          <input value={data.subjectCode} onChange={(e) => setData({...data,subjectCode:e.target.value})} className='py-2 px-3 bg-[#99b8c0] text-black outline-none placeholder:text-[#161A1E]' type="text" placeholder='Enter Subject Code' id='subject-code' />
                      </div>

                    
                 </div>
              </div>

              <div className='flex justify-between items-center'>
                <button onClick={() => setSubmitting(true)} className='py-2 px-3 bg-[#E58E27] rounded' type='submit'>{submitting ? "Creating..." : "Create Subject"}</button>
               
    
              </div>


            </form>

            <button  onClick={() => show(false)} className='bg-red-500 px-3 py-2 rounded absolute bottom-7 right-7'>close</button>
               


                
            
            
            
            {/* end of inner modal */}
           
            </div>

          
        
    </div>
  )
}

export default AddSubjectModal