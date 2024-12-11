import React from 'react';
import { Link as LINK } from 'react-router-dom';
import { useState } from 'react';
const Signup = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');

  const handleEmailchange=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  const handlePasswordchange=(e)=>{
    setPassword(e.target.value);
    console.log(e.target.value);
  }
  const handleFirstnamechange=(e)=>{
    setFirstname(e.target.value);
    console.log(e.target.value);
  }
  const handleLastnamechange=(e)=>{
    setLastname(e.target.value);
    console.log(e.target.value);
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(email,password,firstname,lastname);
    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-white  shadow-2xl">
        <h1 className="text-xl font-bold mb-4 text-gray-800">USER SIGNUP</h1>
        <div className="flex flex-col  w-full">
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              value={email}
              onChange={handleEmailchange}
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none  "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              value={firstname}
              onChange={handleFirstnamechange}
              type="text"
              placeholder="Enter your first name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              value={lastname}
              onChange={handleLastnamechange}
              type="text"
              placeholder="Enter your last name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              value={password}
              onChange={handlePasswordchange}
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
        </div>
        <button type="submit" onClick={submitHandler} className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm">
          SIGNUP
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <LINK to="/login" className="text-black hover:underline">
            Login
          </LINK>
        </p>
        <LINK
          to="/captain-signup"
          className="mt-4 w-full py-2 px-4 bg-green-600 text-white text-center rounded-md shadow-sm hover:bg-green-700 transition"
        >
          Sign up as captain
        </LINK>
      </div>
    </div>
  );
};

export default Signup;
