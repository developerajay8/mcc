'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function GalleryCategories() {
  const categories = [
    {
      title: 'Classroom Excellence',
      description: 'Explore our state-of-the-art classrooms where learning comes alive with expert guidance.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop',
      stats: '50+ Classes',
    },
    {
      title: 'Student Achievement',
      description: 'Celebrate the remarkable success stories of our dedicated and hardworking students.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      stats: '5000+ Success Stories',
    },
    {
      title: 'Community Events',
      description: 'Experience the vibrant community through our exciting events and gatherings.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=500&fit=crop',
      stats: '100+ Events Annually',
    },
    {
      title: 'Online Platform',
      description: 'Access world-class education from the comfort of your home with our digital learning platform.',
      image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=800&h=500&fit=crop',
      stats: '24/7 Access',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute -left-12 top-32 h-64 w-64 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Featured Sections</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Explore Our Gallery Categories
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Dive deeper into each category to discover the rich tapestry of MCC Classes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 relative overflow-hidden rounded-[32px] h-80 shadow-2xl shadow-[#020d20]/40"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8c42]/30 via-transparent to-[#ffb26a]/30" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">{category.description}</p>
                <div className="flex items-center justify-between bg-[#0c1c3b]/90 border border-white/10 rounded-[20px] p-6 mb-8">
                  <span className="text-[#ffb26a] font-semibold">{category.stats}</span>
                  <div className="w-12 h-12 rounded-full bg-[#ff8c42]/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#ff8c42]" />
                  </div>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-[#ff8c42] text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-[#ffb26a] transition"
                >
                  Explore This Category
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
