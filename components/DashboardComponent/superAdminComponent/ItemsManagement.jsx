'use client'
import {useState,useEffect} from 'react'
import ItemsForm from './ItemsForm'
import ItemShelf from './ItemShelf'
import axios from 'axios'
const ItemsManagement = () => {

  const [items,setItems] = useState([]);
  const [searchData,setSearchData] = useState("");
  const [itemData,setItemData] = useState({
    id:"",
    name:"",
    description:"",
    price:"",
    image:null
})
const [toUpdate,setToUpdate] = useState(false);
   
  useEffect(() => {
      const itemsGetter = async () => {
        try {
          const response = await axios.get('/api/superadmin/items');
          const data = response.data;
          setItems(data)
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
          throw error; // Re-throw the error to propagate it further if needed
        }
      };
      
      // You can call the function like this:
      itemsGetter();
      
    
    },[items]);

    const finalItems = items.filter(val => val.name.toLocaleLowerCase().startsWith(searchData.toLocaleLowerCase()))
  return (
    <div className='w-full h-ful p-4'>

      <div className='w-full h-full flex justify-between items-center'>
          
          <div className='w-1/3 h-full pr-3'>
              <ItemsForm itemData={itemData}  setItemData={setItemData}/>
          </div>

          <div className='w-2/3'>


                <div className='flex justify-end items-center'>
                    <input value={searchData} onChange={(e) => setSearchData(e.target.value)} className='w-[300px] px-3 py-2 rounded outline-none text-black' placeholder='search...' type="search" />
                </div>


              <div className='overflow-y-auto h-full w-full mt-4'>
                <ItemShelf setItemData={setItemData}  items={finalItems}/>

              </div>
           
          </div>
        
      </div>
        
    </div>
  )
}

export default ItemsManagement