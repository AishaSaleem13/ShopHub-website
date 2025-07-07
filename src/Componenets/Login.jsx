import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      // 🔐 Fake API call – replace with your own
      const res = await fetch('https://your-api.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) throw new Error('Invalid login')

      const data = await res.json()
      localStorage.setItem('authToken', data.token)
      navigate('/') // redirect after login
    } catch (err) {
      alert('Login failed: ' + err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
