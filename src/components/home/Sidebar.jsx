import React from 'react';
import { CgNotes } from "react-icons/cg";
import { TbNotebookOff } from "react-icons/tb";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom"



const Sidebar = () => {
    const data = [
        {
            title : "All Tasks",
            icon : <CgNotes />,
            link : "/"
        },
        {
            title : "Important Tasks",
            icon : <MdLabelImportant />,
            link : "/importanttask"
        },
        {
            title : "Completed Tasks",
            icon : <FaCheckCircle />,
            link : "/complatedtask"
        },
        {
            title : "Incomplated Tasks",
            icon : <TbNotebookOff />,
            link : "/incomplatedtask"
        }
    ];
  return (
    <>
        <div>
            <h2 className='text-xl font-semibold'>The Code Master</h2>
            <h4 className='mb-1 text-gray-400 border-b-2 pb-2'>keyurgajera5@gmail.com</h4>
        </div>
        <div>
            {data.map((items, i)=>(
                <Link to={items.link} key={i} className='my-2 flex items-center hover:bg-gray-600 cursor-pointer p-1 rounded'>
                    {items.icon}&nbsp;{items.title}
                </Link>
            ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2 rounded hover:bg-gray-700'>Log Out</button>
        </div>
    </>
  )
}

export default Sidebar