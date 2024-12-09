import React from 'react'
import { Link as LINK } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
      <div className='flex flex-col  justify-center items-center h-screen w-full'>
          <div className='flex flex-col items-center border border-black p-8 rounded-md'>
          <div >USER SIGNUP</div>
            <div className='flex flex-col '>
              <div className='m-3'>
                  <p>Email Address</p>
                  <input type="text" placeholder='Email'    className='border w-full border-black rounded-md p-2 bg-slate-300'/>
              </div>
              <div className='m-2'>
                  <p className=''>First Name</p>
                  <input type="text" placeholder='Password' className='border w-full border-black rounded-md p-2 bg-slate-300' />
              </div>
              <div className='m-2'>
                  <p className=''>Last Name</p>
                  <input type="text" placeholder='Password' className='border w-full border-black rounded-md p-2 bg-slate-300' />
              </div>
              <div className='m-3'>
                  <p className=''>Password</p>
                  <input type="text" placeholder='Password' className='border w-full border-black rounded-md p-2 bg-slate-300' />
              </div>
              
            </div>

            <button className='m-2 bg-black text-white border border-black rounded-md p-2'>Signup</button>
            <button className='m-2 bg-green-600 text-black border border-black rounded-md p-2'>
              <LINK href="/captain-login">Sign up as captain</LINK></button>

            <p>Already have an account? <a href='/login'>Login</a> </p>
          </div>    
      </div>
    </div>
  )
}

export default Signup