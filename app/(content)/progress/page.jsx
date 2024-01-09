'use client'
import {useState} from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from '@/components/UserProfileComponents/DragItem';

import Image from 'next/image';
const Progress = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const handleDrop = (item) => {
    // Add the dropped item to the inventory
    setInventoryItems((prevItems) => [...prevItems, item]);
  };


  return (

    <DndProvider backend={HTML5Backend}>
    <div className='w-full h-full p-10 pt-20'>
       <DragItem />
     
    </div>
    </DndProvider>
  )
}

export default Progress