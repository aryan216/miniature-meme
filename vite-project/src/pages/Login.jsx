import React from 'react'
import { Link as LINK } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div className='flex flex-col  justify-center items-center h-screen w-full'>
          <div className='flex flex-col items-center border border-black p-8 rounded-md  w-1/4'>
          <div className='text-3xl font-semibold'>USER LOGIN</div>
            <div className='flex flex-col w-72'>
              <div className='m-2 '>
                  <p>Email Address</p>
                  <input type="text" placeholder='Email'    className='border w-full border-black rounded-md p-2 bg-slate-300'/>
              </div>
                 
              <div className='m-2'>
                  <p className=''>Password</p>
                  <input type="text" placeholder='Password' className='border w-full border-black rounded-md p-2 bg-slate-300' />
              </div>
              <button className='m-2 bg-black text-white border border-black rounded-md p-2'>Signup</button>
              <button className='m-2 bg-green-600 text-black border border-black rounded-md p-2'>
                <LINK href="/captain-login">Login as captain</LINK></button>
            </div>
            <p>Didn't have an account? <a  href='/signup'>Signup</a> </p>
          </div>    
      </div>
      
    </div>
  )
}

export default Login