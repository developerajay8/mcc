'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaTrophy, FaBookOpen } from 'react-icons/fa';

export default function AboutStats() {
  const stats = [
    { icon: FaUsers, label: 'Active Students', value: '5000+' },
    { icon: FaAward, label: 'Expert Teachers', value: '50+' },
    { icon: FaTrophy, label: 'Success Rate', value: '95%' },
    { icon: FaBookOpen, label: 'Courses Offered', value: '25+' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20 text-white">
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">By The Numbers</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Our Achievements</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[12px] border border-white/10 bg-gradient-to-br from-[#0c1c3b] to-[#08162f] p-8 shadow-2xl shadow-[#020d20]/40"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#ff8c42]/10 rounded-bl-[40px]" />
              <div className="relative z-10">
                <div className="bg-[#ff8c42]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <stat.icon className="text-[#ffb26a] text-3xl" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-2"
                >
                  <p className="text-4xl font-bold text-[#ffb26a]">{stat.value}</p>
                </motion.div>
                <p className="text-slate-300 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
