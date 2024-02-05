import React from 'react'
import AnnouncementContainer from './AnnouncementContainer'
const AnnouncementShelf = ({announcements,setAnnouncement}) => {
  return (
    <div className='w-full h-[400px] flex flex-col p-4 gap-3'>
        
        {announcements.map(val => <AnnouncementContainer {...val}/>)}

    </div>
  )
}

export default AnnouncementShelf