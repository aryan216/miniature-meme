import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  {UserDataContext}  from '../context/Usercontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData]=useState({});
  const {user,setUser}=useContext(UserDataContext)
  const navigate=useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password);
    const userData={
      email:email,
      password:password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,userData)
    // console.log('this is response',response);
    if(response.status===201){
      const data=response.data
      //console.log(data)
      setUser(data.user)
      localStorage.setItem('token', data.token);
      console.log("navigating start")
      navigate('/start')
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white w-full shadow-lg max-w-md p-6 rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">User Login</h1>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 bg-gray-50 focus:outline-none "
            />
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className="w-full py-3 bg-black text-white font-semibold rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-black hover:underline">
            Sign up
          </Link>
        </p>

        <Link
          to="/captain-login"
          className="mt-4 w-full py-3 bg-green-600 text-white text-center font-semibold rounded-lg hover:bg-green-700 transition"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default Login;
