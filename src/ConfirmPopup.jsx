import React from 'react'
import { useDispatch } from 'react-redux'
import { setConfirm } from './confirmSlice'
import { clearList } from './listSlice'

function ConfirmPopup() {
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearList());
        dispatch(setConfirm(false))
    }
  return (
    <div>
        <div className='absolute inset-0 bg-black/80 z-11 grid items-center'>
            <div className='w-4/5 bg-red-300 text-red-900 text-lg md:text-3xl text-center mx-auto p-5 pt-12 md:w-3xl'>
                <p>This action cannot be reversed.</p>
                <p>Continue to clear list?</p>
                <div className='mt-10 flex justify-between max-w-80 mx-auto md:text-xl'>
                    <button className='py-2 px-2 bg-white text-red-900 rounded-md w-30 hover:cursor-pointer hover:bg-gray-300'
                        onClick={() => dispatch(setConfirm(false))}
                    >Cancel</button>
                    <button className='py-2 px-2 bg-red-600 text-red-950 rounded-md min-w-30 hover:cursor-pointer hover:bg-red-500'
                        onClick={handleClear}
                    >Continue</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmPopup