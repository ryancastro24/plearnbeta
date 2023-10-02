import React from 'react'

const RegisterLayout = ({children,student,employee}) => {
  return (
    <div>
        {children}

        <div className='flex justify-between items-center'>
        {student}
        {employee}
        </div>
    </div>
  )
}

export default RegisterLayout