
import { GiVerticalBanner } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';
import AllianceRequestContainer from "./AllianceRequestContainer";
import AllianceMembersTable from "./AllianceMembersTable";
const AllianceContent = async({allianceData,allianceId, navigation,allianceRequests}) => {
  
  return (
    <div  className='w-3/4 rounded-md h-full  flex flex-col p-5 bg-[#41454A]'>
          

          {allianceId === null ? <div className='flex justify-center items-center w-full h-full'>

              <div className='flex flex-col justify-center items-center gap-5'>
               
                <Image src={'/AllianceAssets/sad.png'} width={500} height={500} alt='sad'/>
                <h2>You don't have alliance yet!</h2>
                <Link href={'/allAlliance'} className='px-3 py-2 font-bold bg-orange-600 rounded'>Join Now!</Link>
              </div>

          </div> 
          
          
          
          :
         
            <div>
             
              <div className="w-full flex justify-between items-center mb-3">
                <h1 className='text-xl flex items-center gap-2'><GiVerticalBanner /> {allianceData.alliance_name}</h1>
                <button className="px-3 py-2 rounded bg-red-500 text-xs">Leave Alliance</button>
              </div>
              <hr className='opacity-25'/>

             {navigation === "myAlliance" && <AllianceMembersTable allianceMembers={allianceData.members}/>} 



             {navigation === "announcement" && <div className="w-full h-full bg-red-500"></div>} 





             {navigation === "requests" && <AllianceRequestContainer allianceRequests={allianceRequests}  />} 
            </div>
          }
        </div>
  )
}

export default AllianceContent