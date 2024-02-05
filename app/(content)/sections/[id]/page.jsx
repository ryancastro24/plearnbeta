import React from 'react'
import AddStudents from '@/components/DashboardComponent/adminDashboard/AddStudents'
import axios from 'axios'
import ExcelGradeDownload from '@/components/DashboardComponent/adminDashboard/ExcelGradeDownload';
async function getSectionStudents(id){
  
  const res = await fetch(`http://localhost:3000/api/section/getAllStudents/${id}`,{
    next:{
      revalidate:0
    }
  });
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return res.json()
}  



const Sections = async({params}) => {

  const  studentData = await getSectionStudents(params.id);


  return (
    <div className='w-full h-screen pt-20 p-6'>


        <div className='flex justify-between items-center'>
         { studentData.users.length === 0 ?  <AddStudents sectionId={params.id}/> : <h1 className='text-2xl'>Students Enrolled</h1>}
            <ExcelGradeDownload data={studentData.users} fileName={'user_data'}/>
        </div>

      <div className='flex flex-col w-full gap-3 mt-3 h-[450px] overflow-y-auto scrollbar-hidden'>
          {studentData.users.map(val => <div className="w-full rounded bg-[#33373b] p-5" key={val.id}>
               <ul>
                  <li className='text-2xl'>
                    {val.name} <span className='text-sm'>{val.idNumber}</span>
                    <ol className='pl-3 mt-3'>
                        {val.DoneActivity.map(val => <table className='flex border'>
                  <thead>
                    <tr>
                       <th className='text-sm p-2'>{val.activity.title} - </th>
                    </tr>
                     
                  </thead>
                  <tbody>
                    <tr>
                        <td className='text-sm p-2'> <b>score:</b> {val.totalScore}/{val.activity.questions.length}</td>
                    </tr>
                  </tbody>
              </table>
              
              )}
                    </ol>
                  </li>
              </ul> 

              
            </div>)}

      </div>
        


    </div>
  )
}

export default Sections