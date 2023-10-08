'use client'

import React from 'react'
import QuestsPage from '@/components/DashboardComponent/QuestsPage';
import QuestPageFooter from '@/components/DashboardComponent/QuestPageFooter';
import AddActivityModal from './AddActivityModal';

const QuestContent = ({activityId,role,id}) => {

    const [showModal,setShowModal] = React.useState(false);

  return (
    <>
    <div className='flex justify-between w-full items-center '>

        {showModal && <AddActivityModal setShowModal={setShowModal} id={id}/>}
        <h1 className='text-2xl'>Available Quest</h1>
        <span >
          {activityId.length  > 0 ?  <span>0/{activityId.length} Done</span> : <span>No Available Data</span>}
        </span>
        
      </div>


      <div>
          {activityId.length > 0 ? <QuestsPage activityId={activityId} role={role}/> : 
          <div className='w-full h-[480px] flex justify-center items-center'><span className='text-2xl'>No Quests Available</span></div>}
      </div>


      <QuestPageFooter setShowModal={setShowModal} role={role} activityLength={activityId.length}/>

    </>
  )
}

export default QuestContent