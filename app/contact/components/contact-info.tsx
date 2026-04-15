'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaGlobe } from 'react-icons/fa';

export default function ContactInfo() {
  const locations = [
    {
      city: 'Islamabad',
      address: 'Plot 123, Sector G-7, Islamabad, Pakistan',
      phone: '+91 76888 26669',
      email: 'update@gmail.com',
      hours: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
      icon: FaMapMarkerAlt,
    },
    {
      city: 'Lahore',
      address: 'Office 45, Mall Road, Lahore, Pakistan',
      phone: '+92 (321) 9876543',
      email: 'update@gmail.com',
      hours: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
      icon: FaMapMarkerAlt,
    },
    {
      city: 'Karachi',
      address: 'Suite 78, Clifton Heights, Karachi, Pakistan',
      phone: '+92 (336) 5555555',
      email: 'update@gmail.com',
      hours: 'Mon-Fri: 10am-7pm, Sat: 11am-5pm',
      icon: FaMapMarkerAlt,
    },
  ];

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      detail: '+91 76888 26669',
    },
    {
      icon: FaGlobe,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond quickly',
      detail: 'update@gmail.com',
    },
    {
      icon: FaClock,
      title: 'WhatsApp Chat',
      description: 'Quick messaging for urgent matters',
      detail: '+91 76888 26669',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute -left-12 top-32 h-64 w-64 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our Offices</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Visit Us Across Pakistan
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Find us at convenient locations in major cities. Book an appointment to visit our offices.
          </p>
        </motion.div> */}

        {/* <div className="grid gap-8 md:grid-cols-3 mb-20">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff8c42]/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#ffb26a] text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">{location.city}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">
                    Address
                  </p>
                  <p className="text-slate-300 leading-relaxed">{location.address}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">
                    Phone
                  </p>
                  <a href={`tel:${location.phone}`} className="text-[#ffb26a] hover:text-[#ff8c42] transition">
                    {location.phone}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">
                    Email
                  </p>
                  <a href={`mailto:${location.email}`} className="text-[#ffb26a] hover:text-[#ff8c42] transition">
                    {location.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">
                    Hours
                  </p>
                  <p className="text-slate-300 text-sm">{location.hours}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-6 bg-[#ff8c42] text-slate-950 py-2 rounded-xl font-semibold hover:bg-[#ffb26a] transition"
              >
                Book Appointment
              </motion.button>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Other Ways To Reach</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Get In Touch With Us</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40 text-center"
            >
              <div className="bg-[#ff8c42]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <method.icon className="text-[#ffb26a] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
              <p className="text-slate-300 mb-4">{method.description}</p>
              <p className="text-[#ffb26a] font-semibold text-lg">{method.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
