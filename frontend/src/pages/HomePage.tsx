import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import heroVideo from '../assets/hero-background.mp4'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFAC3]/30 flex flex-col">
      <Navbar />

      {/* Hero Section with Video Background */}
      <div className="relative w-full overflow-hidden min-h-[80vh] flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'LEMON MILK, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Welcome to RAAHI
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 font-medium drop-shadow-md">
              Your Gateway to Pakistan's Most Beautiful Destinations
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/packages"
                className="w-full sm:w-auto bg-[#566614] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6E6B40] transition-colors shadow-lg hover:shadow-xl"
              >
                Browse Packages
              </Link>
              <Link
                to="/login/user"
                className="w-full sm:w-auto bg-white/90 text-[#566614] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition-colors shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        {/* Travel Video Section */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFAC3]/50">
              <div className="relative pt-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/S2gP1yMof4o?autoplay=1&mute=1&loop=1&playlist=S2gP1yMof4o&controls=0" 
                  title="Beautiful Northern Pakistan" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Features */}
            <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
                  Explore Destinations
                </h3>
                <p className="text-gray-600">
                  Discover amazing travel packages to Hunza, Swat, Naran, Skardu, and more
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
                  AI Travel Assistant
                </h3>
                <p className="text-gray-600">
                  Get personalized recommendations using our intelligent travel assistant
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'LEMON MILK, sans-serif' }}>
                  Easy Booking
                </h3>
                <p className="text-gray-600">
                  Book your dream vacation with just a few clicks
                </p>
              </div>
            </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Already have an account?</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login/user"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              User Login →
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/login/agency"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Agency Login →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
