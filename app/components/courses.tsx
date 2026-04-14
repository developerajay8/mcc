'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaClock, FaUsers, FaStar } from 'react-icons/fa';

export default function Courses() {
  const courses = [
    {
      title: 'Mathematics Excellence',
      description: 'Master advanced mathematical concepts with our expert faculty.',
      duration: '6 months',
      students: 150,
      rating: 4.9,
      icon: FaBook,
      color: 'from-[#024b6f] to-[#d63137]',
    },
    {
      title: 'Science Mastery',
      description: 'Comprehensive science education covering Physics, Chemistry, and Biology.',
      duration: '8 months',
      students: 200,
      rating: 4.8,
      icon: FaBook,
      color: 'from-[#ffde6a] to-[#daeb68]',
    },
    {
      title: 'English Proficiency',
      description: 'Enhance your communication skills and language proficiency.',
      duration: '4 months',
      students: 120,
      rating: 4.7,
      icon: FaBook,
      color: 'from-[#d63137] to-[#024b6f]',
    },
     {
      title: 'Mathematics Excellence',
      description: 'Master advanced mathematical concepts with our expert faculty.',
      duration: '6 months',
      students: 150,
      rating: 4.9,
      icon: FaBook,
      color: 'from-[#024b6f] to-[#d63137]',
    },
    {
      title: 'Science Mastery',
      description: 'Comprehensive science education covering Physics, Chemistry, and Biology.',
      duration: '8 months',
      students: 200,
      rating: 4.8,
      icon: FaBook,
      color: 'from-[#ffde6a] to-[#daeb68]',
    },
    {
      title: 'English Proficiency',
      description: 'Enhance your communication skills and language proficiency.',
      duration: '4 months',
      students: 120,
      rating: 4.7,
      icon: FaBook,
      color: 'from-[#d63137] to-[#024b6f]',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#024b6f] mb-4">
            Our <span className="text-[#d63137]">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to help you excel in your academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <course.icon size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-white/90">{course.description}</p>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-[#024b6f]" />
                    <span className="text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-[#024b6f]" />
                    <span className="text-gray-600">{course.students} students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-600 font-semibold">{course.rating}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#024b6f] to-[#d63137] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(2, 75, 111, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#024b6f] to-[#d63137] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}