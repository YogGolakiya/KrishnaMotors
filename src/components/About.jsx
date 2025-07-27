import React from 'react';
import { Calendar, Target, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 py-24 bg-gradient-to-b from-white to-navy-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            About Krishna Motors
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            A legacy of automotive excellence built on trust, expertise, and unwavering commitment to quality.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Info Cards */}
          <div className="space-y-8">
            {/* Heritage */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-navy-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Our Heritage</h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                Established in 2008, Krishna Motors has evolved into a premier automotive service center, 
                combining traditional craftsmanship with cutting-edge technology to deliver exceptional results.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-navy-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Our Mission</h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                To provide uncompromising automotive excellence through precision service, 
                genuine expertise, and an unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>

          {/* Right Image & Founder Info */}
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-72 h-72 bg-gradient-to-br from-navy-100 to-blue-100 rounded-full flex items-center justify-center text-8xl shadow-2xl">
               <img
                 src="/Ajay.jpg" 
                 alt="Krishna Owner Photo" 
                 className="rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-600/20 to-blue-600/20 rounded-full blur-xl" />
            </div>
            <h3 className="text-3xl font-bold text-navy-900 mb-2">Ajay Bhambharoliya</h3>
            <p className="text-xl text-navy-600 mb-4">Master Technician & Founder</p>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-navy-500">
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                18+ Years Experience
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                5000+ Satisfied Customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
