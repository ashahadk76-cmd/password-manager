"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { LoaderCircle, EyeOff, Eye, Key, User, Mail, Tag, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Page = () => {
  const [isshow, setIsshow] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams();
  const passwordID = searchParams.get("id");

  const [form, setForm] = useState({
    title: "",
    username: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    if (passwordID) {
      setLoading(true)
      fetch(`/api/new-password/${passwordID}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("api response:", data)
          if (data.success && data.passwords) {
            setLoading(false);
            setForm({
              title: data.passwords.title || "",
              username: data.passwords.username || "",
              email: data.passwords.email || "",
              password: data.passwords.password || ""
            });
          }
          else {
            setLoading(false)
            console.log("No data or success failed")
          }
        })
        .catch(err => {
          setLoading(false)
          console.log("fetch err", err)
          alert(err.message)
        })
    }
  }, [passwordID])

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const method = passwordID ? "PATCH" : "POST"
    const url = passwordID ? `/api/new-password/${passwordID}` : "/api/new-password"

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "title": form.title,
      "username": form.username,
      "email": form.email,
      "password": form.password,
    });

    const requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch(url, requestOptions)
      const result = await response.json()

      if (result.success) {
        alert(result.message)
        setForm({
          title: "",
          username: "",
          email: "",
          password: "",
        })
        router.push("/user/yourpassword")
      } else {
        alert(result.message)
      }
      console.log(result)
    } catch (error) {
      console.error(error)
      alert("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-6 md:py-8 px-4 m-27  ">
      <div className="max-w-lg mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/user/yourpassword"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 md:mb-6 transition-colors duration-200 font-medium text-sm md:text-base"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          Back To Passwords
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 border border-gray-200">
          
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Key className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">
              {passwordID ? 'Update Password' : 'Save New Password'}
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              {passwordID ? 'Update your password details' : 'Securely store your login credentials'}
            </p>
          </div>

          <form onSubmit={handlesubmit} className="space-y-4 md:space-y-6">
            
            {/* Title Field */}
            <div>
              <label htmlFor='title' className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                <div className="flex items-center gap-2">
                  <Tag size={14} className="md:w-4 md:h-4 text-blue-600" />
                  Title *
                </div>
              </label>
              <input 
                placeholder='e.g., Gmail Account, Facebook, Netflix' 
                name='title' 
                id='title' 
                value={form.title} 
                onChange={handlechange}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-400 bg-gray-50 hover:bg-white text-sm md:text-base"
                required
              />
            </div>

            {/* Username Field */}
            <div>
              <label htmlFor='username' className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                <div className="flex items-center gap-2">
                  <User size={14} className="md:w-4 md:h-4 text-blue-600" />
                  Username *
                </div>
              </label>
              <input 
                placeholder='Enter your username' 
                name='username' 
                id='username' 
                value={form.username} 
                onChange={handlechange}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-400 bg-gray-50 hover:bg-white text-sm md:text-base"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor='email' className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="md:w-4 md:h-4 text-blue-600" />
                  Email Address *
                </div>
              </label>
              <input 
                placeholder='your.email@example.com' 
                name='email' 
                id='email' 
                value={form.email} 
                onChange={handlechange}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-400 bg-gray-50 hover:bg-white text-sm md:text-base"
                type="email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor='password' className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                <div className="flex items-center gap-2">
                  <Key size={14} className="md:w-4 md:h-4 text-blue-600" />
                  Password *
                </div>
              </label>
              <div className="relative">
                <input 
                  type={isshow ? "text" : "password"} 
                  placeholder='Enter your password' 
                  name='password' 
                  id='password' 
                  value={form.password} 
                  onChange={handlechange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 pr-10 md:pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-400 bg-gray-50 hover:bg-white text-sm md:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsshow(!isshow)}
                  className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors duration-200 p-1 md:p-2 rounded-lg hover:bg-gray-100"
                >
                  {isshow ? (
                    <EyeOff size={16} className="md:w-5 md:h-5 hover:scale-110 transition-transform" />
                  ) : (
                    <Eye size={16} className="md:w-5 md:h-5 hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1 md:mt-2">
                🔒 Your password is encrypted with military-grade security
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-3 md:pt-4">
              <button 
                type='submit' 
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={16} className="md:w-5 md:h-5 animate-spin" />
                    {passwordID ? 'Updating...' : 'Saving...'}
                  </>
                ) : (
                  <>
                    <Key size={16} className="md:w-5 md:h-5" />
                    {passwordID ? 'Update Password' : 'Save Password Securely'}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Note */}
          <div className="mt-6 md:mt-8 p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs md:text-sm">🔒</span>
              </div>
              <div>
                <p className="text-sm text-blue-800 font-medium">Secure Storage</p>
                <p className="text-xs text-blue-600 mt-1">
                  Your credentials are encrypted with AES-256 encryption and stored securely in our vault.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page