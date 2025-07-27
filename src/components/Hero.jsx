import React from 'react';
import { Award, Settings, Shield, Users, Play, ArrowRight } from 'lucide-react';

const HeroSection = ({ handleViewServices }) => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center pt-20 text-white font-poppins"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          
          {/* 🔰 Tagline */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 mr-2" />
            Surat Auto Works Association Since 2009
          </div>

          {/* 🏁 Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent drop-shadow-sm">
              Krishna Motors
            </span>
          </h1>

          {/* 🧠 Subheading */}
          <p className="text-base sm:text-lg lg:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Where precision meets passion. Experience unparalleled automotive care 
            with our expert technicians and state-of-the-art facility.
          </p>

          {/* ⭐ Service Highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
            {[
              { label: 'Expert Diagnostics', icon: <Settings className="w-5 h-5 text-blue-200" /> },
              { label: 'Quality Assured', icon: <Shield className="w-5 h-5 text-blue-200" /> },
              { label: 'Trusted Service', icon: <Users className="w-5 h-5 text-blue-200" /> },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/10 backdrop-blur-sm"
              >
                {item.icon}
                <span className="text-white font-medium text-sm sm:text-base">{item.label}</span>
              </div>
            ))}
          </div>

          {/* 🚀 CTA Button */}
          <button
            onClick={handleViewServices}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-navy-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
