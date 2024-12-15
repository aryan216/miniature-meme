import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="relative">
      <div className="relative flex justify-around mt-11">
        <div className="flex-col items-center absolute inset-0 flex justify-center text-center md:relative md:mt-52 md:text-left md:items-start">
          <p className="text-3xl m-2 text-white md:text-black">Get started.</p>
          <button className="w-64 h-11 font-semibold rounded-xl flex  items-center gap-4 justify-center text-xl bg-black text-white md:bg-black md:text-white"> 
            <Link className='flex flex-row items-center gap-2' to="/login">Login <FaArrowRight /></Link>
          </button>
        </div>
        <img 
          className="h-auto w-full md:w-80   object-cover"
          src="https://images.unsplash.com/photo-1648721410395-dcecdfcba45b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
        />
      </div>
    </div>
  );
};

export default Home;