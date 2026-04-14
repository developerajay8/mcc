'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart } from 'react-icons/fa';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#08162f] pb-20 pt-40 text-white">
      {/* <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-[#ff8c42]/15 blur-3xl" /> */}
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">About MCC Classes</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Our Story, Our Values</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Building excellence in education, empowering students to achieve their dreams one class at a time.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: FaEye,
              title: 'Our Mission',
              desc: 'To provide quality education that empowers students with knowledge, skills, and confidence to excel in their academic and professional lives.',
            },
            {
              icon: FaEye,
              title: 'Our Vision',
              desc: 'To be the leading educational institute known for innovative teaching methods, exceptional results, and holistic student development.',
            },
            {
              icon: FaHeart,
              title: 'Our Commitment',
              desc: 'We are committed to personalized learning, continuous improvement, and creating an environment where every student can thrive and succeed.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40"
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
          className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1c3b]/90 p-10 shadow-2xl shadow-[#020d20]/40"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose MCC Classes?</h3>
              <ul className="space-y-4">
                {[
                  'Expert faculty with proven track record',
                  'Personalized learning approach for every student',
                  'Comprehensive study materials and resources',
                  'Regular assessments and mock tests',
                  'Flexible online and offline classes',
                  ' 24/7 doubt clearing support',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-[#ff8c42]/20 p-2 rounded-lg mt-1">
                      <div className="w-2 h-2 bg-[#ffb26a] rounded-full" />
                    </div>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0f294f] via-[#112d58] to-[#08162f] rounded-[16px] p-10">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80 mb-4">Trusted by</p>
                <p className="text-5xl font-bold text-white mb-4">5000+</p>
                <p className="text-slate-300">Students & Counting</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
