'use client'
import {useState, useEffect} from 'react'
import DashboardAnnouncementInnerContent from './DashboardAnnouncementInnerContent';
// sample data 

const sampleData = [1,2];


const DashboardAnnouncement = () => {
    const [showModal,setShowModal] = useState(false);  
    const [data,setData] = useState(sampleData)


    useEffect(() => {
       
        const hasDisplayedModal = localStorage.getItem('hasDisplayedModal');
        
        if(data.length > 0 &&  !hasDisplayedModal )
        
            setShowModal(true)
            localStorage.setItem('hasDisplayedModal', true);
        
    },[])
  return (
    <>
    {showModal && <DashboardAnnouncementInnerContent setShowModal={setShowModal}/> }
  </>
  )
}

export default DashboardAnnouncement