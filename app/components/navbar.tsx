"use client";
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaBook, FaTrophy, FaUsers, FaPhone, FaCamera } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/', icon: FaHome },
    { name: 'About', href: '/about', icon: FaUsers },
    { name: 'Courses', href: '/courses', icon: FaBook },
    { name: 'Gallery', href: '/gallery', icon: FaCamera },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#08162f] "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="MCC Classes Logo"
              width={50}
              height={50}
              className="rounded-full border-2 border-[#ffde6a]"
            />
          </motion.div>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#ffde6a' }}
                  className="text-white hover:text-[#ffde6a] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <item.icon />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
            
            {/* Contact Us Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff8c42] text-slate-950 px-6 py-2 rounded-full font-semibold hover:bg-[#ffb26a] transition-colors duration-300 flex items-center space-x-2"
            >
              <FaPhone />
              <span>Contact Us</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#daeb68] inline-flex items-center justify-center p-2 rounded-md text-[#024b6f] hover:bg-[#ffde6a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#024b6f] border-t border-[#ffde6a]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#d63137' }}
                  className="text-white hover:text-[#ffde6a] block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </motion.a>
              ))}
              
              {/* Mobile Contact Us Button */}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: '#ff8c42' }}
                className="bg-[#ff8c42] text-slate-950 block px-3 py-3 rounded-md text-base font-semibold transition-all duration-300 flex items-center space-x-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone />
                <span>Contact Us</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
