import React from 'react'
import FinalBattle from '@/components/GameDevComponents/FinalBattle';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
async function getData(id){
  const res = await fetch(`http://localhost:3000/api/activity/${id}`,{
    next:{
      revalidate:0
    }
  });
  
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return res.json()
}  
const BattleField = async({params}) => {

  const data = await getData(params.activity);    
  const session = await getServerSession(authOptions);


  return (
    <div>
        <FinalBattle userId={session.user.id} data={data}/>
    </div>
  )
}

export default BattleField