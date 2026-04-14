'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

export default function GalleryGrid() {
  const galleries = [
    { id: 1, title: 'Classroom Sessions', category: 'Classes', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=400&fit=crop', students: '150+' },
    { id: 2, title: 'Student Success Stories', category: 'Success', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', students: '200+' },
    { id: 3, title: 'Annual Events', category: 'Events', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop', students: '300+' },
    { id: 4, title: 'Commerce Study Groups', category: 'Classes', image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=400&fit=crop', students: '120+' },
    { id: 5, title: 'Community Gatherings', category: 'Community', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop', students: '250+' },
    { id: 6, title: 'Graduation Ceremonies', category: 'Success', image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop', students: '180+' },
    { id: 7, title: 'Online Learning Sessions', category: 'Classes', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', students: '400+' },
    { id: 8, title: 'Mentorship Programs', category: 'Community', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', students: '95+' },
    { id: 9, title: 'Cultural Events', category: 'Events', image: 'https://images.unsplash.com/photo-1519671482677-504be0271ff5?w=500&h=400&fit=crop', students: '350+' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Classes', 'Success', 'Events', 'Community'];

  const filteredGalleries =
    selectedCategory === 'All'
      ? galleries
      : galleries.filter((g) => g.category === selectedCategory);

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Gallery Collection</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-[#ff8c42] text-slate-950'
                  : 'border-2 border-[#ff8c42] text-[#ffb26a] hover:bg-[#ff8c42]/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {filteredGalleries.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[28px] h-80 shadow-2xl shadow-[#020d20]/40"
            >
              <img
                src={gallery.image}
                alt={gallery.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#08162f] via-transparent to-[#08162f]/20" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="text-right">
                  <span className="inline-block bg-[#ff8c42]/90 text-slate-950 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
                    {gallery.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ffb26a] transition">
                    {gallery.title}
                  </h3>
                  <p className="text-[#ffb26a] font-semibold flex items-center gap-2">
                    <FaSearch className="text-lg" />
                    {gallery.students} Participants
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-[#ff8c42]/80 flex items-center justify-center"
              >
                <button className="bg-white text-[#08162f] px-8 py-3 rounded-full font-bold hover:bg-[#ffb26a] transition">
                  View More
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
