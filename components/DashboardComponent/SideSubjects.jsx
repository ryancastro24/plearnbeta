'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const SideSubjects = ({sections,user}) => {
  const [data, setData] = React.useState(sections);
  const [fetchData, setFetchData] = React.useState("");
  const [currentSubjectIndex, setCurrentSubjectIndex] = React.useState(0); // To track the current subject's index
  const router = useRouter();

 
  
  const fetchDataAndUpdateState = async () => {
    if (currentSubjectIndex < data.length) {
      try {
        const subjectIdToFetch = data[currentSubjectIndex].subject.id;
        const requestOptions = {
          method: 'GET',
          headers: {
            'user_id': user,
            // Add more custom headers as needed
          },
        };
        const res = await fetch(`http://localhost:3000/api/user_activity/${subjectIdToFetch}`,requestOptions);
        const resData = await res.json();
  
        setData((prevData) =>
          prevData.map((val, index) => {
            if (index === currentSubjectIndex) {
              return {
                ...val,
                userActivity: resData.filter(val => val.isDone === false),
              };
            }
            return val;
          })
        );
  
        // Update the counter to move to the next subject
        setCurrentSubjectIndex((prevIndex) => prevIndex + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  
  useEffect(() => {
    fetchDataAndUpdateState();
  }, [currentSubjectIndex]); // Run the effect whenever the current subject index changes
  


  return (
    <div className='w-full mt-2 flex justify-between flex-col gap-4'>
        <h2 className='font-bold'>Other Realms</h2>


        <div className='flex flex-col gap-2'>
            {data.slice(4,7).map(val => (
                <div onClick={() => router.push(`/dashboard/${val.subject.id}`)} key={val.id} className='bg-[#D2F5FF] cursor-pointer relative hover:bg-[#798f95] h-14 w-full rounded-sm flex p-2 items-center gap-3'>
                    
                    {val.userActivity?.length > 0 && <div style={{top:-5,right:-5}} className='w-6 h-6 flex justify-center items-center bg-red-500 rounded-full absolute  '>
                    <span className='text-sm'>{val.userActivity?.length}</span></div>} 
                  <div>
                      <Image src={`/DashboardAssets/img/${val.realm ? val.realm + ".png" : 'forest pixelate 0 (1).png'}`} height={45} width={45}/>
                  </div>

                  <div>
                  <span className="text-sm text-black">{val.subject.subjectCode}</span>
                  <span className="text-sm text-black line-clamp-1">{val.subject.title}</span>
                  </div>
                 
                </div>
            ))} 
        </div>
        

    </div>
  )
}

export default SideSubjects