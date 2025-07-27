import React, { useState, useEffect, useRef } from 'react';
import {
  Cog, Zap, Target, Droplets,
  Calendar, Users, Award,
} from 'lucide-react';

const useKrishnaWorkshop = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeSection, setActiveSection] = useState('home');

  const carModelRef = useRef(null);

  // Scroll effect to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Optional car animation if you add it back
  useEffect(() => {
    const animate3DCar = () => {
      if (carModelRef.current) {
        const time = Date.now() * 0.001;
        const rotateY = Math.sin(time * 0.3) * 15;
        const rotateX = Math.sin(time * 0.2) * 5;
        const scale = 1 + Math.sin(time * 0.5) * 0.05;

        carModelRef.current.style.transform = `
          perspective(1000px)
          rotateY(${rotateY}deg)
          rotateX(${rotateX}deg)
          scale(${scale})
        `;
      }
      requestAnimationFrame(animate3DCar);
    };
    animate3DCar();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleViewServices = () => {
    scrollToSection('services');
  };

  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleGalleryNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
    } else {
      setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return {
    scrollToSection,
    handleViewServices,
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    formData,
    setFormData,
    handleFormSubmit,
    testimonials,
    currentTestimonial,
    galleryImages,
    currentGalleryImage,
    handleGalleryNavigation,
    services,
    carModelRef,
    lightboxImage,
    setLightboxImage,
  };
};

// Services Data
export const services = [
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics and precision engine repair services",
    features: ["ECU Programming", "Performance Tuning", "Emission Control"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Climate Systems",
    description: "Complete HVAC service for optimal cabin comfort and air quality",
    features: ["AC Repair", "Heating Systems", "Air Filtration"],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Alignment",
    description: "State-of-the-art wheel alignment for enhanced performance and safety",
    features: ["4-Wheel Alignment", "Suspension Check", "Tire Analysis"],
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Fluid Services",
    description: "Premium fluid replacement and maintenance programs",
    features: ["Synthetic Oils", "Brake Fluid", "Coolant Systems"],
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Exceptional service quality. My BMW has never performed better. The attention to detail is remarkable.",
    position: "CEO, Tech Solutions",
    car: "BMW X5",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Professional expertise combined with genuine care for every detail. Highly recommend for luxury vehicles.",
    position: "Managing Director",
    car: "Mercedes S-Class",
  },
  {
    name: "Amit Patel",
    rating: 5,
    text: "Outstanding craftsmanship and reliable service. They understand luxury automotive requirements perfectly.",
    position: "Business Owner",
    car: "Audi A8",
  },
];

// Gallery Images
export const galleryImages = [
  { src: "/g1.jpg", alt: "WorkShop", type: "All Services", brand: "Any type of Work" },
  { src: "/g2.jpg", alt: "Engine Diagnostics", type: "Precision Service", brand: "Classified Work" },
  { src: "/g3.jpg", alt: "Workshop Look", type: "Maintenance", brand: "Vehicle's at station" },
  { src: "/g4.jpg", alt: "Office System", type: "Safety", brand: "documents / bills" },
  { src: "/g5.jpg", alt: "Complete Overhaul", type: "Restoration", brand: "All Vehicles" },
  { src: "/g6.jpg", alt: "Final Inspection", type: "Quality Check", brand: "Premium Work" },
  
];

export default useKrishnaWorkshop;
