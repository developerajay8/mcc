'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

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
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#08162f] text-white">
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ffb26a]/30 bg-[#ff8c42]/20 text-2xl font-bold text-[#ffb26a]">
                MC
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">MCC Classes</h3>
                <p className="text-[#ffb26a]">Excellence in Education</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering students with quality education and innovative learning methods
              for over a decade. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ffb26a] transition-all duration-300 hover:bg-[#ff8c42]/20"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
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
            <h4 className="text-xl font-bold mb-6 text-[#ffb26a]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#ffb26a] transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="text-[#ff8c42] group-hover:translate-x-1 transition-transform"><FaArrowRightLong />
</span>
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
            <h4 className="text-xl font-bold mb-6 text-[#ffb26a]">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <motion.li
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-slate-300 hover:text-[#ffb26a] transition-colors duration-300"
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
            <h4 className="text-xl font-bold mb-6 text-[#ffb26a]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#ff8c42]/20 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-[#ffb26a] flex-shrink-0" />
                </div>
                <div className="text-slate-300">
                  <p className="font-medium">MCC Classes Institute</p>
                  <p>123 Education Street, Connaught Place</p>
                  <p>New Delhi, India - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#ff8c42]/20 p-2 rounded-lg">
                  <FaPhone className="text-[#ffb26a] flex-shrink-0" />
                </div>
                <p className="text-slate-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#ff8c42]/20 p-2 rounded-lg">
                  <FaEnvelope className="text-[#ffb26a] flex-shrink-0" />
                </div>
                <p className="text-slate-300">info@mccclasses.com</p>
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
          className="py-8 border-t border-white/10"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-[#ffb26a]">Stay Updated</h4>
            <p className="text-slate-300 mb-6">Subscribe to our newsletter for latest updates and offers</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ff8c42] to-[#ffb26a] text-slate-950 px-6 py-3 rounded-r-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <FaPaperPlane size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-left">
              © 2024 MCC Classes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-[#ffb26a] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-[#ffb26a] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-[#ffb26a] transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
