'use client'
import {useState,useEffect} from 'react'
import AllianceForm from './AllianceForm'
import AllianceShelf from './AllianceShelf'
import axios from 'axios'
const Alliances = () => {
  const [allianceData,setAllianceData] = useState({
      name:"",
      image:null
  });


  const [alliance,setAlliance] = useState([]);


     
  useEffect(() => {
    const allianceGetter = async () => {
      try {
        const response = await axios.get('/api/superadmin/alliance');
        const data = response.data;
        setAlliance(data)
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        throw error; // Re-throw the error to propagate it further if needed
      }
    };
    
    // You can call the function like this:
    allianceGetter();
    
  
  },[alliance]);

  return (
    <div className='w-full h-full p-4 flex justify-between items-center'>

      <div className='w-1/3 h-full'>
        <AllianceForm allianceData={allianceData} setAllianceData={setAllianceData}/>  
      </div> 

      <div className='w-2/3 overflow-y-auto scrollbar-hidden h-full pl-7'>
      <AllianceShelf alliance={alliance}/>
      </div>
       
    </div>

  )
}

export default Alliances 