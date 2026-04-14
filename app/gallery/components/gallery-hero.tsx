'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPlayCircle, FaHeart } from 'react-icons/fa';

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#08162f] pb-20 pt-40 text-white">
      <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our Gallery</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Moments of Learning & Growth
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Explore the vibrant community of MCC Classes. See our classrooms, events, and the success stories of our students.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: FaCamera,
              title: 'High-Quality Photos',
              desc: 'Professional photography capturing authentic moments from our classes and events.',
            },
            {
              icon: FaPlayCircle,
              title: 'Video Testimonials',
              desc: 'Watch real student testimonials and success stories shared by our amazing alumni.',
            },
            {
              icon: FaHeart,
              title: 'Community Spirit',
              desc: 'Celebrate the bonds and memories created within our inclusive learning community.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40"
            >
              <div className="bg-[#ff8c42]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="text-[#ffb26a] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-300 mb-8 text-lg">
            Browse through our extensive collection of moments and memories below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
