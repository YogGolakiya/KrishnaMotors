import React from "react";
import { Star } from "lucide-react";

const TestimonialSection = ({ testimonials, currentTestimonial, setCurrentTestimonial }) => {
  return (
    <section className="relative z-10 py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-navy-600">
            Hear from our satisfied customers about their experience with Krishna Workshop.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-gradient-to-br from-navy-50 to-blue-50 p-12 rounded-2xl shadow-xl border border-navy-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl text-white shadow-xl">
              👤
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-2xl text-navy-700 mb-8 italic leading-relaxed max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </p>

            {/* Author Info */}
            <h4 className="text-2xl font-bold text-navy-900 mb-2">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-navy-600 text-lg mb-1">
              {testimonials[currentTestimonial].position}
            </p>
            <p className="text-navy-500">
              {testimonials[currentTestimonial].car} Owner
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-navy-600 scale-125"
                    : "bg-navy-300 hover:bg-navy-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
