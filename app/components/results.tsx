'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

export default function Results() {
  const achievements = [
    {
      icon: FaTrophy,
      number: '95%',
      title: 'Pass Rate',
      description: 'Our students consistently achieve outstanding results',
      color: '#ffde6a',
    },
    {
      icon: FaMedal,
      number: '500+',
      title: 'Top Rankers',
      description: 'Students securing top positions in board exams',
      color: '#daeb68',
    },
    {
      icon: FaAward,
      number: '1000+',
      title: 'Success Stories',
      description: 'Students who achieved their dream careers',
      color: '#d63137',
    },
    {
      icon: FaStar,
      number: '4.9/5',
      title: 'Student Rating',
      description: 'Average rating from our satisfied students',
      color: '#024b6f',
    },
  ];

  const results = [
    { year: '2023', passRate: 96, topRankers: 45 },
    { year: '2022', passRate: 94, topRankers: 38 },
    { year: '2021', passRate: 93, topRankers: 42 },
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-r from-[#024b6f] to-[#d63137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#ffde6a]">Achievements</span>
          </h2>
          <p className="text-xl text-[#ffde6a] max-w-3xl mx-auto">
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
              whileHover={{ scale: 1.1, y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-4 rounded-full mb-4"
                style={{ backgroundColor: achievement.color }}
              >
                <achievement.icon size={30} className="text-[#024b6f]" />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
              <h3 className="text-xl font-semibold text-[#ffde6a] mb-2">{achievement.title}</h3>
              <p className="text-white/90">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Results Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
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
                <div className="text-3xl font-bold text-[#ffde6a] mb-2">{result.year}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-white font-semibold">Pass Rate</div>
                    <div className="w-full bg-white/20 rounded-full h-4 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${result.passRate}%` }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#ffde6a] to-[#daeb68] h-4 rounded-full"
                      />
                    </div>
                    <div className="text-white">{result.passRate}%</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Top Rankers</div>
                    <div className="text-2xl font-bold text-[#daeb68]">{result.topRankers}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}