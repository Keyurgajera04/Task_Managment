import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

const Cards = ({addtask,setInputDiv}) => {
    const data = [
        {
            title : "One",
            desc : "This is first card",
            status : "In Complate"
        },
        {
          title : "Two",
          desc : "This is second card",
          status : "In Complate"
        },
        {
          title : "Three",
          desc : "This is third card",
          status : "Complate"
        },
        {
          title : "Four",
          desc : "This is fourth card",
          status : "In Complate"
        },
    ]
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {data.map((items,i)=>(
        <div key={i} className='flex flex-col justify-between bg-gray-700 rounded-sm p-4 text-gray-300'>
          <div>
            <h1 className='font-semibold text-xl'>{items.title}</h1>
            <p>{items.desc}</p>
          </div>
          <div className='flex items-center mt-4 w-full'>
            <button className={`${items.status === 'Complate' ? 'bg-green-800' : 'bg-red-500'}  p-2 rounded w-3/6 hover:scale-105 transition-all duration-300`}>{items.status}</button>
            <div className='flex justify-around text-white text-2xl font-semibold w-full'>
              <button className='hover:scale-105 transition-all duration-300'><FaRegHeart /></button>
              <button className='hover:scale-105 transition-all duration-300'><FaRegEdit /></button>
              <button className='hover:scale-105 transition-all duration-300'><MdDelete /></button>
            </div>
          </div>
        </div>
      ))}
      {addtask==="true" && 
        <div className='flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 text-gray-300
        hover:scale-105 transition-all duration-300 hover:text-white cursor-pointer' onClick={() => setInputDiv("Fixed")}>
          <FaPlusCircle className='text-5xl'/>
          <h2 className='text-2xl mt-4'>Add task</h2>
        </div>
      }
      
    </div>
  )
}

export default Cards