"use client"

import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (session) {
      router.push('/user')
    }
  }, [session, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200">
          
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl text-white">🔒</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">
              Welcome to SecurePass
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Sign in to access your secure password vault
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={() => signIn('google')}
            className="w-full bg-white border border-gray-300 rounded-xl py-3 md:py-4 px-4 md:px-6 flex items-center justify-center gap-3 md:gap-4 hover:shadow-lg transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 group transform hover:scale-105"
          >
            <div className="w-5 h-5 md:w-6 md:h-6">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span className="text-gray-700 font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors duration-300">
              Continue with Google
            </span>
          </button>

          {/* Security Note */}
          <div className="text-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-xs md:text-sm flex items-center justify-center gap-2">
              <span>🔒</span>
              Your data is encrypted and secure with Google OAuth
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login