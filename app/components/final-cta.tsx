'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20 text-white">
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-[#ff8c42] to-[#ffb26a] p-6 rounded-full shadow-lg shadow-[#ff8c42]/30">
              <FaRocket className="text-slate-950 text-4xl" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-[#ffb26a]">Success Story?</span>
          </h2>

          <p className="text-base text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed sm:text-lg">
            Join thousands of successful students who have transformed their academic journey with MCC Classes.
            Your bright future starts here!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 66, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ff8c42] to-[#ffb26a] text-slate-950 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
            >
              <FaRocket />
              <span>Enroll Now</span>
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 140, 66, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#ff8c42] text-[#ffb26a] px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 hover:bg-[#ff8c42]/10"
            >
              <FaPhone />
              <span>Call Us</span>
            </motion.button>
          </div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#e3c8b6] p-8 shadow-2xl shadow-[#020d20]/40"
          >
            

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#06102d] mb-6 text-center">Get Started Today</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
                <div className="flex items-center space-x-4 text-center mx-auto">
                  <div className="bg-[black] p-3 rounded-xl">
                    <FaPhone className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <p className="text-[#06102d] font-semibold">Call for Admission</p>
                    <p className="text-[black]">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-center mx-auto">
                  <div className="bg-[black] p-3 rounded-xl">
                    <FaEnvelope className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <p className="text-[#06102d] text-left font-semibold">Email Us</p>
                    <p className="text-[black]">update@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-[#ff8c42] to-[#ffb26a] text-slate-950 px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              ⚡ Limited Seats Available - Enroll Before It's Too Late!
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
