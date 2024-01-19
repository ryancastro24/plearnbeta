'use client'
import {useState} from 'react'
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import { IoMdArrowRoundBack } from "react-icons/io";
import { sampleAlliances } from '@/libs/testing';
import AllianceContainer from '@/components/AllianceComponents/AllianceContainer';
const AllianceOuterContainer = ({data,userId}) => {
    const [alliance,setAlliance] = useState(data);
    const [searchData,setSearchData] = useState("");

    const finalAlliances = alliance.filter(val => val.alliance_name.toLocaleLowerCase().startsWith(searchData.toLocaleLowerCase()))
  return (
    <div className='w-full h-full p-6 absolute inset-0 z-50 bg-[#161A1E]'>
    <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
            <Link href={'/alliance'} className='flex text-sm hover:gap-3 items-center gap-2'><IoMdArrowRoundBack /> Back</Link>
            <h2 className='text-2xl font-bold'>Pick Your Alliance NOW</h2>
        </div>

        <div className='flex items-center h-10'>
            <div className='w-10 rounded-s h-full bg-slate-200 flex justify-center items-center text-black border-none'>
                <IoSearch />
            </div>
            <input value={searchData} onChange={(e) => setSearchData(e.target.value)} type="search" placeholder='search' className='w-[400px]  rounded-e text-black border-none h-full outline-none px-3 ' />
           
        </div>
    </div>

    <div className='flex justify-between items-center mt-6 gap-7 flex-wrap'>
        {finalAlliances.map(val => <AllianceContainer userId={userId} {...val}/>)}
    </div>
</div>
  )
}

export default AllianceOuterContainer