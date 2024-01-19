import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AllianceMainContainer from "@/components/AllianceComponents/AllianceMainContainer";
import { getSpecificAlliance, getSpecificAllianceRequest} from "@/libs/db";

const Alliance = async() => {

  const session  =  await getServerSession(authOptions);
  const allianceData = await getSpecificAlliance(session.user.allianceId);
  const allianceRequests = await getSpecificAllianceRequest(session.user.allianceId)
  return (
  <div className='w-full h-screen pt-16 p-6'>
    
    

        <AllianceMainContainer  allianceRequests={allianceRequests} allianceData={allianceData} allianceId={session.user.allianceId}  position={session.user.alliancePosition}/>
       
       

  
  </div>
  )
};

export default Alliance;
