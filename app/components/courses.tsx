'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaClock, FaUsers, FaStar } from 'react-icons/fa';

export default function Courses() {
  const courses = [
    {
      title: 'CA Foundation Coaching',
      description: 'Focused classes for CA Foundation with problem-solving drills and full syllabus coverage.',
      duration: '9 months',
      students: 320,
      rating: 4.9,
      icon: FaBook,
    },
    {
      title: 'CMA Foundation Mastery',
      description: 'Structured coaching for CMA Foundation, including theory, practicals and revision tests.',
      duration: '8 months',
      students: 260,
      rating: 4.8,
      icon: FaBook,
    },
    {
      title: 'CMA Inter Accelerator',
      description: 'Accelerated training for CMA Intermediate with exam strategy and time management.',
      duration: '6 months',
      students: 190,
      rating: 4.9,
      icon: FaBook,
    },
    {
      title: 'XI-XII Commerce Board Success',
      description: 'Commerce classes for XI-XII with Accounts, Economics, Business Studies and Computer.',
      duration: '12 months',
      students: 410,
      rating: 4.9,
      icon: FaBook,
    },
    {
      title: 'CUET / Commerce Entrance Prep',
      description: 'High-impact coaching for CUET and university commerce entrance exams.',
      duration: '5 months',
      students: 145,
      rating: 4.8,
      icon: FaBook,
    }
  ];

  return (
    <section id="courses" className="py-20 bg-[#08162f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#ffb26a]">Commerce</span> Programs
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tailored coaching for CA, CMA, CUET and XI-XII commerce students with expert faculty and proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0f294f]/90 p-6 shadow-2xl shadow-[#020d20]/40"
            >
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
              <div className="absolute right-8 top-6 h-16 w-16 rounded-full bg-[#ffb26a]/20 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#ff8c42]/15 text-2xl text-[#ffb26a]">
                  <course.icon />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{course.title}</h3>
                <p className="mb-6 text-slate-300">{course.description}</p>

                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-white/5 p-4">
                    <FaClock className="text-[#ffb26a]" />
                    <div>
                      <p className="text-sm text-slate-300">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-white/5 p-4">
                    <FaUsers className="text-[#ffb26a]" />
                    <div>
                      <p className="text-sm text-slate-300">{course.students} students</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-slate-300 font-semibold">{course.rating}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-[#ff8c42] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#ff9b34]"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 140, 66, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#ff8c42] px-10 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-[#ff8c42]/25 transition hover:bg-[#ff9b34]"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}