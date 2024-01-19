import React from 'react'
import AllianceRequestTable from './AllianceRequestTable'
const AllianceRequestContainer = ({allianceRequests}) => {

  return (
    <div className="w-full h-full">
         <AllianceRequestTable allianceRequests={allianceRequests}/>
    </div>
  )
}

export default AllianceRequestContainer