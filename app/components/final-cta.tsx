'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-linear-to-r from-[#024b6f] to-[#d63137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <div className="bg-linear-to-r from-[#ffde6a] to-[#daeb68] p-6 rounded-full">
              <FaRocket className="text-[#024b6f] text-4xl" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-[#ffde6a]">Success Story?</span>
          </h2>

          <p className="text-xl text-[#ffde6a] max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of successful students who have transformed their academic journey with MCC Classes.
            Your bright future starts here!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 222, 106, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-[#ffde6a] to-[#daeb68] text-[#024b6f] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
            >
              <FaRocket />
              <span>Enroll Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#d63137' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#024b6f] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
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
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#ffde6a] p-3 rounded-full">
                  <FaPhone className="text-[#024b6f] text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call for Admission</p>
                  <p className="text-[#ffde6a]">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#daeb68] p-3 rounded-full">
                  <FaEnvelope className="text-[#024b6f] text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-[#ffde6a]">admissions@mccclasses.com</p>
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
            <div className="inline-block bg-linear-to-r from-[#ffde6a] to-[#daeb68] text-[#024b6f] px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              ⚡ Limited Seats Available - Enroll Before It's Too Late!
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}