'use client'

import {useEffect,useState} from 'react'
import ItemContainer from './ItemContainer';

const ItemShelf = ({items,setItemData,setToUpdate}) => {

   

  return (
    <div className='w-full h-[430px] flex flex-col justify-between gap-4 '>

       
        {items.map(val => <ItemContainer setToUpdate={setToUpdate} setItemData={setItemData} {...val}/>) }
    </div>
  )
}

export default ItemShelf