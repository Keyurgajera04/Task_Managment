import React,{useState} from 'react'
import Cards from '../components/home/Cards';
import { FaPlusCircle } from "react-icons/fa";
import InputTask from '../components/home/InputTask';


const Alltasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");
  return (
    <div>
        <div className='w-full flex justify-end text-3xl px-4 py-2 '>
            <FaPlusCircle className='text-gray-300 hover:scale-105 transition-all duration-300 hover:text-white ' onClick={() => setInputDiv("Fixed")}/>
        </div>
        <Cards addtask="true" setInputDiv={setInputDiv}/>
        <InputTask InputDiv={InputDiv} setInputDiv={setInputDiv}/>
    </div>
  )
}

export default Alltasks