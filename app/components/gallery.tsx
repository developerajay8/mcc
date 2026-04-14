"use client";
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: '/classroom1.jpg', alt: 'Modern Classroom', category: 'Classroom' },
    { src: '/lab1.jpg', alt: 'Science Laboratory', category: 'Laboratory' },
    { src: '/library1.jpg', alt: 'Well-stocked Library', category: 'Library' },
    { src: '/students1.jpg', alt: 'Students in Class', category: 'Students' },
    { src: '/event1.jpg', alt: 'Annual Function', category: 'Events' },
    { src: '/sports1.jpg', alt: 'Sports Activities', category: 'Sports' },
    { src: '/campus1.jpg', alt: 'Campus View', category: 'Campus' },
    { src: '/faculty1.jpg', alt: 'Faculty Interaction', category: 'Faculty' },
    { src: '/competition1.jpg', alt: 'Science Competition', category: 'Events' },
  ];

  const openModal = (index: number) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#024b6f] mb-4">
            Our <span className="text-[#d63137]">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into the vibrant learning environment and memorable moments at MCC Classes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-linear-to-br from-[#024b6f] to-[#d63137] flex items-center justify-center">
                <div className="text-6xl text-white font-bold">
                  {image.category[0]}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{image.category}</h3>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-linear-to-br from-[#024b6f] to-[#d63137] rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-8xl text-white font-bold">
                    {selectedImage.category[0]}
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaChevronLeft />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaChevronRight />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaTimes />
                  </motion.button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white text-xl font-bold mb-2">{selectedImage.category}</h3>
                  <p className="text-white/80">{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}