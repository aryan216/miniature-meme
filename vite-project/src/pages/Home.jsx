import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div>
        <div>
            <div className='text-white bg-black h-14 w-full p-6 text-3xl flex items-center'>
                Uber.
            </div>
            <div className='flex justify-around  mt-11'>
                <div className='flex-col mt-52 items-center'>
                    <p className='text-3xl m-2'>Get started</p>
                    <button className='w-64 h-11 font-semibold rounded-xl flex items-center gap-4 justify-center text-xl bg-black text-white'>Login <FaArrowRight /></button>
                </div>
                <img 
                className='h-auto w-80 rounded-xl'
                src="https://images.unsplash.com/photo-1648721410395-dcecdfcba45b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home