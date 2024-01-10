
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import RecentActivities from '@/components/DashboardComponent/RecentActivities'
import Announcement from '@/components/DashboardComponent/Announcement'
import SubjectCard from '@/components/DashboardComponent/SubjectCard'
import SubjectCardInnerContent from '@/components/DashboardComponent/SubjectCardInnerContent'
import WorldButton from '@/components/DashboardComponent/WorldButton'
import AdminDashboard from '@/components/DashboardComponent/AdminDashboard'
import SideSubjectOuterCard from '@/components/DashboardComponent/SideSubjectOuterCard'
import DashboardAnnouncement from '@/components/DashboardComponent/DashboardAnnouncement'
import SuperAdminDashboard from '@/components/DashboardComponent/SuperAdminDashboard'


const getAnnouncementData = async() => {
  const res = await fetch(`http://localhost:3000/api/superadmin/announcements`)

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}


const getLevelPass = async(id) => {
  const res = await fetch(`http://localhost:3000/api/levelpass/${id}`,{
    next:{
      revalidate:0
    }
  })

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}






const  Dashboard = async() => {
  
  const session = await getServerSession(authOptions)
  const finalData = await session;
  const announcementData = await getAnnouncementData();
  const levelPassData = await getLevelPass(session.user.id)



  

  if(finalData.user.role === 'admin'){
    return (
      <>  
       <SuperAdminDashboard {...finalData.user}/>
      </>
    )
  }


  if(finalData.user.role === 'employee'){
    return (
      <>  
       <AdminDashboard {...finalData.user}/>
      </>
    )
  }
//seperate the component for this student dashboard
  return (
    <div className='w-full h-screen pt-16 p-6'>
    
      <div className='w-full h-full p-5 flex justify-between items-center'>

            <DashboardAnnouncement announcementData={announcementData}/>
        

          <div className='w-1/5 rounded-md h-full bg-[#41454A] p-5 flex flex-col justify-between'>



      
            <RecentActivities id={session.user.id} />

            <SideSubjectOuterCard id={finalData.user.id} />

            <WorldButton/>

          </div>

          <div  className='w-3/4 rounded-md h-full  flex flex-col justify-between pb-7'>

            <Announcement userLevel={session.user.level} levelPassData={levelPassData.LevelPass.levelPassItem} userId={session.user.id}/>

            <div className='w-full h-80 rounded-md flex gap-4 items-center '>

          
               <SubjectCard id={session.user.id} />
            </div>
          
          </div>

      </div>

    
    </div>
  )
}

export default Dashboard