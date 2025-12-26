import React, { useState } from 'react'
import { FaCheck, FaDeleteLeft, FaPlus, FaXmark } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { handleAddItem, handleBought, handleClearList, handleDeleteItem } from './handleFunction';
import { clearList, deleteItems, setBoughtTrue, addItem } from "./listSlice";

function App() {
  const itemList = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleDeleteItem = (selectedId) => {
      dispatch(deleteItems(selectedId))
  };
  
  const handleAddItem = (item) => {
  };
  const handleClearList = () => {
      dispatch(clearList())
  };
  const handleBought = (selectedId) => {
      dispatch(setBoughtTrue(selectedId))
  };

  const [selectedId, setSelectedId] = useState([])
  console.log(selectedId)
  console.log(itemList)

  return (
    <div>
      <div className='max-w-4xl mx-auto'>
        <div className='mt-20'>
          <h1 className='text-4xl text-center font-serif mb-2'>Items List</h1>
        </div>
        {selectedId.length > 0 && <div className=' w-fit mx-auto'>
          <button className='py-1 px-2 bg-red-500 m-1 rounded-sm hover:cursor-pointer'
          onClick={() => handleDeleteItem(selectedId)}
          >
            <FaDeleteLeft className='inline-block mr-2'/>
            delete
          </button>
          <button className='py-1 px-2 bg-green-500 m-1 rounded-sm hover:cursor-pointer'
          onClick={() => handleBought(selectedId)}>
            <FaCheck className='inline-block mr-2'/>
            Mark as Bought
          </button>
        </div>}
        <div className='mx-5 h-[50vh] overflow-scroll mb-10 mt-3'>
          <div className='grid grid-cols-[1fr_4fr_4fr] text-2xl sticky top-0 bg-amber-700 py-2'>
              <span></span>
              <span>Item</span>
              <span>Quantity</span>
          </div>
          <div className=''>
            {itemList.length > 0 && itemList.map((item) => (
            <div key={item.id}>
              <div className={`grid grid-cols-[1fr_4fr_4fr] py-3 space-y-4 text-xl 
                ${item.bought ? "bg-green- line-through" : ''}`}>
                <input type="checkbox" name="" id="" 
                checked={selectedId.includes(item.id)}
                onChange={() => {
                  if (!selectedId.includes(item.id)) {
                    setSelectedId([...selectedId, item.id])
                  }
                }}
                
                />
                <span className='px-2'>{item.title}</span>
                <span className='px-2'>{item.quantity}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='flex justify-around pb-10'>
          <button className='py-2 px-4 text-xl border border-dark rounded-md'
          onClick={() => handleAddItem()}
          >
            <FaPlus className='inline-block mr-2'/>
            Add Item
          </button>
          <button className='py-2 px-4 text-xl bg-red-700 rounded-md text-white'
          onClick={() => handleClearList()}>
            <FaXmark className='inline-block mr-2'/>
            Clear List
          </button>
        </div>
      </div>
    </div>
  )
}

export default App