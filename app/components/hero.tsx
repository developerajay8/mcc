'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-linear-to-br from-[#024b6f] via-[#d63137] to-[#daeb68] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Welcome to{' '}
            <span className="bg-linear-to-r from-[#ffde6a] to-[#daeb68] bg-clip-text text-transparent">
              MCC Classes
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-[#ffde6a] max-w-3xl mx-auto leading-relaxed"
          >
            Empowering students with quality education and innovative learning methods.
            Join us to achieve your academic dreams and unlock your potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 222, 106, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-[#ffde6a] to-[#daeb68] text-[#024b6f] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#d63137' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#024b6f] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <FaPlay />
              <span>Watch Video</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '5000+', label: 'Students Enrolled' },
              { number: '95%', label: 'Success Rate' },
              { number: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#ffde6a] mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {/* <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 bg-[#ffde6a] rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-[#daeb68] rounded-full opacity-20"
      /> */}
    </section>
  );
}
