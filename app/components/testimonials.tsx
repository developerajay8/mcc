'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Tanushka gupta',
      role: 'CA and CMA ',
      date: '',
      rating: 4.9,
      quote: 'The best commerce class I seen ever for CA and CMA course , the facilities of this institute is very best lovely teachers These institutes promise to help children reach their goals Do visit Mahendra Commerce Class once👍',
      initials: 'TG',
    },
    {
      name: 'Seema Singh',
      role: 'CA Foundation',
      date: '',
      rating: 4.9,
      quote: 'Agar aapko CA Foundation coaching near me chahiye, toh Mahendra Commerce Classes best hai. Yahan ke teachers har topic ko thoroughly explain karte hain aur regular tests bhi lete ha...',
      initials: 'SG',
    },
    {
      name: 'Priya Rajawat',
      role: 'CA foundation',
      date: '',
      rating: 4.9,
      quote: 'The CA foundation classes at Mahindra commerce classes are excellent. The teacher explain everything so clearly, even the tough topics.',
      initials: 'PR',
    },
    {
      name: 'Nandani Sharma',
      role: 'Class 12 commerce',
      date: '',
      rating: 4.8,
      quote: 'mahendra commecre classes sanganer ka best institute haii...agr aap chate hai ki aapka future bright ho toh aap mahendra commerce classes join kre..yha ki facilities best hai..teachers bhii best..agar aap sach me chahte hai aapka future bright ho toh aap MAHENDRA COMMERCE CLASSES join kree👍🏻',
      initials: 'NS',
    },
    {
      name: 'Sanjay Patel',
      role: 'CMA coaching',
      date: '',
      rating: 4.9,
      quote: 'I was looking for CMA coaching near me,and Mahendra commerce classes was the perfect choice.The teachers are amazing and really helped me understand the concepts.',
      initials: 'SP',
    },
    {
      name: 'Hansa Bhomia',
      role: 'MCC Classes',
      date: '',
      rating: 4.9,
      quote: 'MCC is one of the best institution in the field of education.The faculty of the institute is very knowledgeable & good in nature.I recommend everyone to visit once before taking admission anywhere',
      initials: 'HB',
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
            Our Trusted Students Testimonials
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
