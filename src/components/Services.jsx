import React from 'react';
import { Cog, Zap, Target, Droplets } from 'lucide-react';

const services = [
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics and precision engine repair services",
    features: ["ECU Programming", "Performance Tuning", "Emission Control"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Climate Systems",
    description: "Complete HVAC service for optimal cabin comfort and air quality",
    features: ["AC Repair", "Heating Systems", "Air Filtration"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Alignment",
    description: "State-of-the-art wheel alignment for enhanced performance and safety",
    features: ["4-Wheel Alignment", "Suspension Check", "Tire Analysis"]
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Fluid Services",
    description: "Premium fluid replacement and maintenance programs",
    features: ["Synthetic Oils", "Brake Fluid", "Coolant Systems"]
  }
];

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="relative z-10 py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Premium Services
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Comprehensive automotive solutions delivered with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-xl border border-navy-100 hover:shadow-2xl hover:border-navy-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-navy-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-navy-500">
                    <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
