'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

export default function Results() {
  const achievements = [
    {
      icon: FaTrophy,
      number: '99%',
      title: 'Pass Rate',
      description: 'Our students consistently achieve outstanding results',
    },
    {
      icon: FaMedal,
      number: '100+',
      title: 'Top Rankers',
      description: 'Students securing top positions in board exams',
    },
    {
      icon: FaAward,
      number: '1000+',
      title: 'Success Stories',
      description: 'Students who achieved their dream careers',
    },
    {
      icon: FaStar,
      number: '4.9/5',
      title: 'Student Rating',
      description: 'Average rating from our satisfied students',
    },
  ];

  // const results = [
  //   { year: '2023', passRate: 96, topRankers: 45 },
  //   { year: '2022', passRate: 94, topRankers: 38 },
  //   { year: '2021', passRate: 93, topRankers: 42 },
  // ];

  return (
    <section id="results" className="py-20 bg-[#08162f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#ffb26a]">Achievements</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Celebrating excellence and success in education year after year.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0f294f]/90 p-6 shadow-2xl shadow-[#020d20]/40 text-center"
            >
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
              <div className="absolute right-8 top-6 h-16 w-16 rounded-full bg-[#ffb26a]/20 blur-2xl" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block p-4 rounded-xl bg-[#ff8c42]/15 mb-4"
                >
                  <achievement.icon size={30} className="text-[#ffb26a]" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <h3 className="text-xl font-semibold text-[#ffb26a] mb-2">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Chart */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0f294f]/90 p-8 shadow-2xl shadow-[#020d20]/40"
        >
          <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#ff8c42]/15 blur-3xl" />
          <div className="absolute right-8 top-6 h-16 w-16 rounded-full bg-[#ffb26a]/20 blur-2xl" />

          <div className="relative">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Year-wise Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={result.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#ffb26a] mb-4">{result.year}</div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-white font-semibold mb-2">Pass Rate</div>
                      <div className="w-full bg-white/10 rounded-full h-4 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${result.passRate}%` }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                          viewport={{ once: true }}
                          className="bg-[#ff8c42] h-4 rounded-full"
                        />
                      </div>
                      <div className="text-white font-bold">{result.passRate}%</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-2">Top Rankers</div>
                      <div className="text-2xl font-bold text-[#ffb26a]">{result.topRankers}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}