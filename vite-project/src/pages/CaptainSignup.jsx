import React from 'react'
import { Link} from 'react-router-dom';
const CaptainSignup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-white  shadow-2xl">
        <h1 className="text-xl font-bold mb-4 text-gray-800">CAPTAIN SIGNUP</h1>
        <div className="flex flex-col  w-full">
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm">
          SIGNUP
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-black hover:underline">
            Login
          </Link>
        </p>
        <Link
          to="/signup"
          className="mt-4 w-full py-2 px-4 bg-green-600 text-white text-center rounded-md shadow-sm hover:bg-green-700 transition"
        >
          Sign up as user
        </Link>
      </div>
    </div>
  );
}
export default CaptainSignup;
