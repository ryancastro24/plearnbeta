import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '@/components/GettingStartedButton/BackButton'
const GettingStarted = () => {
  return (
    <div className='w-full scroll-smooth  absolute inset-0 bg-[#161A1E] pb-10  z-[50]'>

        <div className='w-full h-96 py-5 relative'>
          <div className='absolute z-[2000] top-10 left-10'>
            <BackButton/>
          </div>
          <Image className='object-fit'  src={'/HomePageAssets/pixel wallpaper.jpg'} fill/>
        </div>

        <div className='flex flex-col p-6 py-20'>
          <h1 className='text-6xl text-center font-bold'>Welcome To Plearn</h1>

          <div className='mt-6 px-10'>
            <p className='text-center text-sm leading-loose font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium non iure cupiditate itaque excepturi neque consectetur. Suscipit error obcaecati excepturi ipsa modi sit. Eaque eius magni error corrupti numquam ab illo animi odio excepturi quasi, quas laboriosam, dolore mollitia qui inventore atque molestias in illum hic beatae. Dolorem cum neque praesentium ex? Eum natus dolores facilis vero qui labore debitis odio hic amet iusto aut, commodi distinctio quisquam perspiciatis mollitia? Voluptatum tempore eius expedita unde ad quos facilis eos odio placeat quasi minima nam ea eveniet, accusantium, aliquam labore! Perspiciatis sapiente suscipit pariatur voluptatum doloribus quae nostrum eaque esse quis.</p>
           
            <div className='w-full flex justify-center items-center gap-5 mt-7'>
              <button className='px-3 py-2 hover:bg-orange-700 rounded bg-orange-500'>Explore</button>
              <Link href={"#features"} className='px-3 py-2 hover:bg-orange-600 rounded bg-transparent border border-orange-600 border-[0.2]'>Features</Link>
              <Link href={"#howTo"} className='px-3 py-2 hover:bg-orange-600 rounded bg-transparent border border-orange-600 border-[0.2]'>How To</Link>
             
            </div>
          </div>
        </div>

          <div className='w-full flex justify-center items-center'>
            <hr className='w-[800px] text-center h-[0.2px] opacity-25  '/>
          </div>


        {/* feautures */}
        <div id='features' className='w-full p-6 flex flex-col gap-5 justify-center items-center  mt-7'>

              <h2 className='text-2xl font-bold'>Features</h2>
                <div className='flex justify-center mt-10 items-center gap-5 h-96 w-full'>
                    <div className='w-96 h-96 rounded bg-[#D9D9D9]'></div>
                    <div className='flex flex-col gap-4 w-[600px] h-full py-5'>
                      <h2 className='text-xl'>Sample Feature 1</h2>
                      <p className='text-justify leading-loose text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, dolorum dolor reprehenderit doloremque quidem optio dignissimos autem vero error quaerat nostrum illum ad unde dolores reiciendis ratione magni suscipit repudiandae, alias vitae minus laborum cupiditate. Sunt mollitia voluptates iure cumque alias nostrum id esse obcaecati neque amet magni dolorum nisi error, iusto, expedita deserunt modi possimus. Animi quos perspiciatis reiciendis harum, optio incidunt. Voluptatibus dignissimos doloribus nulla iure aspernatur ea dolor illum pariatur recusandae aliquam, qui consectetur assumenda voluptates quaerat quo deleniti reprehenderit quod sed odit tempore magni deserunt id provident. Eum adipisci dolorum placeat repellat quisquam ea possimus?</p>
                    </div>
                </div>
               
               <div className='flex justify-center mt-24 items-center gap-5 h-96 w-full'>
                    
                    <div className='flex flex-col gap-4 w-[600px] h-full py-5'>
                      <h2 className='text-xl text-right'>Sample Feature 2</h2>
                      <p className='text-justify leading-loose text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, dolorum dolor reprehenderit doloremque quidem optio dignissimos autem vero error quaerat nostrum illum ad unde dolores reiciendis ratione magni suscipit repudiandae, alias vitae minus laborum cupiditate. Sunt mollitia voluptates iure cumque alias nostrum id esse obcaecati neque amet magni dolorum nisi error, iusto, expedita deserunt modi possimus. Animi quos perspiciatis reiciendis harum, optio incidunt. Voluptatibus dignissimos doloribus nulla iure aspernatur ea dolor illum pariatur recusandae aliquam, qui consectetur assumenda voluptates quaerat quo deleniti reprehenderit quod sed odit tempore magni deserunt id provident. Eum adipisci dolorum placeat repellat quisquam ea possimus?</p>
                    </div>
                    <div className='w-96 h-96 rounded bg-[#D9D9D9]'></div>
                </div>
        </div>




        {/* how to */}
      

        <div id='howTo' className='mt-24 px-16 w-full flex flex-col gap-7 justify-center items-center pb-10'>
          
            <h2 className='text-2xl font-bold'>How it Works</h2>

            <div className='flex flex-col gap-10'>
              <p className='text-sm text-justify leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur possimus laboriosam quos veritatis illum nemo iste reiciendis, nihil, ipsa eveniet quas illo unde porro consectetur blanditiis soluta sapiente! Cum quos ipsa, fugiat odit placeat a similique dolore alias ipsam tempore voluptates ut officiis voluptatem saepe omnis voluptas iure nam nobis est aperiam! Consequuntur modi doloribus dolores quo assumenda mollitia rerum veritatis dolore quae vel. Aliquam iure aperiam velit ducimus numquam nobis aspernatur sed! Neque quisquam dolorem, ullam ratione tempora corrupti aspernatur laboriosam! Natus voluptatem illo libero magnam sequi quia rem ex nemo praesentium inventore? Et ea facilis modi dolorum.</p>
              <div className='w-full h-96 bg-[#D9D9D9]'></div>
            </div>


            <div className='flex flex-col gap-10 mt-5'>
              <p className='text-sm text-justify leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur possimus laboriosam quos veritatis illum nemo iste reiciendis, nihil, ipsa eveniet quas illo unde porro consectetur blanditiis soluta sapiente! Cum quos ipsa, fugiat odit placeat a similique dolore alias ipsam tempore voluptates ut officiis voluptatem saepe omnis voluptas iure nam nobis est aperiam! Consequuntur modi doloribus dolores quo assumenda mollitia rerum veritatis dolore quae vel. Aliquam iure aperiam velit ducimus numquam nobis aspernatur sed! Neque quisquam dolorem, ullam ratione tempora corrupti aspernatur laboriosam! Natus voluptatem illo libero magnam sequi quia rem ex nemo praesentium inventore? Et ea facilis modi dolorum.</p>
              <div className='w-full h-96 bg-[#D9D9D9]'></div>
            </div>
          
        </div>

    </div>
  )
}

export default GettingStarted