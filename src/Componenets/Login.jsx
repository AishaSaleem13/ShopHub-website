import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('Email:', email)
    console.log('Password:', password)
    alert('Login clicked (no auth yet)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
      
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          Login
        </button>
        
      </div>
    </div>
  )
}

export default Login
