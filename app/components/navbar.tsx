"use client";
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaBook, FaTrophy, FaUsers, FaPhone, FaCamera } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'Courses', href: '#courses', icon: FaBook },
    { name: 'Results', href: '#results', icon: FaTrophy },
    { name: 'About', href: '#about', icon: FaUsers },
    { name: 'Gallery', href: '#gallery', icon: FaCamera },
    { name: 'Contact', href: '#contact', icon: FaPhone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#024b6f] to-[#d63137] shadow-lg"
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

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
