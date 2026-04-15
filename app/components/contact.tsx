'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaTimes } from 'react-icons/fa';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Show modal after 2 seconds on page load
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', phone: '', subject: '', message: '' });
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['Address', 'Dada Gurudev Nagar, Diggi Malpura Rd', 'Sanganer, Jaipur - 302029'],
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+91 76888 26669', '+91 72220 17506'],
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['update@gmail.com'],
    },
    {
      icon: FaClock,
      title: 'Clasess Hours',
      details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-[#08162f] py-20 text-white">
      <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Get in Touch</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Contact Mahendra Commerce Classes</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Ready to transform your commerce career? Reach out now for admission, course guidance or career counselling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Have questions about CA, CMA or Commerce coaching? We provide personal admission support and study planning for every student.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1c3b]/90 p-6 shadow-2xl shadow-[#020d20]/40"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ff8c42]/20 p-3 rounded-full mr-4">
                      <info.icon className="text-[#ffb26a] text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{info.title}</h4>
                  </div>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-300 mb-1 leading-relaxed">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40"
          >
            

            <div className="mt-4">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Send us a Message</h3>
              <p className="text-slate-300 text-center mb-8">Our team responds within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1  gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
                    placeholder="What do you want help with?"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can support your commerce goals..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(255, 140, 66, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff8c42] to-[#ffb26a] text-slate-950 py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Contact Modal */}
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-[#08162f] rounded-[24px] border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#ff8c42] text-slate-950 flex items-center justify-center hover:bg-[#ffb26a] transition-colors duration-300"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Modal Header */}
            <div className="relative p-8 pb-6">
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 sm:block hidden rounded-full border-4 border-[#08162f] bg-[#0f294f]/90 p-4">
                <FaPaperPlane className="text-[#ffb26a] text-2xl" />
              </div>

              <div className="sm:mt-8 mt-6 text-center">
                <h3 className="sm:text-3xl text-2xl font-bold text-white mb-2">Get Started Today!</h3>
                <p className="text-slate-300 sm:text-[16px] text-[12px]">Join thousands of successful commerce students. Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
            </div>

            {/* Modal Form */}
            <div className="sm:px-8 px-2 pb-8">
              <form onSubmit={handleSubmit} className="sm:space-y-6 space-y-2">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                 
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300"
                      placeholder="What do you want help with?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can support your commerce goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff8c42] to-[#ffb26a] text-slate-950 py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}
