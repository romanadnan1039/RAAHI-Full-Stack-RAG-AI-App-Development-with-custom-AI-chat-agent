import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section with Video Background */}
      <div className="relative flex items-center justify-center min-h-[85vh] overflow-hidden">
        
        {/* Background MP4 Video (auto‑play, muted, looping) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://cdn.coverr.co/videos/coverr-aerial-drone-over-mountain-range-1645/1080p.mp4"
        >
          Your browser does not support the video tag.
        </video>

        {/* Black Shadow Overlay (50% opacity) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        {/* Hero Content on top of video */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
            Welcome to RAAHI
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 font-medium drop-shadow-md max-w-3xl mx-auto">
            Your Gateway to Pakistan's Most Beautiful Destinations
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/packages"
              className="w-full sm:w-auto bg-[#566614] text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#6E6B40] transition-transform transform hover:scale-105 shadow-2xl"
            >
              Browse Packages
            </Link>
            <Link
              to="/login/user"
              className="w-full sm:w-auto bg-transparent text-white px-10 py-4 rounded-xl text-lg font-bold border-2 border-white hover:bg-white/20 transition-transform transform hover:scale-105 backdrop-blur-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#566614]" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
                Explore Destinations
              </h3>
              <p className="text-gray-600 text-lg">
                Discover amazing travel packages to Hunza, Swat, Naran, Skardu, and more
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#566614]" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
                AI Travel Assistant
              </h3>
              <p className="text-gray-600 text-lg">
                Get personalized recommendations using our intelligent travel assistant
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#566614]" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
                Easy Booking
              </h3>
              <p className="text-gray-600 text-lg">
                Book your dream vacation with just a few clicks
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-20 text-center bg-[#FFFAC3]/30 p-10 rounded-3xl">
            <p className="text-gray-800 text-xl font-medium mb-6">Already have an account?</p>
            <div className="flex justify-center items-center space-x-6">
              <Link
                to="/login/user"
                className="text-blue-600 hover:text-blue-800 font-bold text-lg hover:underline transition-colors"
              >
                User Login →
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/login/agency"
                className="text-blue-600 hover:text-blue-800 font-bold text-lg hover:underline transition-colors"
              >
                Agency Login →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
