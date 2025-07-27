import React from "react";
import { Settings, Award, Users } from "lucide-react";

const FooterSection = ({ scrollToSection }) => {
  return (
    <footer className="relative z-10 bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-navy-600 rounded-xl flex items-center justify-center">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Krishna Workshop</h3>
                <p className="text-blue-300">Premium Automotive Care</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted partner for premium automotive services. We combine
              traditional craftsmanship with modern technology to deliver
              exceptional results for luxury and performance vehicles.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                15+ Years Experience
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                1000+ Happy Customers
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>Engine Diagnostics</p>
              <p>Climate Systems</p>
              <p>Precision Alignment</p>
              <p>Fluid Services</p>
              <p>Performance Tuning</p>
              <p>Preventive Maintenance</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Krishna Workshop. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <div className="flex items-center space-x-2">
                <span>Made By</span>
                <a 
                   href="https://yog-golakiya.vercel.app/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-red-400 hover:underline"
                >
                  Yog Golakiya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
