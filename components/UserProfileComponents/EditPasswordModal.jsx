'use client'
import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useSession } from 'next-auth/react';
import axios from 'axios';
const EditPasswordModal = ({setShowModal}) => {
    const {data:session} = useSession();
    const [passwordData,setPasswordData] = useState("");

    const handleChangePassword = async(e) => {
        e.preventDefault();
        
        await axios.patch(`/api/user_activity/changepassword/${session.user.id}`,{passwordData})
                   .then(() => alert("user password has been changed!"))
                   .then(() => {
                    setShowModal(false)
                    setPasswordData("");
                   })
                   .catch((e) => alert(e.messagex))
                
       
    }
  return (
    <>

        <form onSubmit={handleChangePassword} className='w-full h-full flex items-center gap-2'>
            <input value={passwordData} onChange={(e) => setPasswordData(e.target.value) }  type="text" placeholder='Edit Password' className='w-full h-full outline-none bg-[#1b2025]  px-3' />
            <button className='px-3 h-full rounded bg-orange-500'><FaCheck /></button>
            <button onClick={() => setShowModal(false)} className='px-3 h-full rounded bg-red-500'><IoMdClose /></button>
        </form>
        
    </>
  )
}

export default EditPasswordModal