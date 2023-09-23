
import React from 'react'
import ActivitiesCard from '@/components/DashboardComponent/ActivitiesCard';

async function getData(id){
    const res = await fetch(`http://localhost:3000/api/subject/${id}`,{
        next:{revalidate:0}
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}  
const Subject = async ({params}) => {

    const data = await getData(params.id);
    console.log("________subject data_____________")
    console.log(data);
  return (
   <>
   <div className='w-full h-screen pt-16 p-6'>
            <div>
                <h2>{data.title}</h2>
                <span>{data.subjectCode}</span>
                <br />
                <span>Section: {data.section}</span>
            </div>

        {data.activityId.length  > 0 ?  <ActivitiesCard activities={data.activityId}/> : <h1>No Activities Available</h1>}
         
      
   </div>
   </>
  )
}

export default Subject