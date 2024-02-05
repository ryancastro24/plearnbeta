'use client'
import { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

// Define the arrayToObject function
function arrayToObject(dataArray) {
  const header = dataArray[0];
  const result = [];

  for (let i = 1; i < dataArray.length; i++) {
    const obj = {};
    for (let j = 0; j < header.length; j++) {
      obj[header[j]] = dataArray[i][j];
    }
    result.push(obj);
  }

  return result;
}





const AddStudents = ({sectionId}) => {


  const [patchedData,setPatchedData] = useState({
    sectionId,
    studentData:null
    
  })

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const res = axios.post('/api/subject/connectStudent',patchedData)
    .then(() => alert("data has been updated"))
    .then(()=> window.location.reload())
    .catch((err) => alert(err));
    console.log(res)
  }
 
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });


      const dataObject = arrayToObject(data);

      const idNumberOnlyArray = dataObject.map(item => ({ idNumber: item.idNumber }));
    
      console.log( idNumberOnlyArray);
      setPatchedData({...patchedData,studentData:idNumberOnlyArray});
    } catch (error) {
      console.error('Error parsing Excel file:', error);
    }
  };


  return (
    <div>
        <div>

        <form className='flex flex-col gap-3 ' onSubmit={handleSubmit}>
      
          <input required type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
          <div>
              <button type='submit' className='px-3 py-2 bg-[#E58E27] rounded'>add students</button>
          </div>
        </form>
        </div>
       
    </div>
  )
 
}

export default AddStudents