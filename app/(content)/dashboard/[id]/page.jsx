
import React from 'react'
import Image from 'next/image'
import Notes from '@/components/DashboardComponent/Notes';
import Backbutton from '@/components/DashboardComponent/Backbutton';
async function getData(id){
    const res = await fetch(`http://localhost:3000/api/subject/${id}`,{
        next:{revalidate:0}
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}  
const Subject = async ({params}) => {

    const data = await getData(params.id);
    console.log(data.realm)
    let bg = 'bg-';
  let backgroundImage =  bg.concat(data.realm)
  console.log(backgroundImage)

  return ( 
   <>
   <div className={`w-full h-screen absolute top-0 bg-forest z-20 bg-cover`}>
        <Backbutton/>
        <div className={`w-full bg-forest  h-2/5 bg-cover relative`}>

   
            <div className='w-full bg-[#161a1e99] p-10 h-full   '>
                <div className='flex flex-col gap-3 mt-8 ml-8'>
                    <span className='text-2xl font-bold'>{data.title}</span>
                    <span>{data.subjectCode}</span>
                    <span>Section: {data.section}</span>
                </div>

                <div className='absolute bottom-0 right-10 '>
                    <Image alt='bird' src={'/DashboardAssets/img/bird.png'} height={300} width={300}/>
                </div>
            </div>

        </div>

        <div className='w-full bg-[#41454A] p-10 rounded-t-3xl h-3/5 relative'>


            <div className='w-full  h-full'>
                <div className='flex flex-col gap-3 ml-8'>
                    <span className='text-2xl font-bold text-[#E58E27]'>Welcome to the Jungle</span>
                    <span>Mr. Mark Phil Pacot</span>
                </div>

                <div className='flex flex-col gap-1 ml-8 mt-8 w-1/2'>
                    <span className='text-xl font-bold]'>About this adventure</span>
                    <p className='text-sm font-extralight'>Fundamentals of Programming is an introductory course that teaches the basics of programming languages, data structures, and control flow. It provides essential skills for creating software and solving problems through coding.</p>
                </div>

                
                <div className='flex gap-5 ml-8 mt-10 w-1/2'>


                    <div className=' flex h-16 w-60 rounded p-1 relative bg-[#D2F5FF] cursor-pointer hover:bg-[#879fa5]'>
                        <div className=' h-full w-3/5 rounded flex flex-col p-2 '>
                        
                                <span className='text-black flex gap-2 font-semibold'><Image alt='quest' 
                                src={'/DashboardAssets/icons/quest.svg'} 
                                height={15}
                                width={15}
                                />
                                Quests
                                </span>

                                <span className='text-black text-xs'>
                                    Available: <b>{data.activityId.length}</b>
                                </span>
                            
                            
                        </div> 
                        <div className=' h-full w-2/5 rounded bg-[#E58E27] flex items-center justify-center '>
                            {data.activityId.length > 0 ? <div>
                                <span className='text-md font-thin mr-2'>0/{data.activityId.length}</span>
                                <span className='text-xs '>Done</span>
                            </div>
                            :
                            <span className='text-xs font-extralight'>No Available</span>
                        }
                    
                        </div> 
                    </div>




                    
                    <div className=' flex h-16 w-60 rounded p-1 relative bg-[#D2F5FF] cursor-pointer hover:bg-[#879fa5]'>
                        <div className=' h-full w-3/5 rounded flex flex-col p-2 '>
                        
                                <span className='text-black flex gap-2 font-semibold'><Image alt='quest' 
                                src={'/DashboardAssets/icons/lessons.svg'} 
                                height={15}
                                width={15}
                                />
                                Lessons
                                </span>

                                <span className='text-black text-xs'>
                                    Available: <b>{data.lessonId.length}</b>
                                </span>
                            
                            
                        </div> 
                        <div className=' h-full w-2/5 rounded bg-[#E58E27] flex items-center justify-center '>

                            {/* add a lessson data to change this part */}
                            {data.lessonId.length > 0 ? <div>
                                <span className='text-md font-thin mr-2'>0/{data.lessonId.length}</span>
                                <span className='text-xs '>Done</span>
                            </div>
                            :
                            <span className='text-xs font-extralight'>No Available</span>
                        }
                    
                        </div> 
                    </div>

                  
                </div>

            </div>


            <div className='h-full w-1/2  absolute flex flex-col gap-2 items-end justify-end py-10 px-16 top-0 right-0'>
                
                <div className=' bg-[#36393E] h-44 w-96 rounded-md p-5'>
                    <span className='flex gap-1 font-bold'>Announcements <Image
                     height={15} width={15} alt='annoucement' src={'/DashboardAssets/icons/announcement.svg'}/>
                     </span>

                     <p className='text-sm font-extralight mt-3 text-justify'>Join us for a programming exercise on September 08, 2023 at CCIS Building. Whether you're a beginner or an experienced coder, this is a great opportunity to practice your skills and have some fun!</p>
                </div>

                <Notes/>
            </div>
        </div>
   </div>
   </>
  )
}

export default Subject