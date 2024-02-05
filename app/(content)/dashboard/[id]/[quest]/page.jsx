
import React from 'react'
import QuestContent from '@/components/DashboardComponent/adminDashboard/QuestContent';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


//get admin subjects data
async function getAdminSubs(id){

  const res = await fetch(`http://localhost:3000/api/adminSubjects/${id}`,

  {

      next:{revalidate:0}
  });
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return res.json()

}


//get subejcts data for student
async function getData(id,req){

  const res = await fetch(`http://localhost:3000/api/subject/${id}`,
  req,
  {

      next:{revalidate:0}
  });
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return res.json()
}  

const SampleQuest = async({params}) => {

    const session =  await getServerSession(authOptions);
    const requestOptions = {
      method: 'GET',
      headers: {
        'user_id': session.user.id,
        // Add more custom headers as needed
      },
    };
    const data = await getData(params.quest, requestOptions);
    const adminData = await getAdminSubs(params.id)
 
  return (
    <div className='px-10 w-full h-full bg-[#161A1E] z-30 absolute top-0'>
      <QuestContent  adminData={adminData} subId={data.finalData[0].subjectDetails.id} questData={data.finalData[1].activityData} role={session.user.role}/>
    </div>
  )
}

export default SampleQuest;