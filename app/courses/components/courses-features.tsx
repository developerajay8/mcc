'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaVideo, FaHeadset, FaChartLine } from 'react-icons/fa';

export default function CoursesFeatures() {
  const features = [
    {
      icon: FaVideo,
      title: 'Recorded Sessions',
      description: 'Access recorded classes anytime, anywhere to revisit lessons and learn at your own pace.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock to answer your questions and concerns.',
    },
    {
      icon: FaCheckCircle,
      title: 'Verified Certificates',
      description: 'Earn recognized certificates upon successful completion of your chosen course.',
    },
    {
      icon: FaChartLine,
      title: 'Progress Tracking',
      description: 'Monitor your learning progress with detailed performance analytics and personalized feedback.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute -left-16 top-32 h-64 w-64 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Why Choose Us</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Premium Learning Experience
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Experience world-class education with cutting-edge technology and personalized attention.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40 hover:border-[#ff8c42]/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff8c42]/0 to-[#ffb26a]/0 group-hover:from-[#ff8c42]/10 group-hover:to-[#ffb26a]/5 transition-all" />

              <div className="relative z-10">
                <div className="bg-[#ff8c42]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff8c42]/30 transition-all">
                  <feature.icon className="text-[#ffb26a] text-3xl group-hover:text-[#ff8c42] transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#0c1c3b]/90 to-[#0f294f]/90 p-12 shadow-2xl shadow-[#020d20]/40"
        >
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#ff8c42]/15 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Future?</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Join our global community of learners and achieve your academic goals with expert guidance and modern learning tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff8c42] text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-[#ffb26a] transition inline-flex items-center justify-center">
                Enroll Today
              </button>
              <button className="border-2 border-[#ff8c42] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#ff8c42]/10 transition">
                Book a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
