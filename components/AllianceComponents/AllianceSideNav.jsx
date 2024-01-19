
import { GiVerticalBanner,GiSwordsEmblem } from "react-icons/gi";
import Link from 'next/link';
import { IoPerson } from "react-icons/io5";
const AllianceSideNav = ({position,navigation,setNavigation}) => {
    
  return (
    <div className='w-1/5 rounded-md h-full bg-[#41454A] p-5 flex flex-col justify-between'>


        <div className='flex flex-col gap-5'> 
                <div>
                    <h2 className='text-2xl'>Alliance</h2>
                </div>

                <ul className='flex flex-col gap-3'>
                    <li onClick={() => setNavigation("myAlliance")} 
                            className={`flex items-center cursor-pointer hover:bg-orange-500 ${navigation === "myAlliance" ? "bg-orange-600 rounded" : ""} gap-2 p-2`}> <GiVerticalBanner />  My Alliance</li>
                    <li onClick={() => setNavigation("announcement")} 
                            className={`flex items-center cursor-pointer hover:bg-orange-500 ${navigation === "announcement" ? "bg-orange-600 rounded" : ""} gap-2 p-2`}> <GiSwordsEmblem />  Announcements</li>
                {position === "president" &&    <li onClick={() => setNavigation("requests")} 
                            className={`flex items-center cursor-pointer hover:bg-orange-500 ${navigation === "requests" ? "bg-orange-600 rounded" : ""} gap-2 p-2`}> <IoPerson />  Requests</li>} 
               
               
                </ul>
         </div>


        <div className='flex flex-col gap-3 w-full'>
            <h2>Top Performing Alliance</h2>
            <ol className='flex flex-col gap-3 justify-center px-5'>
                <li className='text-sm list-decimal flex items-center gap-2'><span className='text-violet-500'> <GiVerticalBanner /></span> Chorale Adveniente</li>
                <li className='text-sm list-decimal flex items-center gap-2'><span className='text-red-500'> <GiVerticalBanner /></span> Chorale Adveniente</li>
                <li className='text-sm list-decimal flex items-center gap-2'><span className='text-yellow-500'> <GiVerticalBanner /></span> Chorale Adveniente</li>
                <li className='text-sm list-decimal flex items-center gap-2'><span className='text-green-500'> <GiVerticalBanner /></span> Chorale Adveniente</li>
                <li className='text-sm list-decimal flex items-center gap-2'><span className='text-blue-500'> <GiVerticalBanner /></span> Chorale Adveniente</li>
            </ol>
        </div>

        <div>
            <Link href={"/allAlliance"} className='w-full py-3 text-lg hover:bg-orange-700 rounded bg-orange-600 flex justify-center items-center gap-2'> <GiVerticalBanner /> All Alliance</Link>
        </div>

    </div>
  )
}

export default AllianceSideNav