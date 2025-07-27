import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_gum5f94";
    const templateId = "template_rr3te5g";
    const publicKey = "rq3SucnrK4cOsxXNc";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 bg-gradient-to-b from-navy-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Ready to experience premium automotive care? Contact us today to
            schedule your service appointment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-navy-100">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-navy-600" />
              Send us a Message
            </h3>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-navy-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:border-navy-500 focus:outline-none transition-all duration-300 text-navy-900 placeholder-navy-400"
                  required
                />
              </div>

              <div>
                <label className="block text-navy-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:border-navy-500 focus:outline-none transition-all duration-300 text-navy-900 placeholder-navy-400"
                  required
                />
              </div>

              <div>
                <label className="block text-navy-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your automotive needs..."
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:border-navy-500 focus:outline-none transition-all duration-300 text-navy-900 placeholder-navy-400 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-navy-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-navy-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Phone className="w-6 h-6 text-white" />,
                title: "Call Us",
                lines: [
                  "+91 9377020444",
                  "Available 7:30 AM to 10 PM for emergencies",
                ],
              },
              {
                icon: <Mail className="w-6 h-6 text-white" />,
                title: "Email Us",
                lines: [
                  "krishnamotors04@gmail.com",
                  "We respond within 4-5 hours",
                ],
              },
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: "Visit Our Workshop",
                lines: [
                  "Krishna Motors River Front Road Behind Ambika Pinnacle",
                  "Mota Varachha, Surat. 394101",
                  "Available 8 AM to 8 PM",
                ],
              },
              {
                icon: <Clock className="w-6 h-6 text-white" />,
                title: "Working Hours",
                lines: [
                  "Monday - Saturday: 8:00 AM - 7:00 PM",
                  "Sunday: 8:00 AM - 2:00 PM",
                  <span className="text-red-500 font-medium" key="note">Sunday: Sometime Closed</span>,
                ],
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-xl border border-navy-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-bold text-lg mb-1">{info.title}</h4>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-navy-600 text-lg">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-navy-100">
              <h4 className="text-navy-900 font-bold text-lg mb-4 flex items-center">
                <span className="w-6 h-6 mr-2">🌐</span>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <div className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300">
                  <Facebook className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <div className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300">
                  <Instagram className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <div className="group w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300">
                  <Twitter className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
