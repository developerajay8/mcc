'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUserGraduate, FaChalkboardTeacher, FaCertificate, FaClock, FaHandshake } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: FaLightbulb,
      title: 'Specialized Commerce Coaching',
      description: 'Focused classes for CA Foundation, CMA, XI-XII Commerce, and CUET.',
    },
    {
      icon: FaUserGraduate,
      title: 'Expert Faculty',
      description: 'Experienced tutors with strong industry and teaching credentials.',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Personalized Mentorship',
      description: 'Small batches and one-to-one support for every student.',
    },
    {
      icon: FaCertificate,
      title: 'Proven Results',
      description: 'Consistent toppers and high exam scores every year.',
    },
    {
      icon: FaClock,
      title: 'Flexible Schedules',
      description: 'Morning, evening and weekend batches made to fit your routine.',
    },
    {
      icon: FaHandshake,
      title: 'Trusted Support',
      description: 'Career guidance, doubt-solving and revision workshops included.',
    },
  ];

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-[#08162f] pb-20">
      <div className="absolute left-0 top-16 h-44 w-44 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Why choose us</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:leading-17">
            Specialized Commerce Coaching
Focused classes for Ca, CMA, XI-XII Commerce
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            We combine industry-focused coaching, exam-ready study plans and personalised mentoring to drive your highest results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0f294f]/90 p-8 shadow-2xl shadow-[#020d20]/40"
            >
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
              <div className="absolute right-8 top-6 h-16 w-16 rounded-full bg-[#ffb26a]/20 blur-2xl" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#ff8c42]/15 text-2xl text-[#ffb26a]">
                  <feature.icon />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>

              <div className="absolute inset-x-8 bottom-8 h-px bg-white/10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#e3c8b6] p-10 shadow-2xl shadow-[#020d20]/40">
            <div className="absolute -left-16 top-8 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
            <div className="absolute right-8 top-10 h-20 w-20 rounded-full bg-[#ffb26a]/20 blur-2xl" />

            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <p className="text-sm uppercase tracking-[0.35em]">Start your success story</p>
              <h3 className="text-3xl font-bold text-[#06102d] sm:text-4xl">The best choice for commerce students</h3>
              <p className="max-w-2xl text-base text-[#574f5a] sm:text-lg">
                Join Mahendra Commerce Classes and get expert mentorship, regular tests, doubt solving and exam-focused coaching for top results.
              </p>
              <button className="inline-flex items-center justify-center rounded-full bg-[#ff8c42] px-10 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#ff9b34]">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
