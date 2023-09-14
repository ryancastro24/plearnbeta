import Image from 'next/image'
import NavBar from '@/components/HomeComponents/NavBar'
import LoginForm from '@/components/HomeComponents/LoginForm'
import styles from  '@/styles/HomepageStyles/Homepage.module.css'

export default async function Home() {

  
  
  return (

    <main>

      <section className={styles.section1} >

      <div className={styles.blackcover}>
          <NavBar/>
            <div className={styles.innerContent}>
                <div className={styles.leftContent}>
                    <h1 className={styles.header1}>Unleash Your Potential</h1>
                    <h2  className={styles.header2}>PLay, Learn and Earn Your Way to Success</h2>
                </div>
                {/* loginForm */}
                <LoginForm/>
      
            </div>

          </div>
      </section>

    
      
    </main>
   
  )
}
