import { useEffect, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { setInputState } from './inputSlice';
import { addItem } from './listSlice';



function InputForm() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    const itemList = useSelector((state) => state.list);
    const handleAddClick = () => {
        const item = {
            id: itemList.length > 0 ? itemList[itemList.length - 1].id + 1 : 1,
            title: title,
            quantity: quantity,
            bought: false
        }
        if (item.title && item.quantity) {
            dispatch(addItem(item))
        }
    setSuccessMsg(true)
    }

    useEffect(() => {
        setTimeout(() => {
           setSuccessMsg(false) 
        }, 3500);

    }, [itemList])
  return (
    <div>
        <div className='absolute inset-0 bg-black/90 z-10 grid items-center'>
            <div className='bg-amber-700 mx-5 h-[40vh] md:w-250 mx-auto relative'>
                <h1 className='text-center text-2xl mt-8 mb-3'>Enter Item</h1>
                <div className='w-4/5 mx-auto max-w-80'>
                    <label htmlFor="title">Enter Item Title:</label>
                    <input type="text" name="title" id="title" required value={title}
                    className='w-full px-2 h-8 mb-2 rounded-md bg-amber-50'
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="quantity">Enter Item Quantity:</label>
                    <input type="text" name="quantity" id="quantity" required value={quantity}
                    className='w-full px-2 h-8 mb-2 rounded-md bg-amber-50'
                    onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button type='submit' className='w-full py-2 my-2 text-white bg-blue-950 rounded-md hover:cursor-pointer hover:bg-blue-800 duration-500'
                    onClick={() => {
                        handleAddClick();
                        setTitle('');
                        setQuantity('')
                    }}
                    >
                        Add
                    </button>
                </div>
                <FaXmark className='absolute right-5 top-5 text-xl hover:cursor-pointer hover:scale-120 duration-200'
                onClick={() => dispatch(setInputState(false))}
                />
            </div>
            <div className='w-full absolute bottom-8'>
                {successMsg && <div className='bg-green-300 text-green-900 p-6 mx-auto max-w-2xl'>
                    <p>Item Added Successfully!</p>
                    <p>Use the 'X' button above to return to list.</p>
                    <div className='w-full h-1 absolute bottom-0 translate-y-[100%] transition-transform duration-[2s] bg-green-950'></div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default InputForm