'use client'


import AllianceContainer from './AllianceContainer';
const AllianceShelf = ({alliance}) => {

   

  return (
    <div className='w-full h-[430px] flex flex-col justify-between gap-4 '>

       {alliance.map(val => <AllianceContainer key={val.id} {...val}/> )}
    
    </div>
  )
}

export default AllianceShelf