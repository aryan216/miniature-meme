import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value); 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);   
    setEmail('');
    setPassword('');
  };
    
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center border border-black p-8 rounded-md">
        <div className="text-3xl font-semibold">USER LOGIN</div>
        <div className="flex flex-col w-72">
          <div className="m-2">
            <p>Email Address</p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="border w-full border-black rounded-md p-2 bg-slate-300"
            />
          </div>

          <div className="m-2">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="border w-full border-black rounded-md p-2 bg-slate-300"
            />
          </div>
          <button onClick={onSubmit} className="m-2 bg-black text-white border border-black rounded-md p-2">
            LOGIN
          </button>
          <Link
            to="/captain-login"
            className="m-2 text-center bg-green-600 text-black border border-black rounded-md p-2 block"
          >
            Login as captain
          </Link>
        </div>
        <p>
          Didn't have an account?{' '}
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
