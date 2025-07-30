import React, { useState } from 'react';
import { gallery } from '../data/mock';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from './ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % gallery.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(gallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(gallery[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            GALERIA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Momentos marcantes da trajetória musical de Ricardo POP
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {gallery.map((image, index) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300">
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium mb-2">{image.caption}</p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="flex flex-col items-center justify-center max-w-full max-h-full">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Caption */}
                <div className="mt-6 text-center">
                  <p className="text-white text-lg font-medium">{selectedImage.caption}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {currentIndex + 1} de {gallery.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;