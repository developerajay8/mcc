'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#08162f] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#ff8c42]/20 blur-3xl" />
      <div className="absolute right-[-80px] top-32 h-64 w-64 rounded-full bg-[#ffb26a]/10 blur-3xl" /> */}

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center bg-[#e3c8b6] p-8 rounded-2xl ">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold leading-tight text-[#06102d] sm:text-5xl">
            Learn Quran Online with <span className="text-[#06102d]">MCC Classes</span> Trusted Worldwide
          </h1>

          <div className="mt-6 max-w-xl space-y-3 text-base text-[#574f5a] sm:text-lg">
            <p>Over 5 Years of Teaching the Quran Online</p>
            <p>Trusted by 5,000+ Quran Learners</p>
            <p>1,000+ Students Learning Right Now</p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ff8c42] px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#ff9a34]"
            >
              Start Free Trial Now
              <FaArrowRight className="ml-3" />
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
            
<img src="/hero.png" className='h-[500]' alt="" />
            
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-[#08162f]/90 p-6 text-center text-slate-100 shadow-lg shadow-[#020d20]/30 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-b border-[#ffffff20] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">of licensed therapists</p>
          <p className="mt-4 text-3xl font-semibold text-white">100%</p>
        </div>
        <div className="border-b border-[#ffffff20] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">therapy sessions completed</p>
          <p className="mt-4 text-3xl font-semibold text-white">+300k</p>
        </div>
        <div className="border-b border-[#ffffff20] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">client satisfaction rate</p>
          <p className="mt-4 text-3xl font-semibold text-white">98%</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">new users registered this month</p>
          <p className="mt-4 text-3xl font-semibold text-white">+50k</p>
        </div>
      </div>
    </section>
  );
}
