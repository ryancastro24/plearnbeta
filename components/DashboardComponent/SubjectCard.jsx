
import React from 'react'
import Image from 'next/image'
import SubjectCardInnerContent from './SubjectCardInnerContent'
const getData = async(id) => {
    const res = await fetch(`http://localhost:3000/api/userSubject/${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json()
}



const SubjectCard = async({id}) => {

    const data = await getData(id)
   

  return (
    <>
        <SubjectCardInnerContent user={id} {...data}/>
       
    </>
  )
}

export default SubjectCard