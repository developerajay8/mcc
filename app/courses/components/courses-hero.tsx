'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUsers, FaAward } from 'react-icons/fa';

export default function CoursesHero() {
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our Courses</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Comprehensive Learning Programs
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Choose from our wide range of expertly designed courses tailored to help you excel in your academic goals.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: FaBook,
              title: 'Expert Curriculum',
              desc: 'Carefully designed course materials by experienced educators covering all essential topics.',
            },
            {
              icon: FaUsers,
              title: 'Live Classes',
              desc: 'Interactive live sessions with direct access to experienced instructors and peer learning.',
            },
            {
              icon: FaAward,
              title: 'Proven Results',
              desc: 'Track record of student success with consistently high exam scores and achievements.',
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
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#ff8c42]/20 to-[#ffb26a]/20 p-10 shadow-2xl shadow-[#020d20]/40"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Start Your Learning Journey</h3>
            <p className="text-slate-300 mb-8 max-w-2xl">
              Join thousands of students who have transformed their academic performance through our comprehensive and personalized courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff8c42] text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-[#ffb26a] transition">
                Explore Courses
              </button>
              <button className="border-2 border-[#ff8c42] text-[#ffb26a] px-8 py-4 rounded-full font-bold hover:bg-[#ff8c42]/10 transition">
                Get Free Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
