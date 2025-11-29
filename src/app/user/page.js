"use client"

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle, Shield, Key, User, LogOut } from 'lucide-react'
import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const UserProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === "loading") {
    return(
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 ">
        <div className="text-center">
          <LoaderCircle className="animate-spin text-blue-600 w-12 h-12 mx-auto mb-4" />
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 md:p-12 lg:p-28 mt-19 md:p-12 lg:p-28 ">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            User <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Profile</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Manage your account and security settings
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-gray-200 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8">
            {/* User Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
              {session?.user?.name?.charAt(0) || 'U'}
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
                {session?.user?.name || "User Name"}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-1">
                <User className="w-4 h-4" />
                <p className="text-base md:text-lg">{session?.user?.email || "user@email.com"}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-green-600">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Account Verified</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-blue-50 rounded-xl p-4 md:p-6 text-center border border-blue-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Key className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">24</div>
              <div className="text-gray-600 text-xs md:text-sm">Passwords Saved</div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4 md:p-6 text-center border border-green-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">98%</div>
              <div className="text-gray-600 text-xs md:text-sm">Security Score</div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-4 md:p-6 text-center border border-purple-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <User className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">30d</div>
              <div className="text-gray-600 text-xs md:text-sm">Member Since</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/user/yourpassword" className="flex-1">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
                Manage Passwords
              </button>
            </Link>
            <button 
              onClick={() => signOut()}
              className="flex-1 border-2 border-red-600 text-red-600 py-2 md:py-3 px-4 md:px-6 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <LogOut className="w-4 h-4 md:w-5 md:h-5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
            Security Tips
          </h3>
          <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
            <li>• Use unique passwords for each account</li>
            <li>• Enable two-factor authentication when available</li>
            <li>• Regularly update your passwords</li>
            <li>• Never share your master password</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default UserProfile