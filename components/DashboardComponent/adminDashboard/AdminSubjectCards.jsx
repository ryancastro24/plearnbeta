

import AdminInnerSubjectCard from './AdminInnerSubjectCard'
const getData = async(id) => {
    const res = await fetch(`http://localhost:3000/api/userSubject/adminSubject/${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json()
}
const AdminSubjectCard = async({id}) => {
  
    const data = await getData(id)
   

  return (
    <>
        <AdminInnerSubjectCard {...data}/>
       
    </>
  )
}

export default AdminSubjectCard