'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Faculty() {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Mathematics Expert',
      experience: '15 years',
      qualifications: 'PhD Mathematics, IIT Delhi',
      image: '/faculty1.jpg', // Placeholder
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'rajesh@mcc.com' },
    },
    {
      name: 'Ms. Priya Sharma',
      role: 'Science Faculty',
      experience: '12 years',
      qualifications: 'MSc Physics, Delhi University',
      image: '/faculty2.jpg', // Placeholder
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'priya@mcc.com' },
    },
    {
      name: 'Mr. Amit Singh',
      role: 'English Teacher',
      experience: '10 years',
      qualifications: 'MA English, JNU',
      image: '/faculty3.jpg', // Placeholder
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'amit@mcc.com' },
    },
    {
      name: 'Dr. Sunita Gupta',
      role: 'Chemistry Expert',
      experience: '14 years',
      qualifications: 'PhD Chemistry, AIIMS',
      image: '/faculty4.jpg', // Placeholder
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'sunita@mcc.com' },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#024b6f] mb-4">
            Our <span className="text-[#d63137]">Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced and dedicated educators committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-[#024b6f] to-[#d63137] flex items-center justify-center">
                  <div className="text-6xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.facebook}
                      className="bg-white/20 p-3 rounded-full text-white hover:bg-white hover:text-[#024b6f] transition-colors duration-300"
                    >
                      <FaFacebook />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.twitter}
                      className="bg-white/20 p-3 rounded-full text-white hover:bg-white hover:text-[#024b6f] transition-colors duration-300"
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.linkedin}
                      className="bg-white/20 p-3 rounded-full text-white hover:bg-white hover:text-[#024b6f] transition-colors duration-300"
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={`mailto:${member.social.email}`}
                      className="bg-white/20 p-3 rounded-full text-white hover:bg-white hover:text-[#024b6f] transition-colors duration-300"
                    >
                      <FaEnvelope />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#024b6f] mb-2">{member.name}</h3>
                <p className="text-[#d63137] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.qualifications}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Experience: {member.experience}</span>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#024b6f] to-[#d63137] text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    View Profile
                  </motion.button> */}
                </div>
              </div>
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
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl mb-6 text-[#ffde6a]">
              We're always looking for passionate educators to join our mission.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 222, 106, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ffde6a] to-[#daeb68] text-[#024b6f] px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}