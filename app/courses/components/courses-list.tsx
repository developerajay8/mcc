'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaClock, FaGraduationCap } from 'react-icons/fa';

export default function CoursesList() {
  const courses = [
    {
      id: 1,
      title: 'CMA Foundation',
      shortDesc: 'Master Cost and Management Accounting fundamentals with expert guidance.',
      duration: '6 months',
      students: '320+',
      level: 'Foundation',
      description: 'Comprehensive CMA Foundation program covering fundamentals of accounting, cost accounting, management principles and economic principles.',
      features: ['Accounting Basics', 'Cost Management', 'Economics Fundamentals', 'Regular Test Series'],
    },
    {
      id: 2,
      title: 'CMA Inter',
      shortDesc: 'Advanced CMA Intermediate coaching with focus on costing and financial management.',
      duration: '7 months',
      students: '280+',
      level: 'Inter',
      description: 'Intensive CMA Intermediate preparation covering costing techniques, financial management, operations management and strategic management.',
      features: ['Advanced Costing', 'Financial Management', 'Operations & Strategy', 'Mock Exams'],
    },
    {
      id: 3,
      title: 'CMA Final',
      shortDesc: 'Professional CMA Final preparation for career excellence.',
      duration: '8 months',
      students: '200+',
      level: 'Final',
      description: 'Comprehensive CMA Final coaching with in-depth analysis of financial analysis, management accounting and strategic cost management.',
      features: ['Case Studies', 'Advanced Accounting', 'Strategic Management', 'Industry Practice'],
    },
    {
      id: 4,
      title: 'CA Foundation',
      shortDesc: 'Complete CA Foundation coaching for accounting excellence.',
      duration: '4.5 months',
      students: '450+',
      level: 'Foundation',
      description: 'Structured CA Foundation program covering fundamentals of accounting, business law, economics and quantitative aptitude.',
      features: ['Accounts Mastery', 'Business Law', 'Economics Principles', 'Quantitative Skills'],
    },
    {
      id: 5,
      title: 'CA Inter',
      shortDesc: 'Advanced CA Intermediate coaching with audit and tax expertise.',
      duration: '9 months',
      students: '380+',
      level: 'Inter',
      description: 'Comprehensive CA Intermediate preparation including advanced accounting, auditing, taxation and corporate laws.',
      features: ['Advanced Accounting', 'Auditing Principles', 'Tax Planning', 'Regulatory Compliance'],
    },
    {
      id: 6,
      title: 'CA Final',
      shortDesc: 'Professional CA Final program for accounting mastery.',
      duration: '12 months',
      students: '220+',
      level: 'Final',
      description: 'Final stage CA preparation with advanced financial accounting, auditing, tax law and professional ethics.',
      features: ['Advanced Accounting', 'Advanced Auditing', 'Advanced Tax', 'Audit Practice'],
    },
    {
      id: 7,
      title: '11th Commerce',
      shortDesc: 'Class XI commerce coaching for CBSE, RBSE, ICSE streams.',
      duration: '12 months',
      students: '420+',
      level: 'Board',
      description: 'Complete Class XI commerce curriculum including Accounts, Economics, Business Studies and Computer Science with board exam strategy.',
      features: ['Weekly Tests', 'Doubt Clearing', 'Board Prep', 'Unit Tests'],
    },
    {
      id: 8,
      title: '12th Commerce',
      shortDesc: 'Class XII commerce coaching with board exam mastery.',
      duration: '12 months',
      students: '480+',
      level: 'Board',
      description: 'Comprehensive Class XII commerce program covering Accounts, Economics, Business Studies, Computer Science and exam-focused preparation.',
      features: ['Board Exam Strategy', 'Sample Papers', 'Performance Review', 'Last Minute Prep'],
    },
    {
      id: 9,
      title: '11th + 12th Commerce',
      shortDesc: 'Two-year commerce program combining 11th and 12th curriculum.',
      duration: '24 months',
      students: '350+',
      level: 'Board',
      description: 'Integrated two-year commerce coaching covering complete XI and XII curriculum with progressive learning and board exam mastery.',
      features: ['Integrated Curriculum', 'Progressive Learning', 'Complete Coverage', 'Career Counseling'],
    },
    {
      id: 10,
      title: '11th + 12th + CA Foundation',
      shortDesc: 'Combined program: Board + CA Foundation for career acceleration.',
      duration: '28 months',
      students: '180+',
      level: 'Advanced',
      description: 'Integrated program combining XI-XII commerce with CA Foundation, providing seamless transition from board to professional accounting.',
      features: ['Board + CA Foundation', 'Integrated Approach', 'Career Acceleration', 'Professional Ready'],
    },
    {
      id: 11,
      title: '11th + 12th + CMA Foundation',
      shortDesc: 'Complete program: Board + CMA Foundation for cost accounting mastery.',
      duration: '28 months',
      students: '150+',
      level: 'Advanced',
      description: 'Comprehensive program combining XI-XII commerce with CMA Foundation, building strong foundation in both board and cost accounting.',
      features: ['Board Coverage', 'CMA Foundation', 'Dual Expertise', 'Career Path Guidance'],
    },
    {
      id: 12,
      title: '12th + CMA Foundation',
      shortDesc: 'XII commerce with CMA Foundation for professional readiness.',
      duration: '16 months',
      students: '200+',
      level: 'Advanced',
      description: 'Combined XII commerce and CMA Foundation program for students aiming for cost accounting career after board exams.',
      features: ['Board Exam Focus', 'CMA Fundamentals', 'Professional Prep', 'Career Guidance'],
    },
    {
      id: 13,
      title: '12th + CA Foundation',
      shortDesc: 'Class XII commerce with CA Foundation for accounting professionals.',
      duration: '16 months',
      students: '280+',
      level: 'Advanced',
      description: 'Integrated XII commerce and CA Foundation program providing complete board curriculum with early professional accounting training.',
      features: ['XII Commerce Complete', 'CA Foundation Start', 'Professional Ready', 'Fast Track Path'],
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
