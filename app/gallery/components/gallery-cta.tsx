'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaHeart, FaImages } from 'react-icons/fa';

export default function GalleryCTA() {
  const stats = [
    { icon: FaImages, label: 'Total Photos', value: '2500+' },
    { icon: FaHeart, label: 'Community Shares', value: '1200+' },
    { icon: FaCamera, label: 'Albums', value: '85+' },
    { icon: FaImages, label: 'Social Shares', value: '5000+' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute -left-16 top-32 h-64 w-64 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Gallery Stats</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            A Picture is Worth a Thousand Words
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Join our growing community and share your own moments with MCC Classes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40 text-center"
            >
              <div className="bg-[#ff8c42]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <stat.icon className="text-[#ffb26a] text-3xl" />
              </div>
              <h3 className="text-4xl font-bold text-[#ff8c42] mb-2">{stat.value}</h3>
              <p className="text-slate-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 mb-16"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0c1c3b]/90 to-[#0f294f]/90 p-12 shadow-2xl shadow-[#020d20]/40">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#ff8c42]/15 blur-3xl" />
            <div className="relative z-10">
              <FaCamera className="text-[#ffb26a] text-5xl mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Share Your Moments</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Have amazing photos or videos from MCC Classes? Share them with our community and inspire others!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#ff8c42] text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-[#ffb26a] transition"
              >
                Submit Your Photos
              </motion.button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0c1c3b]/90 to-[#0f294f]/90 p-12 shadow-2xl shadow-[#020d20]/40">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#ffb26a]/15 blur-3xl" />
            <div className="relative z-10">
              <FaImages className="text-[#ffb26a] text-5xl mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Download & Share</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Download high-quality photos or share them on your social media. Celebrate your learning journey!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#ff8c42] text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-[#ffb26a] transition"
              >
                Browse & Download
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#ff8c42]/20 to-[#ffb26a]/20 p-10 shadow-2xl shadow-[#020d20]/40 text-center"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Follow Us On Social Media</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest photos, videos, and announcements from MCC Classes. Follow our social media channels for daily updates!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Instagram', 'YouTube'].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-[#ff8c42] text-[#ffb26a] px-6 py-3 rounded-full font-semibold hover:bg-[#ff8c42]/20 transition"
                >
                  {social}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
