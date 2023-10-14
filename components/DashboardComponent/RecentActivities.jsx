import React from 'react'
import RecentActivitiesInner from './RecentActivitiesInner'
const getData = async(id) => {
  const res = await fetch(`http://localhost:3000/api/userSubject/${id}`)

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}
const RecentActivities = async({id}) => {

  const subjects = await getData(id)
  return (
    <div>
        <h1 className='text-xl '>Recent Activities</h1>

        <ul>
           <RecentActivitiesInner {...subjects}/>
           
        </ul>
    </div>
  )
}

export default RecentActivities