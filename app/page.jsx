import Image from 'next/image'
import {getServerSession} from 'next-auth'
import NavBar from '@/components/HomeComponents/NavBar'
import LoginForm from '@/components/HomeComponents/LoginForm'
import { authOptions } from './api/auth/[...nextauth]/route'
export default async function Home() {

  const session = await getServerSession(authOptions);
  console.log(session)
  return (

    <main>

      <section>
         <NavBar/>
          <div>
              <div>
                  <h1>Unleash Your Potential</h1>
                  <h2>PLay, Learn and Earn Your Way to Success</h2>
              </div>
              {/* loginForm */}
              <LoginForm/>
    
          </div>
      </section>

      <section>
        <p>{JSON.stringify(session)}</p>
      </section>
      
    </main>
   
  )
}
