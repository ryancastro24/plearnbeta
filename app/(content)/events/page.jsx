'use client'
import {useEffect, useState} from 'react'
import EventSideCardComponent from '@/components/EventsComponents/EventSideCardComponent'
import EventMainContainer from '@/components/EventsComponents/EventMainContainer'
import axios from 'axios'

const Events = () => {
  const [events,setEvents] =  useState([])
  const [eventData,setEventData] = useState(null);
  
  


  useEffect(() => {
    const eventGetter = async () => {
      try {
        const response = await axios.get('/api/superadmin/announcements');
        const data = response.data;

        setEvents(data);
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        throw error; // Re-throw the error to propagate it further if needed
      }
    };
    
    // You can call the function like this:
    eventGetter();
    
  
  },[events]);



  
  return (
    <div className='w-full h-screen pt-16 p-5 flex justify-center items-center'>
        <div className='w-2/5 h-full p-5'>
            <div className='w-full h-full bg-[#41454A] p-4 pt-0 overflow-y-auto scrollbar-hidden rounded'>
                
                <div className='top-0 sticky bg-[#41454A] py-2 pt-4'>
                     <h2>Available Events</h2>
                </div>

                <div className='w-full flex flex-col gap-3  py-3'>

              {events.map(val => <EventSideCardComponent key={val.id} eventData={eventData}  setEventData={setEventData}  {...val}/>) }
                   

                </div>
            </div>
        </div>
        <div className='w-3/5 h-full p-5'>
              {eventData !== null ?  <EventMainContainer  eventData={eventData}/> :  <div className='w-full h-full bg-[#41454A] rounded relative'></div>}
        </div>  
    </div>
  )
}

export default Events