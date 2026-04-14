'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactHero() {
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Get In Touch</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Contact MCC Classes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Have questions or need more information? Our dedicated team is here to help. Reach out to us anytime!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: FaPhone,
              title: 'Call Us',
              desc: '+92 (300) 1234567',
              subtext: 'Monday to Friday, 9am-6pm',
            },
            {
              icon: FaEnvelope,
              title: 'Email Us',
              desc: 'update@gmail.com',
              subtext: 'We reply within 24 hours',
            },
            {
              icon: FaMapMarkerAlt,
              title: 'Visit Us',
              desc: 'Islamabad, Pakistan',
              subtext: 'By appointment',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40 text-center"
            >
              <div className="bg-[#ff8c42]/20 w-20 h-20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <item.icon className="text-[#ffb26a] text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#ffb26a] font-semibold mb-2">{item.desc}</p>
              <p className="text-slate-300 text-sm">{item.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
