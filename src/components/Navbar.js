"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { LogOut, User, Shield, Key, Lock, Menu, X } from 'lucide-react'

const Navbar = () => {
    const { data: session } = useSession()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className='flex justify-between items-center px-4 md:px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white shadow-2xl fixed top-0 w-full z-50'>
            
            {/* Logo Section - Original Size */}
            <Link href="/" className='flex items-center space-x-2 md:space-x-4 group'>
                <div className='w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/30'>
                    <div className='w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-white to-blue-100 rounded-xl flex items-center justify-center shadow-inner'>
                        <Lock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent tracking-tight'>
                        SecureVault
                    </h1>
                    <p className='text-[10px] md:text-xs text-blue-200 font-medium tracking-wide'>
                        ENCRYPTED & SECURE
                    </p>
                </div>
            </Link>

            {/* Desktop Navigation Links - Original Design */}
            <div className='hidden lg:flex items-center gap-2 font-semibold'>
                <ul className='flex items-center gap-2'>
                    <li>
                        <Link href={"/"} className='flex items-center gap-2 py-3 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'>
                            <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} className='flex items-center gap-2 py-3 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'>
                            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/features"} className='flex items-center gap-2 py-3 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'>
                            <Key className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>Features</span>
                        </Link>
                    </li>
                    {session && (
                        <>
                            <li>
                                <Link href={"/user"} className='flex items-center gap-2 py-3 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'>
                                    <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/user/yourpassword"} className='flex items-center gap-2 py-3 px-6 rounded-2xl bg-white/10 shadow-lg border border-white/20 group hover:bg-white/20 hover:shadow-xl transition-all duration-300'>
                                    <Key className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>Vault</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Desktop Auth Buttons - Original Design */}
            <div className='hidden lg:flex items-center gap-4'>
                {session ? (
                    <div className='flex items-center gap-4'>
                        <div className='text-right'>
                            <p className='text-sm font-semibold text-white'>Welcome back</p>
                            <p className='text-xs text-blue-200'>{session.user?.name?.split(' ')[0]}</p>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className='flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-2xl font-bold hover:bg-red-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200 shadow-lg'
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link href="/login">
                            <button className='flex items-center gap-3 bg-gradient-to-r from-white to-blue-100 text-blue-600 px-8 py-3 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-white/30 shadow-2xl hover:from-blue-50 hover:to-purple-50'>
                                <Lock className="w-4 h-4" />
                                Get Started
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className='lg:hidden flex items-center justify-center w-10 h-10 bg-white/20 rounded-2xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-purple-700 to-blue-600 shadow-2xl border-t border-white/20'>
                    <ul className='flex flex-col p-4'>
                        <li>
                            <Link 
                                href={"/"} 
                                className='flex items-center gap-3 py-4 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href={"/about"} 
                                className='flex items-center gap-3 py-4 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href={"/features"} 
                                className='flex items-center gap-3 py-4 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Key className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Features</span>
                            </Link>
                        </li>
                        {session && (
                            <>
                                <li>
                                    <Link 
                                        href={"/user"} 
                                        className='flex items-center gap-3 py-4 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 group'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href={"/user/yourpassword"} 
                                        className='flex items-center gap-3 py-4 px-6 rounded-2xl bg-white/10 border border-white/20 group hover:bg-white/20 hover:shadow-lg transition-all duration-300'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Key className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span>Vault</span>
                                    </Link>
                                </li>
                            </>
                        )}
                        
                        {/* Mobile Auth Buttons */}
                        <li className='mt-4 pt-4 border-t border-white/20'>
                            {session ? (
                                <div className='space-y-2'>
                                    <div className='px-6 py-2 text-blue-200 text-sm'>
                                        <p>Welcome, {session.user?.name?.split(' ')[0]}</p>
                                    </div>
                                    <button 
                                        onClick={() => {
                                            signOut()
                                            setIsMenuOpen(false)
                                        }}
                                        className='flex items-center gap-3 py-3 px-6 rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 border border-white/20 text-red-300 hover:text-red-100 w-full text-left group'
                                    >
                                        <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <Link 
                                    href={"/login"} 
                                    className='flex items-center gap-3 py-3 px-6 rounded-2xl bg-white/10 border border-white-20 group hover:bg-white/20 hover:shadow-lg transition-all duration-300'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Login / Get Started</span>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            {/* Mobile Login Button - Show when not logged in and menu closed */}
            {!session && !isMenuOpen && (
                <div className='lg:hidden'>
                    <Link href="/login">
                        <button className='flex items-center gap-2 bg-gradient-to-r from-white to-blue-100 text-blue-600 px-4 py-2 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-white/30 shadow-2xl hover:from-blue-50 hover:to-purple-50 text-sm'>
                            <Lock className="w-4 h-4" />
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar