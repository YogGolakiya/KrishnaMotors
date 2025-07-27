import React from "react";
import { MapPin } from "lucide-react";

const GoogleMapSection = () => {
  return (
    <section
      id="location"
      className="relative z-10 py-24 bg-white border-t border-navy-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4 flex items-center justify-center space-x-3">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span>Workshop Location</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Visit Krishna Workshop — centrally located for easy access and excellent service.
          </p>
        </div>

        <div className="relative rounded-2xl shadow-xl overflow-hidden border border-navy-100 hover:shadow-2xl transition-shadow duration-500 group">
          <iframe
            title="Krishna Workshop Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d328.70477215731285!2d72.88872627421989!3d21.23700406282164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753560876364!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="w-full h-[450px] border-none transition-all duration-300 group-hover:scale-[1.01]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
