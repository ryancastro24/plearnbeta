import DashboardNav from "@/components/DashboardComponent/DashboardNav"
import {getServerSession} from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"

const ContentLayout = async({children}) => {
    const session = await getServerSession(authOptions);
    const data = await session;


  return (
    <div>
        <DashboardNav {...data.user}/> 
        {children}
    </div>
  )
}

export default ContentLayout