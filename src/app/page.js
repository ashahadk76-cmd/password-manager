import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6 md:p-10 lg:p-14 mt-17 ">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
            Secure Your Digital Life with 
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"> SecurePass</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
            🔒 Store, manage, and generate strong passwords securely. 
            Your digital security starts here with military-grade encryption.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
            <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <span className="text-xl md:text-2xl">🔐</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Military-Grade Encryption</h3>
              <p className="text-gray-600 text-sm md:text-base">Your passwords are encrypted with AES-256 encryption</p>
            </div>

            <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">One-Click Generation</h3>
              <p className="text-gray-600 text-sm md:text-base">Create strong, unique passwords instantly</p>
            </div>

            <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <span className="text-xl md:text-2xl">🌐</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Cross-Platform Sync</h3>
              <p className="text-gray-600 text-sm md:text-base">Access your passwords anywhere, anytime</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link href="/user/add-new-password">
              <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto">
                🚀 Get Started Free
              </button>
            </Link>
            <Link href="/features">
              <button className="cursor-pointer border-2 border-blue-600 text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto">
                📚 Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */} 
      <section className="py-12 md:py-14 lg:py-16 bg-white px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12">
            How It Works in 3 Simple Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">1️⃣</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Sign Up Securely</h3>
              <p className="text-gray-600 text-sm md:text-base">Create your account with zero-knowledge architecture</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">2️⃣</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Add Your Passwords</h3>
              <p className="text-gray-600 text-sm md:text-base">Import existing passwords or generate new ones</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">3️⃣</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Access Anywhere</h3>
              <p className="text-gray-600 text-sm md:text-base">Use your passwords across all your devices securely</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Badge */}
      <section className="py-8 md:py-10 lg:py-12 bg-gray-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">🔒 Your Security is Our Priority</h3>
          <p className="text-gray-300 text-sm md:text-base">
            We never store your master password. All encryption happens locally on your device.
          </p>
        </div>
      </section>
    </div>
  );
}