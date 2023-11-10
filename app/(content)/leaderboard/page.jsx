import React from 'react'
import UserTable from '@/components/LeaderBoardsComponent/UserTable'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LeaderboardInnerPage from '@/components/LeaderBoardsComponent/LeaderboardInnerPage';

const Leaderboards = async() => {


  
  const session = await getServerSession(authOptions)
  return (
    <LeaderboardInnerPage idNumber={session.user.idNumber}  />
  )
}

export default Leaderboards