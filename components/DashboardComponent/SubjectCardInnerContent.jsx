'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const SubjectCardInnerContent = ({subjects,role,user}) => {
  const [data, setData] = React.useState(subjects);
  const [currentSubjectIndex, setCurrentSubjectIndex] = React.useState(0); // To track the current subject's index
  const router = useRouter();

 
  
  const fetchDataAndUpdateState = async () => {
    if (currentSubjectIndex < data.length) {
      try {
        const subjectIdToFetch = data[currentSubjectIndex].id;
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
  


  console.log(data)
  return (
    <>

            {data.slice(0,4).map(val => ( 

                    
            <div onClick={() => router.push(`/dashboard/${val.id}`)} key={val.id} className='h-80 w-56 bg-[#D2F5FF] relative cursor-pointer hover:bg-[#5f7176] rounded-md p-3'>

                    {val.userActivity?.length > 0 && <div style={{top:-10,right:-5}} className='w-7 h-7 flex justify-center items-center bg-red-500 rounded-full absolute  '>
                    <span>{val.userActivity?.length}</span></div>} 

                <div className='flex flex-col items-center rounded-md overflow-hidden'>
                    <Image alt='sampleImage' src={`/DashboardAssets/img/${val.realm ? val.realm + ".png" : 'forest pixelate 0 (1).png'}`} height={160} width={200}/>

                </div>

                <div className='w-full mt-3 flex flex-col '>
                    <h1 className='flex justify-between items-center font-bold w-full text-black text-xl'>{val.subjectCode} <Image src={'/DashboardAssets/icons/circle-info-solid 5.svg'} height={15} width={15}/></h1>
                    <span className='text-black text-sm line-clamp-1 mt-2'>{val.title}</span>
                    <span className='text-black text-sm'><b>Section:</b> {val.section}</span>
            
                </div>
                
            </div>
            ))}
    
    </>
  )
}

export default SubjectCardInnerContent