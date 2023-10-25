import React from 'react'
import FinalBattle from '@/components/GameDevComponents/FinalBattle';

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
  


  return (
    <div>
        <FinalBattle data={data}/>
    </div>
  )
}

export default BattleField