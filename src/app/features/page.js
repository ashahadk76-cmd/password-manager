import React from 'react'
import Link from 'next/link'

const Features = () => {
  const features = [
    {
      icon: "🔐",
      title: "Military-Grade Encryption",
      description: "AES-256 encryption keeps your passwords safe from hackers and breaches",
      details: ["End-to-end encryption", "Zero-knowledge architecture", "Local encryption keys"]
    },
    {
      icon: "⚡",
      title: "One-Click Password Generator",
      description: "Create strong, unique passwords instantly with customizable options",
      details: ["Custom length settings", "Special characters included", "Easy copy-paste"]
    },
    {
      icon: "🌐",
      title: "Cross-Platform Sync",
      description: "Access your passwords securely across all your devices",
      details: ["Mobile & desktop apps", "Real-time synchronization", "Offline access"]
    },
    {
      icon: "🔄",
      title: "Auto-Fill & Auto-Save",
      description: "Never type passwords again with intelligent auto-fill technology",
      details: ["Browser integration", "One-tap login", "Auto-save new passwords"]
    },
    {
      icon: "📊",
      title: "Security Dashboard",
      description: "Monitor your password health and get security recommendations",
      details: ["Password strength analysis", "Breach alerts", "Security score"]
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Secure Sharing",
      description: "Safely share passwords with family or team members",
      details: ["Encrypted sharing", "Temporary access", "Permission controls"]
    },
    {
      icon: "📁",
      title: "Digital Vault",
      description: "Store more than just passwords - secure notes, documents, and more",
      details: ["Secure file storage", "Encrypted notes", "Organized categories"]
    },
    {
      icon: "🔔",
      title: "Smart Security Alerts",
      description: "Get instant notifications about potential security threats",
      details: ["Dark web monitoring", "Phishing alerts", "Login notifications"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6  mt-19 md:p-12 lg:p-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how SecurePass makes password management simple, secure, and seamless. 
            Everything you need to take control of your digital security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{feature.description}</p>
              <ul className="space-y-1 md:space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-xs md:text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            Enterprise-Grade Security Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              { icon: "🔒", text: "AES-256 Encryption" },
              { icon: "🌐", text: "Zero-Knowledge" },
              { icon: "📱", text: "2FA Support" },
              { icon: "💾", text: "Local Storage" }
            ].map((item, index) => (
              <div key={index} className="p-3 md:p-4">
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{item.icon}</div>
                <div className="text-gray-700 font-medium text-sm md:text-base">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 lg:p-12 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust SecurePass with their digital security.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/login">
              <button className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features