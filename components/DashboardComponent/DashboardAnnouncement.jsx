'use client'
import {useState, useEffect} from 'react'
import DashboardAnnouncementInnerContent from './DashboardAnnouncementInnerContent';


const DashboardAnnouncement = ({announcementData}) => {
    const [showModal,setShowModal] = useState(false);  
    const [data,setData] = useState(announcementData)


    useEffect(() => {
       
        const hasDisplayedModal = localStorage.getItem('hasDisplayedModal');
        
        if(data.length > 0 &&  !hasDisplayedModal )
        
            setShowModal(true)
            localStorage.setItem('hasDisplayedModal', true);
        
    },[]);


  
  return (
    <>
    {showModal && <DashboardAnnouncementInnerContent announcementData={announcementData} setShowModal={setShowModal}/> }
  </>
  )
}

export default DashboardAnnouncement