import React, {useState} from 'react'
import { IoTriangleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Start = () => {

  const [pickup,setPickup]=useState('');
  const [destination,setDestination]=useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("value submitted");
    console.log(pickup,destination);
  }
  return (
    <div>
        
      <div className='flex flex-col-reverse max-h-screen md:flex-row'>
        <div className='h-screen flex  flex-col justify-center items-center w-full md:w-1/3 bg-slate-100 px-4'>
          <form onSubmit={submitHandler} className='relative  flex gap-4 flex-col'>
            <IoTriangleSharp className='absolute top-5 left-2' />
            <FaCircle className='absolute top-20 left-2'/>
            <div className='absolute -z-0 top-8 left-3.5 h-12 w-0.5 bg-neutral-900'></div>
            <input value={pickup} onChange={(e)=>setPickup(e.target.value)}
              className='h-12 shadow-lg p-4 pl-8 w-full sm:w-full rounded-sm' 
              type="text" 
              placeholder='Enter your Pickup location '/>
            <input value={destination} onChange={(e)=>setDestination(e.target.value)}
              className='h-12 shadow-lg p-4 pl-8 w-full sm:w-full rounded-sm' 
              type="text" 
              placeholder='Enter your Destination'/>

            <button type='submit'>submit</button>  
          </form>
        </div>
        <div className='h-screen w-full md:w-2/3 bg-slate-600'>
          destination
        </div>
      </div>
    </div>
  )
}
export default Start

