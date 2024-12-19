import React from 'react'
import { IoTriangleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
const Start = () => {
  return (
    <div>
      <div className='flex'>
        <div className='h-screen flex flex-col justify-center items-center w-1/3 bg-slate-100'>

             <form className='relative flex gap-4 flex-col'>
             <IoTriangleSharp className='absolute top-6 left-2' />
             <FaCircle className='absolute top-20 left-2'/>
              <div className='absolute top-8 left-3.5 h-12 w-0.5 bg-neutral-900'></div>
              <input className='h-12 p-4 pl-8 w-72 rounded-sm '  type="text" placeholder='Enter your location'/>
              <input className='h-12 p-4 pl-8 w-72 rounded-sm '  type="text" placeholder='Enter your Destination'/>
             </form>
        </div>
        <div className='h-screen w-2/3 bg-slate-600'>
          destination
        </div>
      </div>
    </div>
  )
}

export default Start