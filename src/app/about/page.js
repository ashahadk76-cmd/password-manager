import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 p-6 md:p-12 lg:p-28 mt-19  ">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">SecurePass</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&pros;re on a mission to make digital security accessible and simple for everyone. 
            No technical knowledge required - just peace of mind Ashahad  .
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower individuals and businesses with simple, secure, and reliable password management solutions. 
              We believe  Everyone deserves to browse the internet without security worries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🔮</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where digital security is seamless, intuitive, and accessible to all. 
              Where people can focus on what matters most, without compromising their online safety.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose SecurePass?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🛡️",
                title: "Military-Grade Security",
                description: "AES-256 encryption ensures your data remains private and secure"
              },
              {
                icon: "🤖",
                title: "Smart Technology",
                description: "AI-powered password generation and security analysis"
              },
              {
                icon: "🌍",
                title: "Global Access",
                description: "Access your passwords from anywhere in the world securely"
              },
              {
                icon: "💫",
                title: "User-Friendly",
                description: "Designed for both tech experts and beginners"
              },
              {
                icon: "🚀",
                title: "Lightning Fast",
                description: "Instant password retrieval and auto-fill capabilities"
              },
              {
                icon: "💰",
                title: "Free Forever",
                description: "Core features available at no cost forever"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Passwords Secured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Security Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust SecurePass with their digital security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/user/add-new-password">
              <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Free Today
              </button>
            </Link>
            <Link href="/features">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                See All Features
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About