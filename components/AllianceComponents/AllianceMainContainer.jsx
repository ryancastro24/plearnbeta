'use client'

import {useState} from 'react'
import AllianceContent from "@/components/AllianceComponents/AllianceContent";
import AllianceSideNav from "@/components/AllianceComponents/AllianceSideNav";


const AllianceMainContainer = ({position,allianceId, allianceData,userId,allianceRequests}) => {

    const [navigation,setNavigation] = useState("myAlliance");

  
  return (
    <div className='w-full h-full p-3 flex justify-between  items-center'>

       
        <AllianceSideNav position={position} navigation={navigation} setNavigation={setNavigation}/>
        <AllianceContent allianceRequests={allianceRequests} userId={userId} allianceId={allianceId} navigation={navigation} allianceData={allianceData}/>
       

    </div>
  )
}

export default AllianceMainContainer