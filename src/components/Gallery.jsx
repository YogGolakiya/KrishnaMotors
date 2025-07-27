import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = ({
  galleryImages,
  handleGalleryNavigation,
  lightboxImage,
  setLightboxImage,
}) => {
  return (
    <section
      id="gallery"
      className="relative z-10 py-24 bg-gradient-to-b from-navy-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through precision and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gradient-to-br from-navy-100 to-blue-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
              onClick={() => setLightboxImage(image)}
            >
              <div className="flex items-center justify-center h-full text-6xl">
                  {image.src.startsWith("/") ? (
                  <img
                  src={image.src}
                  alt={image.alt}
                  className="object-contain "
                  />
                  ) : (
                  <span>{image.src}</span>
                  )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-blue-300 font-medium text-sm mb-1">{image.brand}</div>
                  <div className="text-white font-bold text-lg mb-1">{image.alt}</div>
                  <div className="text-gray-300 text-sm">{image.type}</div>
                </div>
              </div>

              {/* "VIEW" tag */}
              <div className="absolute top-4 right-4 bg-white text-navy-900 text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VIEW
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleGalleryNavigation('prev')}
            className="p-3 bg-navy-600 text-white rounded-full hover:bg-navy-700 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleGalleryNavigation('next')}
            className="p-3 bg-navy-600 text-white rounded-full hover:bg-navy-700 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Lightbox Viewer */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-navy-900/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white hover:text-blue-300 z-10 p-3 bg-navy-800/80 rounded-full hover:scale-110 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white p-12 rounded-2xl text-center">
              <div className="mb-8 flex justify-center">
                {lightboxImage.src.startsWith("/") ? (
                  <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="w-56 h-56 sm:w-60 sm:h-60 object-contain rounded-xl shadow-xl bg-white p-2"
                  />
                ) : (
              <span className="text-9xl">{lightboxImage.src}</span>
                )}
            </div>
              <div className="text-navy-600 font-semibold text-lg mb-2">{lightboxImage.brand}</div>
              <h3 className="text-3xl font-bold text-navy-900 mb-4">{lightboxImage.alt}</h3>
              <p className="text-xl text-navy-600">{lightboxImage.type}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
