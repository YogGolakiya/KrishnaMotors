import React from "react";
import LightRays from "./components/Background";
import Navigation from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import GallerySection from "./components/Gallery";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/Contact";
import GoogleMapSection from "./components/GoogleMapSection";
import FooterSection from "./components/FooterSection";

// Hooks and data
import useKrishnaWorkshop, {
  services,
  testimonials,
  galleryImages,
} from "./components/krishna";

const App = () => {
  const {
    scrollToSection,
    handleViewServices,
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    formData,
    setFormData,
    handleFormSubmit,
    lightboxImage,
    setLightboxImage,
    currentTestimonial,
    setCurrentTestimonial,
    currentGalleryImage,
    handleGalleryNavigation,
  } = useKrishnaWorkshop();

  return (
    <>
      <LightRays />

      <Navigation
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection handleViewServices={handleViewServices} />
      <AboutSection />
      <ServicesSection services={services} />

      <GallerySection
        galleryImages={galleryImages}
        lightboxImage={lightboxImage}
        setLightboxImage={setLightboxImage}
        currentGalleryImage={currentGalleryImage}
        handleGalleryNavigation={handleGalleryNavigation}
      />

      <TestimonialSection
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />

      <ContactSection
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
      />

      <GoogleMapSection />
      <FooterSection scrollToSection={scrollToSection} />
    </>
  );
};

export default App;
