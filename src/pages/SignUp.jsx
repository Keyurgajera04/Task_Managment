import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-[98vh]'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-semibold'>SignUp</div>
            <input type="username" name='username' placeholder='Enter user name..' className='w-full px-3 py-2 my-3 rounded bg-gray-700' />
            <input type="email" name='email' placeholder='Enter your email..' className='w-full px-3 py-2 my-3 rounded bg-gray-700' />
            <input type="password" name='password' placeholder='Password' className='w-full px-3 py-2 my-3 rounded bg-gray-700' />
            <div className='flex items-center justify-between w-full mt-2'>
                <button className='bg-red-500 text-xl font-semibold text-black px-3 py-2 rounded '>SignUp</button>
                <Link to='/login' className='text-gray-400 hover:text-gray-200'>Already having an account? Login here</Link>               
            </div>
        </div>
    </div>
  )
}

export default SignUp