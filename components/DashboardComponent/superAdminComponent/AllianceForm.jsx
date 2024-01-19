'use client'


import {useState} from 'react'

const AllianceForm = ({allianceData,setAllianceData}) => {

 

    const [loading,setLoading] = useState(false);


    

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!allianceData.image) return;
      try{
        const data = new FormData();
        data.set('file', allianceData.image)
        data.set('name', allianceData.name)
       
        const res = await fetch('http://localhost:3000/api/superadmin/alliance',{
          method:'POST',
          body:data
        }).then(() => {
          setAllianceData({
              name:"",
              image:null
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

        <h2 className='text-lg text-center'>Alliance Management</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input required value={allianceData.name} onChange={(e) => setAllianceData({...allianceData,name:e.target.value})} type="text" placeholder='Alliance Name' className='px-3 py-2 rounded w-full text-black' />
            <input  onChange={(e) => setAllianceData({...allianceData,image:e.target.files?.[0]})} type="file" placeholder='Image' className='px-3 py-2 rounded w-full' />
        
            <button className={`px-3 py-3 rounded  bg-orange-600 w-full`} onClick={() => setLoading(true)}>Submit</button>
            
        </form>
    </div>
  )
}

export default AllianceForm