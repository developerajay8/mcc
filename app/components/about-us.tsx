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

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#024b6f] to-[#d63137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About <span className="text-[#ffde6a]">MCC Classes</span>
              </h2>
              <p className="text-xl text-[#ffde6a] leading-relaxed">
                MCC Classes has been a beacon of educational excellence for over a decade,
                nurturing young minds and shaping bright futures. Our commitment to quality
                education and innovative teaching methods has made us the preferred choice
                for students across the region.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-[#ffde6a] p-3 rounded-full">
                  <FaHistory className="text-[#024b6f] text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our History</h3>
                  <p className="text-white/90">
                    Founded in 2013, MCC Classes started with a vision to revolutionize
                    education through personalized learning and modern teaching techniques.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-[#daeb68] p-3 rounded-full">
                  <FaEye className="text-[#024b6f] text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-white/90">
                    To be the leading educational institution that empowers every student
                    to achieve their full potential and succeed in their chosen path.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-[#ffde6a] p-3 rounded-full">
                  <FaBullseye className="text-[#024b6f] text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-white/90">
                    To provide exceptional education through innovative methods, expert faculty,
                    and personalized attention to help students excel academically and personally.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#ffde6a] mb-2">{stat.number}</div>
                <div className="text-white font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Recognition & Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              'Best Educational Institute 2023',
              'Excellence in Teaching Award',
              'Student Choice Award 2022',
            ].map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaAward className="text-[#ffde6a] text-3xl mx-auto mb-4" />
                <p className="text-white font-semibold">{award}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}