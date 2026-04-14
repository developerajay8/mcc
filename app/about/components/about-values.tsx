'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaGraduationCap, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

export default function AboutValues() {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      desc: 'We embrace modern teaching methods and technology to enhance learning experiences for our students.',
      color: 'from-[#ff8c42] to-[#ffb26a]',
    },
    {
      icon: FaGraduationCap,
      title: 'Excellence',
      desc: 'We strive for excellence in every aspect of education and are committed to continuous improvement.',
      color: 'from-[#ffb26a] to-[#ff8c42]',
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      desc: 'We maintain highest standards of honesty, transparency, and ethical practices in all our operations.',
      color: 'from-[#ff8c42] to-[#ffb26a]',
    },
    {
      icon: FaHandsHelping,
      title: 'Care & Support',
      desc: 'We genuinely care about each student and provide personalized guidance and support always.',
      color: 'from-[#ffb26a] to-[#ff8c42]',
    },
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Core Values</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">What We Stand For</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Our core values guide every decision we make and shape our commitment to excellence
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40"
            >
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-3 mb-6 flex items-center justify-center`}
                >
                  <value.icon className="text-slate-950 text-3xl" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
