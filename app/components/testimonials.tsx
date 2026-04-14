'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amina Khan',
      role: 'Class 12 Student',
      date: 'Apr 20, 2024',
      rating: 4.9,
      quote: 'MCC Classes helped me prepare for boards with confidence. The live classes and teacher support made all the difference in my success.',
      initials: 'AK',
    },
    {
      name: 'Imran Siddiqui',
      role: 'JEE Aspirant',
      date: 'May 15, 2024',
      rating: 4.9,
      quote: 'The teaching style is clear and focused. I improved my problem solving and timing through daily practice sessions. Highly recommended!',
      initials: 'IS',
    },
    {
      name: 'Sana Raza',
      role: 'NEET Student',
      date: 'Jun 01, 2024',
      rating: 4.9,
      quote: 'Personalized doubt clearing and regular tests gave me the confidence to score high. MCC Classes is the best choice for serious learners.',
      initials: 'SR',
    },
    {
      name: 'Rahul Sharma',
      role: 'Class 10 Student',
      date: 'Jul 10, 2024',
      rating: 4.8,
      quote: 'The interactive sessions and study materials are top-notch. I scored 95% in my exams thanks to MCC Classes guidance.',
      initials: 'RS',
    },
    {
      name: 'Priya Patel',
      role: 'NEET Aspirant',
      date: 'Aug 05, 2024',
      rating: 4.9,
      quote: 'Excellent faculty and structured curriculum. The mock tests really helped me understand my strengths and weaknesses.',
      initials: 'PP',
    },
    {
      name: 'Vikram Singh',
      role: 'JEE Student',
      date: 'Sep 12, 2024',
      rating: 4.9,
      quote: 'MCC Classes transformed my approach to competitive exams. The mentors are knowledgeable and always available for support.',
      initials: 'VS',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#08162f] py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#08162f] to-transparent" />
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#ff8c42]/20 blur-3xl" />
      <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">What our students say</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Our Trusted Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Real results, real progress — hear from students who achieved more with MCC Classes.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {visibleTestimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-[#020d20]/30"
            >
              <div className=" rounded-full w-[80] border-4 border-[#08162f] bg-[#0f294f]/90 p-5 text-xl font-bold text-center text-white shadow-lg shadow-black/20">
                {item.initials}
              </div>
              <div className="absolute top-12 right-8 rounded-3xl bg-[#ff8c42]/10 px-4 py-2 text-sm font-semibold text-[#ffb26a] backdrop-blur-md border border-[#ff8c42]/20">
                <FaStar className="inline mr-2 text-[#ffde6a]" /> {item.rating}
              </div>

              <div className="mt-16 pt-4">
                <FaQuoteLeft className="text-[#ffb26a] text-3xl opacity-80 mb-6" />
                <p className="text-base leading-relaxed text-slate-200">"{item.quote}"</p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-2">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-4 text-slate-200">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonials}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#ff8c42]/15"
          >
            <FaChevronLeft />
          </motion.button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <span
                key={i}
                className={`block h-2 w-8 rounded-full cursor-pointer transition ${
                  i === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonials}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#ff8c42]/15"
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
