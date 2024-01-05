'use client';
import React from 'react';
import * as XLSX from 'xlsx';

const ExcelGradeDownload = ({ data, fileName }) => {
  const allActivityTitles = data.reduce((acc, user) => {
    user.DoneActivity.forEach((activity) => {
      if (!acc.includes(activity.activity.title)) {
        acc.push(activity.activity.title);
      }
    });
    return acc;
  }, []);

  const headers = ['Name', 'ID Number', ...allActivityTitles];

  const handleDownload = () => {
    const worksheetData = data.map((user) => {
      const rowData = {
        'Name': user.name,
        'ID Number': user.idNumber,
      };
      user.DoneActivity.forEach((activity) => {
        rowData[activity.activity.title] = activity.totalScore;
      });
      return rowData;
    });

    const worksheet = XLSX.utils.json_to_sheet(worksheetData, {
      header: headers,
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName + '.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button className='px-3 py-2 rounded bg-orange-500' onClick={handleDownload}>
      Download Grades
    </button>
  );
};

export default ExcelGradeDownload;
