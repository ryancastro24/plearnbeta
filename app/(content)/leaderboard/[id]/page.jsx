import React from 'react'
import CoverPhotoDiv from '@/components/LeaderBoardsComponent/CoverPhotoDiv'
import UserProfileContent from '@/components/LeaderBoardsComponent/UserProfileContent'

const getData = async(id) => {
    const res = await fetch(`http://localhost:3000/api/students/student_profile/${id}`,{
        next:{
            revalidate:0
        }
    })

    if(!res.ok){
        throw new Error("fetch Failed!")
    }
    return res.json()
}


const StundentVisitedProfile = async({params}) => {

    const data = await getData(params.id)

    console.log(data)
  return (
    <div className='flex flex-col absolute top-0 z-40 w-full h-full  bg-[#161A1E]'>
        
            <CoverPhotoDiv/>
            
            <UserProfileContent data={data}/>
    </div>
  )
}

export default StundentVisitedProfile