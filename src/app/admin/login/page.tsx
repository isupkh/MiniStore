'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email === 'admin@demo.com' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true')
      router.push('/admin/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <section className='text-center pt-20'>
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 py-6 space-y-8 px-4 p-4 border border-gray-400 shadow-2xl rounded-lg">
      <h1 className="text-2xl font-bold  text-red-500 ">Admin Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded border-gray-400 focus:outline-none"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border rounded border-gray-400 focus:outline-none"
      />
      <button type="submit" className="bg-blue-700 text-white px-6 py-1 cursor-pointer rounded">
        Login
      </button>
    </form>
    </section>
  )
}

export default LoginPage