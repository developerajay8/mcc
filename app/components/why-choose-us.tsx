'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUserGraduate, FaChalkboardTeacher, FaCertificate, FaClock, FaHandshake } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: FaLightbulb,
      title: 'Innovative Teaching',
      description: 'Cutting-edge teaching methods and interactive learning experiences.',
      color: '#ffde6a',
    },
    {
      icon: FaUserGraduate,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to your success.',
      color: '#daeb68',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Personalized Attention',
      description: 'Small batch sizes ensure individual attention and doubt clearing.',
      color: '#d63137',
    },
    {
      icon: FaCertificate,
      title: 'Proven Results',
      description: 'Consistent track record of excellent academic performance.',
      color: '#024b6f',
    },
    {
      icon: FaClock,
      title: 'Flexible Timing',
      description: 'Multiple batch timings to fit your schedule and convenience.',
      color: '#ffde6a',
    },
    {
      icon: FaHandshake,
      title: 'Career Guidance',
      description: 'Comprehensive career counseling and future planning support.',
      color: '#daeb68',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#024b6f] mb-4">
            Why Choose <span className="text-[#d63137]">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes MCC Classes the preferred choice for thousands of students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon size={24} className="text-[#024b6f]" />
              </motion.div>

              <h3 className="text-2xl font-bold text-[#024b6f] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#024b6f] to-[#d63137] rounded-full mt-6"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#024b6f] to-[#d63137] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-6 text-[#ffde6a]">
              Join thousands of successful students who chose MCC Classes for their bright future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 222, 106, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ffde6a] to-[#daeb68] text-[#024b6f] px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}