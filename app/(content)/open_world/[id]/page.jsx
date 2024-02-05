import React from 'react'
import Backbutton from '@/components/DashboardComponent/Backbutton'
import { getSampleOpenworldTopics } from '@/libs/db'
const OpenworldSpecific = async({params}) => {

    const data = await getSampleOpenworldTopics(params.id);

    
  return (
    <div className='w-full h-screen px-0 absolute inset-0 bg-[#161A1E] z-[1000]'>
        <Backbutton/>

        <div>
            <div style={{backgroundImage:`url("/DashboardAssets/subject_background/${data[0].image}.png")`,backgroundSize:"cover"}}  className='w-full h-72 relative '>
                <div className='w-full h-full absolute inset-0 bg-[#000000ad] flex-col gap-3 flex justify-center items-center'>
                    <h1 className='text-4xl font-bold'>Welcome to {data[0].title}</h1>
                    <h2>Learn new topics and earn points</h2>
                    <button className='px-3 mt-2 py-2 rounded bg-orange-500 hover:bg-orange-600'>Enter World</button>
                </div>

            </div>

            
            <div className=' w-full p-10 flex gap-5 flex-col'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl'>About the Topic</h2>
                        <p className='text-sm indent-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare aenean euismod. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Congue nisi vitae suscipit tellus mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Arcu bibendum at varius vel pharetra vel turpis nunc. Luctus venenatis lectus magna fringilla urna porttitor. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Est lorem ipsum dolor sit amet consectetur. A arcu cursus vitae congue. Arcu ac tortor dignissim convallis aenean et tortor.</p>
                        
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h2 className="text-xl">Rewards Available</h2>
                        <div className='flex gap-3 items-center'>
                           <span className='px-3 py-2 rounded bg-[#41454A]'>+100000 pts total</span>
                           <span className='px-3 py-2 rounded bg-[#41454A]'>Certificate</span>
                           <span className='px-3 py-2 rounded bg-blue-500'>Rare Item 1</span>
                           <span className='px-3 py-2 rounded bg-blue-500'>Rare Item 2</span>
                           <span className='px-3 py-2 rounded bg-violet-600'>Legendary Item 1</span>
                        </div>
                    </div>

                </div>
            
        </div>
    </div>
  )
}

export default OpenworldSpecific