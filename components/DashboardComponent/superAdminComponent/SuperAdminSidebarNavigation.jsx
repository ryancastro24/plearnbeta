'use client'

import React, { useState } from 'react'
import { PiStudentBold } from "react-icons/pi";
import { GrUserWorker,GrAnnounce  } from "react-icons/gr";
import { TbBallpen,TbSitemap } from "react-icons/tb";

const SuperAdminSidebarNavigation = ({setNavigationData,navigationData}) => {

  
  return (
    <div>
            <ul className='flex flex-col gap-5'>
                    <li className={`cursor-pointer py-2 ${navigationData === "student" ? "bg-orange-500" : ""} rounded w-full hover:bg-orange-500 px-3 text-sm flex items-center gap-2`} onClick={() => setNavigationData('student')}><PiStudentBold /> Student Management</li>
                    <li className={`cursor-pointer py-2 ${navigationData === "employee" ? "bg-orange-500" : ""} rounded w-full hover:bg-orange-500 px-3 text-sm flex items-center gap-2`} onClick={() => setNavigationData('employee')}><GrUserWorker /> Employee Management</li>
                    <li className={`cursor-pointer py-2 ${navigationData === "items" ? "bg-orange-500" : ""} rounded w-full hover:bg-orange-500 px-3 text-sm flex items-center gap-2`} onClick={() => setNavigationData('items')}><TbBallpen /> Items Management</li>
                    <li className={`cursor-pointer py-2 ${navigationData === "announcement" ? "bg-orange-500" : ""} rounded w-full hover:bg-orange-500 px-3 text-sm flex items-center gap-2`} onClick={() => setNavigationData('announcement')}><GrAnnounce /> Announcement</li>
                    <li className={`cursor-pointer py-2 ${navigationData === "others" ? "bg-orange-500" : ""} rounded w-full hover:bg-orange-500 px-3 text-sm flex items-center gap-2`} onClick={() => setNavigationData('others')}><TbSitemap />Other Matter</li>
            </ul>

    </div>
  )
}

export default SuperAdminSidebarNavigation