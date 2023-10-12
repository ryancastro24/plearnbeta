'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
let arr = []
const RecentActivitiesInner = ({subjects}) => {

   const [doneActivities,setDoneActivities] = React.useState([]);

 
useEffect(() => {
    // Use a Set to avoid duplicates
    const doneActivitiesSet = new Set();
  
    subjects.forEach((subject) => {
      subject.activityId.forEach((activity) => {
        if (activity.isDone) {
          doneActivitiesSet.add(activity);
        }
      });
    });
  
    // Convert the Set back to an array
    const doneActivitiesArray = [...doneActivitiesSet];
  
    setDoneActivities(doneActivitiesArray);
  }, []);
  return (
    <div>
        {doneActivities.slice(0,4).map(val => <li key={val.id} className='flex text-sm items-center gap-4 mt-3  cursor-pointer'><Image alt='details' src={'/DashboardAssets/icons/check-to-slot-solid 1.svg'} height={20} width={20}/>{val.title}</li>)}


    </div>
  )
}

export default RecentActivitiesInner