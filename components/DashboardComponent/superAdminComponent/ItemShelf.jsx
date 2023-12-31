'use client'

import {useEffect,useState} from 'react'
import ItemContainer from './ItemContainer';
import axios from 'axios';
const ItemShelf = ({items,setItemData}) => {

   

  return (
    <div className='w-full h-[430px] flex flex-col justify-between gap-4 '>

       
        {items.map(val => <ItemContainer setItemData={setItemData} {...val}/>) }
    </div>
  )
}

export default ItemShelf