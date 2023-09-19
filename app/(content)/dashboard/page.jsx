
import DashboardNav from '@/components/DashboardComponent/DashboardNav'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import RecentActivities from '@/components/DashboardComponent/RecentActivities'
import Announcement from '@/components/DashboardComponent/Announcement'
import SubjectCard from '@/components/DashboardComponent/SubjectCard'
import SideSubjects from '@/components/DashboardComponent/SideSubjects'
import WorldButton from '@/components/DashboardComponent/WorldButton'
const  Dashboard = async() => {
  
  const session = await getServerSession(authOptions)
  const finalData = await session;


  console.log(finalData)

  return (
    <div className='w-full h-screen pt-16 p-6'>
    
      <div className='w-full h-full p-5 flex justify-between items-center'>

          <div className='w-1/5 rounded-md h-full bg-[#41454A] p-5 flex flex-col justify-between'>

            <RecentActivities/>
            <SideSubjects subjects={finalData.user.subjects}/>

            <WorldButton/>

          </div>

          <div  className='w-3/4 rounded-md h-full  flex flex-col justify-between pb-7'>

            <Announcement/>
            <SubjectCard subjects={finalData.user.subjects}/>
            
          
          </div>

      </div>

    
    </div>
  )
}

export default Dashboard