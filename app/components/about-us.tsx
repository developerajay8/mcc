'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaEye, FaBullseye, FaAward } from 'react-icons/fa';

export default function AboutUs() {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Students Taught' },
    { number: '50+', label: 'Expert Faculty' },
    { number: '95%', label: 'Success Rate' },
  ];

  const highlights = [
    {
      icon: FaHistory,
      title: 'Rich Experience',
      description: 'A decade of trusted commerce coaching for ambitious learners.',
    },
    {
      icon: FaEye,
      title: 'Clear Focus',
      description: 'Curriculum designed for boards and professional exams.',
    },
    {
      icon: FaBullseye,
      title: 'Targeted Success',
      description: 'Personalized mentoring to hit your academic goals fast.',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#08162f] pb-20 text-white">
      <div className="absolute left-0 top-16 h-52 w-52 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">About Us</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Learn more about <span className="text-[#ffb26a]">MCC Classes</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            We deliver premium commerce coaching for CA, CMA and class XI-XII students with expert faculty and performance-driven teaching.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0f294f]/90 md:p-10 p-4 shadow-2xl shadow-[#020d20]/50"
          >
            <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
            <div className="absolute right-10 top-6 h-16 w-16 rounded-full bg-[#ffb26a]/20 blur-2xl" />

            <div className="relative z-10 space-y-8">
              <div className="rounded-[12px] border border-white/10 bg-white/5 md:p-8 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our story</p>
                <h3 className="mt-4 text-3xl font-bold text-white">Trusted commerce coaching</h3>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Since 2013, MCC Classes has helped thousands of students achieve top performance in commerce boards and professional exams. Our classes pair experienced mentors with modern, outcome-focused study programs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-[16px] border border-white/10 bg-white/5 p-6"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff8c42]/15 text-2xl text-[#ffb26a] mb-4">
                      <item.icon />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0f294f]/90 p-8 text-center shadow-2xl shadow-[#020d20]/40"
              >
                <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-[#ff8c42]/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-[#ffb26a]">{stat.number}</div>
                  <div className="mt-3 text-slate-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#e3c8b6] p-10 shadow-2xl shadow-[#020d20]/40">
            <div className="absolute left-10 top-8 h-24 w-24 rounded-full bg-[#ff8c42]/15 blur-3xl" />
            <div className="absolute right-10 bottom-8 h-20 w-20 rounded-full bg-[#ffb26a]/20 blur-2xl" />
            <div className="relative z-10 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-black">Recognition</p>
              <h3 className="mt-4 text-3xl font-bold text-[#06102d]">Awarded for excellence in commerce education</h3>
              <p className="mx-auto mt-4 max-w-2xl text-[#574f5a] leading-relaxed">
                Recognized by students and industry experts, MCC Classes excels in coaching commerce aspirants for board exams, professional certifications, and competitive entry tests.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  'Best Commerce Coaching 2023',
                  'Top Result Achievement Award',
                  'Outstanding Student Support',
                ].map((award) => (
                  <div key={award} className="rounded-[32px] border border-white/10 bg-[#06102d] p-5 text-left">
                    <div className="flex items-center gap-3">
                      <FaAward className="text-[#ffb26a] text-2xl" />
                      <p className="text-sm font-semibold text-white">{award}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
