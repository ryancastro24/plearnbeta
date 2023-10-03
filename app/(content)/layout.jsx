import DashboardNav from "@/components/DashboardComponent/DashboardNav"
import {getServerSession} from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"
import Provider from "@/context/Provider"
const ContentLayout = async({children}) => {
    const session = await getServerSession(authOptions);
    const data = await session;

// uncommnet dashboard component after adding students
  return (
    <div>
        <DashboardNav {...data.user}/> 
      <Provider>
        {children}
      </Provider>
    </div>
  )
}

export default ContentLayout