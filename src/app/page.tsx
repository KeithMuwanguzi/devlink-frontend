"use client";

import { FullScreenLoader } from "./ReusableComponents/LoadingOverlay";
import { useState, useEffect } from "react";
import HomeSection from "./WelcomeComponents/HomeSection";
import AboutSection from "./WelcomeComponents/AboutSection";
import FeaturesSection from "./WelcomeComponents/FeaturesSection";
import SupportSection from "./WelcomeComponents/SupportSection";
import ContactSection from "./WelcomeComponents/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "features":
        return <FeaturesSection />;
      case "support":
        return <SupportSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when changing sections
  };

  if (isLoading) {
    return (
      <FullScreenLoader
        isLoading={isLoading}
        loadingText="Loading Application..."
        loadingSubtext="Setting up your dashboard, please wait..."
        variant="spinner"
        size="xl"
        blur="xl"
        opacity="light"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      {/* Navbar */}
      <nav className="relative z-20 mx-4 sm:mx-6 lg:mx-16 mt-6">
        <div className="mx-[10%] bg-white/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl px-6 py-2 ring-1 ring-gray-900/5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleSectionChange("home")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
                <div className="w-3 h-3 bg-white rounded-full shadow-inner"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DevLink
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => handleSectionChange("home")}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 relative group ${
                  activeSection === "home" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                Home
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 rounded-full ${
                  activeSection === "home" ? "w-8" : "w-0 group-hover:w-8"
                }`}></div>
              </button>
              <button 
                onClick={() => handleSectionChange("about")}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 relative group ${
                  activeSection === "about" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                About
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 rounded-full ${
                  activeSection === "about" ? "w-8" : "w-0 group-hover:w-8"
                }`}></div>
              </button>
              <button 
                onClick={() => handleSectionChange("features")}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 relative group ${
                  activeSection === "features" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                Features
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 rounded-full ${
                  activeSection === "features" ? "w-8" : "w-0 group-hover:w-8"
                }`}></div>
              </button>
              <button 
                onClick={() => handleSectionChange("support")}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 relative group ${
                  activeSection === "support" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                Support
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 rounded-full ${
                  activeSection === "support" ? "w-8" : "w-0 group-hover:w-8"
                }`}></div>
              </button>
              <button 
                onClick={() => handleSectionChange("contact")}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 relative group ${
                  activeSection === "contact" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                Contact
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 rounded-full ${
                  activeSection === "contact" ? "w-8" : "w-0 group-hover:w-8"
                }`}></div>
              </button>
              <div className="ml-4 pl-4 border-l border-gray-200">
                <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl shadow-indigo-500/25 transform hover:-translate-y-0.5 hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
              >
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="mt-4 pt-4 border-t border-gradient-to-r from-indigo-200 to-purple-200">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => handleSectionChange("home")}
                  className={`transition-all duration-300 text-sm font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transform hover:translate-x-2 text-left ${
                    activeSection === "home" ? "text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50" : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleSectionChange("about")}
                  className={`transition-all duration-300 text-sm font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transform hover:translate-x-2 text-left ${
                    activeSection === "about" ? "text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50" : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => handleSectionChange("features")}
                  className={`transition-all duration-300 text-sm font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transform hover:translate-x-2 text-left ${
                    activeSection === "features" ? "text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50" : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Features
                </button>
                <button 
                  onClick={() => handleSectionChange("support")}
                  className={`transition-all duration-300 text-sm font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transform hover:translate-x-2 text-left ${
                    activeSection === "support" ? "text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50" : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Support
                </button>
                <button 
                  onClick={() => handleSectionChange("contact")}
                  className={`transition-all duration-300 text-sm font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transform hover:translate-x-2 text-left ${
                    activeSection === "contact" ? "text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50" : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Contact
                </button>
                <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg mt-3 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Dynamic Content */}
        <div className="flex-1 flex items-center justify-center px-8 py-16 lg:py-24">
          {renderActiveSection()}
        </div>

        {/* Right Side - Getting Started */}
        <div className="flex-shrink-0 w-full lg:w-120 p-8 lg:p-12 flex items-center">
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            {/* Getting Started Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden mb-6">
              <div>
                <img 
                  src="/flow.jpg"
                  alt="Portfolio Creation Flow"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Join thousands of professionals who trust DevLink to showcase their work. Create your stunning portfolio in minutes.
                </p>

                <div className="flex flex-1 justify-between gap-4 mb-6">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium text-sm py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Create Portfolio
                  </button>

                  <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm py-2 px-4 rounded-lg transition-all duration-200 border border-gray-200">
                    View Demo
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">No credit card required • Free forever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-xl border-gray-200/50">
        <div className="mt-6 pt-6 border-t border-gray-200/50 text-center">
          <p className="text-gray-500 text-xs pb-4">
            © 2025 DevLink. Crafted by <a href="https://github.com/KeithMuwanguzi" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">Keith Muwanguzi</a> & <a href="https://github.com/MarthaMusiimire" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">Martha Musiimire</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
