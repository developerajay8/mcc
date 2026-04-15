'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Team() {
  const teachers = [
    {
      name: 'Rahul Singh',
      experience: '5+ years in CA coaching',
      image: '/nk.png',
    },
    {
      name: 'Priya Sharma',
      experience: '7+ years in CMA training',
      image: '/keshove.png',
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachers.length);
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, [teachers.length]);

  const nextTeacher = () => setCurrentIndex((prev) => (prev + 1) % teachers.length);
  const prevTeacher = () => setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);

  return (
    <section id="team" className="relative overflow-hidden bg-[#08162f] py-20 text-white">
      <div className="absolute left-0 top-16 h-44 w-44 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our Team</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Meet Our Expert Teachers
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Our experienced faculty members are dedicated to providing top-notch commerce education and guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0f294f]/90 p-8 shadow-2xl shadow-[#020d20]/40"
        >
          <div className="absolute top-6 left-6 h-24 w-24 rounded-full bg-[#ff8c42]/15 blur-3xl" />
          <div className="absolute right-6 top-10 h-20 w-20 rounded-full bg-[#ffb26a]/10 blur-3xl" />

          <div className="relative">
            <button
              type="button"
              onClick={prevTeacher}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={nextTeacher}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowRight />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-shrink-0">
                <img
                  src={teachers[currentIndex].image}
                  alt={teachers[currentIndex].name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#ff8c42]"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">{teachers[currentIndex].name}</h3>
                <p className="text-lg text-[#ffb26a] mb-4">{teachers[currentIndex].experience}</p>
                <p className="text-slate-300">
                  Dedicated to excellence in commerce education, helping students achieve their goals through personalized guidance and expert knowledge.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {teachers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-[#ff8c42]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}