import React from 'react'




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
    <div className='flex flex-col absolute top-0 z-40 w-full h-full bg-blue-950'
    >
    <span>{data.activity.title}</span>

    <div className='flex flex-col w-full'>
    {data.activity.questions.map(val => (
      <div className='mt-5 bg-red-500 p-5 w-full'>
        <h2>{val.questionText}</h2>
        
          {val.choices.map((val,i) => (
            <div>
                <span> <input type="radio" checked={val.isCorrectChoice} /> {i + 1}. {val.choiceText}</span>
            </div>
          ))}
      </div>
    ))}
    </div>
    </div>
  )
}

export default BattleField