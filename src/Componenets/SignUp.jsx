import React, { useState } from 'react';
import { setSignUp } from '../config/Api';
function Signup() {

  const [email,setemail]=useState("")
  
  const [password,SetPassword]=useState("")
  
  const [name,setname]=useState("")

  function handleEmail(e) {
    setemail(e.target.value)
  }
  function handlename(e) {
    setname(e.target.value)
  }
function handlePassword(e) {
    SetPassword(e.target.value)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create your account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder='Enter your Name'
              onChange={handlename}
              className="input border-solid-black input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
         placeholder='Enter your email'
         onChange={handleEmail}
              className="input border-solid-black input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
         placeholder='*********'
         onChange={handlePassword}
              className="input  border-solid-black input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full hover:opacity-90 transition-all duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
