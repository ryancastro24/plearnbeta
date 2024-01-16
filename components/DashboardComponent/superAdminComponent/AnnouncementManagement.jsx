'use client'

import {useEffect, useState} from 'react'
import AnnouncementForm from './AnnouncementForm'
import axios from 'axios'
import AnnouncementShelf from './AnnouncementShelf'
const AnnouncementManagement = () => {
  const [data,setData] = useState({
      title:"",
      image:"",
      dateAndTime:"",
      description:"",
      startsOn:null,
      endsOn:null,
  })

  const [announcements,setAnnouncements] = useState([])


  useEffect(() => {
    const announcementGetter = async () => {
      try {
        const response = await axios.get('/api/superadmin/announcements');
        const annData = response.data;
        setAnnouncements(annData)
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        throw error; // Re-throw the error to propagate it further if needed
      }
    };
    
    // You can call the function like this:
    announcementGetter();
    
  
  },[announcements]);

  return (
    <div className='w-full h-full flex justify-center items-center'>

      <div className='w-1/3 h-full p-4 flex flex-col gap-5'>

          <h2 className='text-center'>Announcement Management</h2>
          <AnnouncementForm data={data} setData={setData}/>
      </div>
      <div className='w-2/3 h-full p-4'>
          <AnnouncementShelf announcements={announcements} setAnnouncements={setAnnouncements}/>
      </div>

    </div>
  )
}

export default AnnouncementManagement