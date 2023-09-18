
import React from 'react'
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DashboardNav from '@/components/DashboardComponent/DashboardNav'
const  Dashboard = async() => {
    const session = await getServerSession(authOptions);
    const data = await session;
    const {name, email,level,rank} = data.user;
  
  return (
    <div>
      
    
    </div>
  )
}

export default Dashboard