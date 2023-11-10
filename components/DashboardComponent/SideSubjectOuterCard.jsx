
import React from 'react'
import Image from 'next/image'
import SideSubjects from './SideSubjects'
const getData = async(id) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/userSubject/${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json()
}



const SideSubjectOuterCard = async({id}) => {

    const data = await getData(id)
   

  return (
    <>
        <SideSubjects user={id} {...data}/>
       
    </>
  )
}

export default SideSubjectOuterCard