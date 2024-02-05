import { FaArrowLeft } from "react-icons/fa";
import React from 'react'
import Link from 'next/link'
const BackButton = () => {
  return (
    <div>
        <Link href={'/dashboard'} className="flex justify-center items-center gap-2  hover:gap-3"> <FaArrowLeft />BACK</Link>
    </div>
  )
}

export default BackButton