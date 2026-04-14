'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function CoursesTestimonials() {
  const testimonials = [
    {
      name: 'Zainab Ahmed',
      course: 'Quran Memorization',
      text: 'MCC Classes helped me memorize 15 Juz in just 8 months. The structured approach and dedicated instructors made it possible!',
      rating: 5,
      avatar: 'Z',
    },
    {
      name: 'Hassan Khan',
      course: 'Tajweed Intensive',
      text: 'The tajweed course completely transformed my recitation. Now I can recite with confidence and accuracy. Highly recommended!',
      rating: 5,
      avatar: 'H',
    },
    {
      name: 'Fatima Malik',
      course: 'Islamic Studies',
      text: 'Excellent comprehensive curriculum that covers all aspects of Islamic knowledge. The instructors are very knowledgeable.',
      rating: 5,
      avatar: 'F',
    },
    {
      name: 'Abdul Rahman',
      course: 'Arabic Language',
      text: 'Finally I can understand the Quran in Arabic! The lessons are clear and the teachers are patient and supportive.',
      rating: 5,
      avatar: 'A',
    },
    {
      name: 'Aisha Noor',
      course: 'Kids Islamic Education',
      text: 'My son loves the interactive classes! He has learned so much while having fun. Great program for children.',
      rating: 5,
      avatar: 'A',
    },
    {
      name: 'Muhammad Farooq',
      course: 'Quran Memorization',
      text: 'The personalized approach and flexible schedule made it easy for me to balance work and studies. Thank you MCC!',
      rating: 5,
      avatar: 'M',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const displayedTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Student Reviews</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Success Stories From Our Students
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            See what our students have achieved through our comprehensive course programs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40 hover:border-[#ff8c42]/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff8c42]/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8c42]/30 text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#ffb26a] text-sm" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-[#ffb26a] text-sm font-medium">{testimonial.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handlePrev}
            className="h-12 w-12 rounded-full border border-white/20 bg-white/5 text-[#ffb26a] hover:border-[#ff8c42] hover:bg-[#ff8c42]/20 transition flex items-center justify-center"
          >
            <FaArrowLeft />
          </motion.button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 rounded-full transition ${
                  i === currentIndex ? 'bg-[#ff8c42] w-8' : 'bg-white/20 w-3 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleNext}
            className="h-12 w-12 rounded-full border border-white/20 bg-white/5 text-[#ffb26a] hover:border-[#ff8c42] hover:bg-[#ff8c42]/20 transition flex items-center justify-center"
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
