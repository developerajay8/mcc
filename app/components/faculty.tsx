'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Faculty() {
  const faculty = [
    {
      name: 'Ustadh Ahmed Khan',
      role: 'Quran & Tajweed Teacher',
      experience: '15 years',
      qualifications: 'Alim from Darul Uloom Deoband',
      image: '/faculty1.jpg',
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'ahmed@mcc.com' },
    },
    {
      name: 'Ustadha Fatima Noor',
      role: 'Islamic Studies Mentor',
      experience: '12 years',
      qualifications: 'MA Islamic Studies, Jamia Millia',
      image: '/faculty2.jpg',
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'fatima@mcc.com' },
    },
    {
      name: 'Ustadh Salman Raza',
      role: 'Memorization Coach',
      experience: '10 years',
      qualifications: 'Hafiz-ul-Quran, Ijazah in Tajweed',
      image: '/faculty3.jpg',
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'salman@mcc.com' },
    },
    {
      name: 'Ustadha Ayesha Siddiqui',
      role: 'Online Learning Specialist',
      experience: '14 years',
      qualifications: 'M.Ed & Certified Tutor',
      image: '/faculty4.jpg',
      social: { facebook: '#', twitter: '#', linkedin: '#', email: 'ayesha@mcc.com' },
    },
  ];

  return (
    <section id="faculty" className="relative overflow-hidden bg-[#08162f] py-20 text-white">
      <div className="absolute left-0 top-16 h-44 w-44 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Our Faculty</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Meet the MCC Classes teaching team
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Our faculty brings Quran expertise, modern teaching experience, and personalized support to every student.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0f294f]/90 shadow-2xl shadow-[#020d20]/40"
            >
              <div className="relative h-72 overflow-hidden rounded-t-[16px] bg-gradient-to-br from-[#0f294f] via-[#112d58] to-[#08162f]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,140,66,0.18),_transparent_35%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,187,106,0.14),_transparent_35%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/10 text-4xl font-semibold text-white">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08162f] via-[#08162f]/90 to-transparent" />
              </div>

              <div className="relative z-10 py-8 px-4">
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#ffb26a] font-medium mb-4">{member.role}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{member.qualifications}</p>
                <div className="mb-6 flex items-center justify-between rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                  <span>Experience</span>
                  <span className="font-semibold text-white">{member.experience}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  {member.social.facebook && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.social.facebook}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ffb26a] transition"
                    >
                      <FaFacebook />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.social.twitter}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ffb26a] transition"
                    >
                      <FaTwitter />
                    </motion.a>
                  )}
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.social.linkedin}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ffb26a] transition"
                    >
                      <FaLinkedin />
                    </motion.a>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={`mailto:${member.social.email}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ffb26a] transition"
                  >
                    <FaEnvelope />
                  </motion.a>
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
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#e3c8b6] p-10 shadow-2xl shadow-[#020d20]/40">
            <div className="absolute -left-16 top-8 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
            <div className="absolute right-8 top-10 h-20 w-20 rounded-full bg-[#ffb26a]/20 blur-2xl" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.35em] text-[black]">Join our faculty</p>
              <h3 className="mt-4 text-3xl font-bold text-[#06102d]">Become part of MCC Classes</h3>
              <p className="mx-auto mt-4 max-w-2xl text-[#574f5a] leading-relaxed">
                We are looking for experienced Quran tutors and educators who love teaching with clarity and care.
              </p>
              <button className="mt-10 inline-flex items-center justify-center rounded-full bg-[#ff8c42] px-10 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#ff9b34]">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
