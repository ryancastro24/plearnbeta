import React from 'react'
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const  Dashboard = async() => {
    const session = await getServerSession(authOptions);
    const data = await session;

  return (
    <div>
        <section>
            <h1>{data.user.name}</h1>
        </section>
    </div>
  )
}

export default Dashboard