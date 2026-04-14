'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const courses = [
    'Mathematics Excellence',
    'Science Mastery',
    'English Proficiency',
    'JEE Preparation',
    'NEET Preparation',
    'Board Exam Coaching',
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#024b6f] to-[#d63137] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="MCC Classes Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#ffde6a]"
              />
              <div>
                <h3 className="text-2xl font-bold">MCC Classes</h3>
                <p className="text-[#ffde6a]">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Empowering students with quality education and innovative learning methods
              for over a decade. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-white/80 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#ffde6a]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#ffde6a] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#ffde6a]">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <motion.li
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-white/80 hover:text-[#ffde6a] transition-colors duration-300"
                >
                  {course}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#ffde6a]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#ffde6a] mt-1 flex-shrink-0" />
                <div className="text-white/90">
                  <p>MCC Classes</p>
                  <p>123 Education Street</p>
                  <p>Delhi, India - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#ffde6a] flex-shrink-0" />
                <p className="text-white/90">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#ffde6a] flex-shrink-0" />
                <p className="text-white/90">info@mccclasses.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/20"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-[#ffde6a]">Stay Updated</h4>
            <p className="text-white/90 mb-6">Subscribe to our newsletter for latest updates and offers</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-[#ffde6a] rounded-l-lg text-white/900 focus:outline-none "
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ffde6a] to-[#daeb68] text-[#024b6f] px-6 py-3 rounded-r-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-center md:text-left">
              © 2024 MCC Classes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-[#ffde6a] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-[#ffde6a] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-[#ffde6a] transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}