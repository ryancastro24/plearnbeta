'use client'
import { useState } from 'react'
import SuperAdminSidebarNavigation from './superAdminComponent/SuperAdminSidebarNavigation'
import StudentManagement from './superAdminComponent/StudentManagement'
import EmployeeManagement from './superAdminComponent/EmployeeManagement'
import ItemsManagement from './superAdminComponent/ItemsManagement'
import AnnouncementManagement from './superAdminComponent/AnnouncementManagement'
import Alliances from './superAdminComponent/Alliances'
const SuperAdminDashboard = () => {
    const [navigationData,setNavigationData] = useState('student');
  return (
    <div className='w-full h-screen pt-16 p-6'>
    
    <div className='w-full h-full p-5 flex justify-between items-center'>

      

        <div className='w-1/5 rounded-md h-full bg-[#41454A] p-5 flex flex-col justify-between'>

               <SuperAdminSidebarNavigation navigationData={navigationData} setNavigationData={setNavigationData}/>
    
        
        </div>

        <div  className='w-3/4 rounded-md h-full bg-[#41454A]  flex flex-col justify-between'>

         
            {navigationData === 'student' && <StudentManagement/>}
            {navigationData === 'employee' && <EmployeeManagement/>}
            {navigationData === 'items' && <ItemsManagement/>}
            {navigationData === 'announcement' && <AnnouncementManagement/>}
            {navigationData === 'alliance' && <Alliances/>}
        
        </div>

    </div>

  
  </div>
)
}

export default SuperAdminDashboard