'use client'

import { useState } from 'react'
import AddAnnouncementModal from './AddAnnouncementModal'
const AddAnnoucementContent = ({subject_id, user_id}) => {
    const [openModal,setOpenModal] = useState(false)
  return (
    <div className='w-full h-full absolute top-0 Z-50'>

        {openModal && <AddAnnouncementModal subject_id={subject_id} user_id={user_id} setOpenModal={setOpenModal}/>}
        <button onClick={() => setOpenModal(true)} className='px-3 py-2 rounded absolute bottom-28 right-0 bg-[#E58E27] mt-5'>Add Announcements</button>
    </div>
  )
}

export default AddAnnoucementContent