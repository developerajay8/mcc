'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaClock, FaGraduationCap } from 'react-icons/fa';

export default function CoursesList() {
  const courses = [
    {
      id: 1,
      title: 'Quran Memorization (Hifz)',
      shortDesc: 'Complete Quranic memorization with tajweed guidance',
      duration: '2-3 years',
      students: '1,200+',
      level: 'All Levels',
      description: 'A comprehensive program for students aiming to memorize the entire Quran with proper pronunciation and Tajweed rules.',
      features: ['Personal guidance', 'Daily practice sessions', 'Certification'],
    },
    {
      id: 2,
      title: 'Islamic Studies',
      shortDesc: 'Deep understanding of Islamic principles and teachings',
      duration: '1-2 years',
      students: '900+',
      level: 'Intermediate',
      description: 'Explore foundational Islamic knowledge covering theology, jurisprudence, and Islamic history.',
      features: ['Structured curriculum', 'Expert instructors', 'Interactive classes'],
    },
    {
      id: 3,
      title: 'Arabic Language',
      shortDesc: 'Modern and classical Arabic for Quranic understanding',
      duration: '1 year',
      students: '750+',
      level: 'All Levels',
      description: 'Learn Arabic language skills essential for understanding Quranic texts and Islamic literature.',
      features: ['Spoken Arabic', 'Grammar mastery', 'Quran-focused'],
    },
    {
      id: 4,
      title: 'Tajweed Intensive',
      shortDesc: 'Master the rules of Quranic recitation',
      duration: '6 months',
      students: '650+',
      level: 'Beginner',
      description: 'In-depth study of Tajweed rules with practical application and daily recitation practice.',
      features: ['Live sessions', 'One-on-one feedback', 'Certification exam'],
    },
    {
      id: 5,
      title: 'Kids Islamic Education',
      shortDesc: 'Engaging Islamic learning for young students',
      duration: 'Ongoing',
      students: '2,100+',
      level: 'Kids (5-12)',
      description: 'Fun and interactive Islamic education program designed specifically for children with engaging methods.',
      features: ['Gamified learning', 'Story-based teaching', 'Progress tracking'],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Courses</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Our Featured Courses
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1c3b]/90 shadow-2xl shadow-[#020d20]/40 hover:border-[#ff8c42]/30 transition-all"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#ff8c42]/15 blur-3xl" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-[#ffb26a] text-sm font-medium">{course.level}</p>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="bg-[#ff8c42] text-slate-950 p-3 rounded-full hover:bg-[#ffb26a] transition"
                  >
                    <FaArrowRight />
                  </motion.button>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed">{course.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-[#ffb26a] mb-2">
                      <FaClock className="text-lg" />
                      <span className="text-xs uppercase tracking-wide font-semibold">Duration</span>
                    </div>
                    <p className="text-white font-bold text-lg">{course.duration}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-[#ffb26a] mb-2">
                      <FaUsers className="text-lg" />
                      <span className="text-xs uppercase tracking-wide font-semibold">Students</span>
                    </div>
                    <p className="text-white font-bold text-lg">{course.students}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-[#ffb26a] mb-2">
                      <FaGraduationCap className="text-lg" />
                      <span className="text-xs uppercase tracking-wide font-semibold">Status</span>
                    </div>
                    <p className="text-white font-bold text-lg">Active</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {course.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[#ff8c42]/20 text-[#ffb26a] px-4 py-2 rounded-full text-sm font-medium border border-[#ff8c42]/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-[#ff8c42] text-slate-950 py-3 rounded-xl font-bold hover:bg-[#ffb26a] transition">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
