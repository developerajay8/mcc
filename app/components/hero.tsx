'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#08162f] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#ff8c42]/20 blur-3xl" /> */}
      <div className="absolute right-[-80px] top-32 h-64 w-64 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center rounded-3xl border border-white/10 bg-[#e3c8b6] sm:p-8 p-4 shadow-2xl shadow-[#020d20]/40 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[black]">Mahendra Commerce Classes</p>
          <h1 className="text-3xl font-bold text-[#06102d] sm:text-5xl pt-6">
            Build your CA, CMA & Commerce future with confidence
          </h1>

          <div className="mt-6 max-w-xl space-y-4 text-base text-[#443f45] sm:text-lg">
            <p>Expert coaching in CA Foundation, CMA Foundation, XI-XII Commerce and CUET Commerce.</p>
            <p>Trusted by 5,000+ students for top board results and professional exam success.</p>
            <p>Small batches, personal mentorship, and result-driven study plans.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ff8c42] px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#ff9a34]"
            >
              Enroll Now
              <FaArrowRight className="ml-3" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-full border border-[#ff8c42] bg-white/5 px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#ff8c42]/10"
            >
              View Courses
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="">
            <img src="/IMG_1446 (2) (1).png" alt="Commerce coaching success" className="sm:h-[500px] h-[420px] w-full object-cover rounded-[24px]" />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-[#08162f]/90 p-6 text-center text-slate-100 shadow-lg shadow-[#020d20]/30 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-b border-[#ffffff20] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Academic Excellence</p>
          <p className="mt-4 text-3xl font-semibold text-white">99%</p>
        </div>
        <div className="border-b border-[#ffffff20] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Qualified Faculty</p>
          <p className="mt-4 text-3xl font-semibold text-white">50+</p>
        </div>
        <div className="border-b border-[#ffffff20] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Success Stories</p>
          <p className="mt-4 text-3xl font-semibold text-white">5000+</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Seats filled this month</p>
          <p className="mt-4 text-3xl font-semibold text-white">250+</p>
        </div>
      </div>
    </section>
  );
}
