'use client'
import {useState} from 'react'





const AnnouncementForm = ({data,setData}) => {




const [loading,setLoading] = useState(false);


const handleSubmit =  async(e) => {
    e.preventDefault();
    setLoading(true)


    if(!data.image) alert("missing data");

    try{
      const announcementData = new FormData();
      announcementData.set('file', data.image)
      announcementData.set('title', data.title)
      announcementData.set('dateAndTime', data.dateAndTime)
      announcementData.set("startsOn", data.startsOn);
      announcementData.set("endsOn", data.endsOn);
      announcementData.set('description', data.description)

      const res = await fetch('http://localhost:3000/api/superadmin/announcements',{
        method:'POST',
        body:announcementData
      }).then(() => {
        setData({
            title:"",
            description:"",
            dateAndTime:"",
            image:null,
            startsOn:null,
            endsOn:null,
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
    <div>
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-5 w-full '>
                <input required className='px-3 text-black py-2 rounded outline-orange-500 w-full' type="text" placeholder='Title' value={data.title} onChange={(e) => setData({...data,title:e.target.value})} />
                <input required className='px-3 text-black py-2 rounded outline-orange-500 w-full' type="text" placeholder='Date and Time' value={data.dateAndTime} onChange={(e) => setData({...data,dateAndTime:e.target.value})} />
                <textarea required className='px-3 text-black py-2 rounded outline-orange-500 w-full resize-none' type="text" placeholder='Description' value={data.description} onChange={(e) => setData({...data,description:e.target.value})}></textarea>
                <input className='px-3  py-2 rounded outline-orange-500 w-full text-black' value={data.startsOn} type="datetime-local"   onChange={(e) => setData({...data,startsOn:e.target.value})} />
                <input className='px-3  py-2 rounded outline-orange-500 w-full text-black' value={data.endsOn} type="datetime-local" onChange={(e) => setData({...data,endsOn:e.target.value})} />
                <input className='px-3  py-2 rounded outline-orange-500 w-full' type="file"  onChange={(e) => setData({...data,image:e.target.files?.[0]})} />
               

                <button className='w-full py-3 hover:bg-orange-700 rounded bg-orange-600'>{loading ? "submitting..." :"submit"}</button>
        </form>  
    </div>
  )
}

export default AnnouncementForm