
import { getServerSession } from "next-auth";
import { getAlliances } from "@/libs/db";
import AllianceOuterContainer from "@/components/AllianceComponents/AllianceOuterContainer";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const AllAlliance = async() => {

        const alliance =  await getAlliances();

        const session = await getServerSession(authOptions);
       

    
  return (
   <>
    <AllianceOuterContainer userId={session.user.id} data={alliance}/>
   </>
  )
}

export default AllAlliance