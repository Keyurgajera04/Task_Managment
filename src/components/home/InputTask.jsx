import React from 'react'
import { RxCross2 } from "react-icons/rx";


const InputTask = ({InputDiv,setInputDiv}) => {
  return (
    <>
        <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
        <div className={`${InputDiv} fixed top-0 left-0 flex justify-center items-center h-screen w-full`}>
            <div className='w-2/6 p-4 rounded bg-gray-900'>
                <div className='flex justify-end mb-2 p-2'>
                    <button className='text-xl' onClick={() => setInputDiv("hidden")}><RxCross2 /></button>
                </div>
                <input type="text" placeholder='Title' name='title' className='px-3 py-2 rounded w-full bg-gray-800' />
                <textarea name="description" cols="30" rows="10" placeholder='Description...'  className='px-3 py-2 rounded w-full my-3 bg-gray-800'></textarea>
                <button className='px-3 py-2 text-xl font-semibold rounded bg-red-500 text-black'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default InputTask