'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function AboutJourney() {
  const milestones = [
    { year: '2015', title: 'Founding', desc: 'MCC Classes founded with a vision to revolutionize education' },
    { year: '2017', title: '1000+ Students', desc: 'Reached milestone of 1000 enrolled students' },
    { year: '2019', title: 'Online Platform', desc: 'Launched comprehensive online learning platform' },
    { year: '2023', title: '5000+ Success Stories', desc: 'Celebrated 5000+ successful student admissions' },
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our Journey</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">A Journey of Excellence</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            From humble beginnings to becoming a trusted educational institution
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff8c42] to-[#ffb26a]" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40"
                  >
                    <p className="text-3xl font-bold text-[#ffb26a] mb-2">{milestone.year}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-slate-300">{milestone.desc}</p>
                  </motion.div>
                </div>

                <div className="w-0 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-[#08162f] border-4 border-[#ff8c42] rounded-full flex items-center justify-center"
                  >
                    <FaCheckCircle className="text-[#ffb26a] text-xl" />
                  </motion.div>
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
