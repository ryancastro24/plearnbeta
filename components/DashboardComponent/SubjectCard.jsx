
import React from 'react'
import Image from 'next/image'
import SubjectCardInnerContent from './SubjectCardInnerContent'
import { getSubjectData } from '@/libs/db'

const SubjectCard = async({id}) => {

    const data = await getSubjectData(id)
   

  return (
    <>
        <SubjectCardInnerContent user={id} {...data}/>
       
    </>
  )
}

export default SubjectCard