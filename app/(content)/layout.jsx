import DashboardNav from "@/components/DashboardComponent/DashboardNav"
import {getServerSession} from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"
import Provider from "@/context/Provider"

const getData = async(id) =>{
  const res = await fetch(`http://localhost:3000/api/cart_items/${id}`,{
      next:{
          revalidate:0
      }
  })

  return res.json()
}
const ContentLayout = async({children}) => {
    const session = await getServerSession(authOptions);
    const data = await session;
    const cartItemsData = await getData(session.user.id)

// uncommnet dashboard component after adding students
  return (
    <div>
        <DashboardNav  cartItems={cartItemsData} {...data.user}/> 
      <Provider>
        {children}
      </Provider>
    </div>
  )
}

export default ContentLayout