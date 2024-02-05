export const getSubjectData = async(id) => {
    const res = await fetch(`http://localhost:3000/api/userSubject/${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json()
}





export const getAlliances = async() => {
  const res = await fetch(`http://localhost:3000/api/superadmin/alliance`,{
    next:{
      revalidate:0
    }
  })

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}





export const getSpecificAlliance = async(id) => {
  const res = await fetch(`http://localhost:3000/api/superadmin/alliance/${id}`,{
    next:{
      revalidate:0
    }
  })

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}




export const getSpecificAllianceRequest = async(id) => {
  const res = await fetch(`http://localhost:3000/api/allianceRequests/${id}`,{
    next:{
      revalidate:0
    }
  })

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}




export const getSampleOpenworldTopics = async(id) => {
  const res = await fetch(`http://localhost:3000/api/openworld/${id}`,{
    next:{
      revalidate:0
    }
  })

  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  return res.json()
}