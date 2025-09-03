import React, { useState } from 'react'
import { setLogin } from '../config/Api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

function Login() {
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const navigate = useNavigate()
  const dispatch =useDispatch()

  async function LoginValue() {
    const res = await setLogin({email, password})
    console.log(res)
    if (email||password){
      navigate('/'),
dispatch(settoken(res.token))
    }

  }

  function handleEmail(e) {
    SetEmail(e.target.value)
  }

  function handlePassword(e) {
    SetPassword(e.target.value)
  }

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 text-gray-800">
        <h2 className="text-3xl font-bold text-center">Login</h2>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleEmail}
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handlePassword}
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition"
          onClick={LoginValue}
        >
          Submit
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:underline cursor-pointer font-medium"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login