import React from 'react'


const getData = async() => {
  const res = await fetch(`http://localhost:3000/api/subject`)

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}

const Progres = async() => {

  const user = await getData()
  console.log(user)
  return (
    <div>Progres</div>
  )
}

export default Progres