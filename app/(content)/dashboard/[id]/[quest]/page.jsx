
import React from 'react'
import QuestContent from '@/components/DashboardComponent/adminDashboard/QuestContent';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
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

const SampleQuest = async({params}) => {

    const session =  await getServerSession(authOptions);
    const data = await getData(params.quest);
  return (
    <div className='p-10 px-14 w-full h-full bg-[#161A1E] z-30 absolute top-0  '>
      <QuestContent {...data} role={session.user.role}/>
    </div>
  )
}

export default SampleQuest