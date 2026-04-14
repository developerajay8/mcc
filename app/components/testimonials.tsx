'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Class 12 Student',
      image: '/student1.jpg', // Placeholder
      rating: 5,
      testimonial: 'MCC Classes transformed my approach to studies. The teachers are incredibly supportive and the teaching methods are innovative. I scored 95% in my board exams!',
      achievement: '95% in CBSE Board Exams',
    },
    {
      name: 'Priya Patel',
      role: 'JEE Aspirant',
      image: '/student2.jpg', // Placeholder
      rating: 5,
      testimonial: 'The personalized attention and regular doubt-clearing sessions helped me crack JEE. The faculty here is world-class and always available for guidance.',
      achievement: 'AIR 1250 in JEE Mains',
    },
    {
      name: 'Amit Kumar',
      role: 'NEET Student',
      image: '/student3.jpg', // Placeholder
      rating: 5,
      testimonial: 'From struggling with concepts to securing a medical seat - MCC Classes made it possible. The study material and test series were exceptional.',
      achievement: 'MBBS Admission',
    },
    {
      name: 'Sneha Gupta',
      role: 'Class 10 Student',
      image: '/student4.jpg', // Placeholder
      rating: 5,
      testimonial: 'The fun learning environment and interactive classes made studying enjoyable. I not only scored well but also developed a love for learning.',
      achievement: '98% in Class 10 Boards',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#024b6f] to-[#d63137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Student <span className="text-[#ffde6a]">Testimonials</span>
          </h2>
          <p className="text-xl text-[#ffde6a] max-w-3xl mx-auto">
            Hear from our successful students about their transformative learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffde6a] to-[#daeb68] rounded-full flex items-center justify-center text-2xl font-bold text-[#024b6f] mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-[#ffde6a]">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#ffde6a] text-lg" />
                ))}
              </div>

              <FaQuoteLeft className="text-[#daeb68] text-3xl mb-4 opacity-50" />

              <p className="text-white text-lg leading-relaxed mb-6">
                "{testimonial.testimonial}"
              </p>

              <div className="bg-gradient-to-r from-[#ffde6a] to-[#daeb68] rounded-lg p-4">
                <p className="text-[#024b6f] font-semibold text-center">
                  🎉 {testimonial.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { number: '4.9/5', label: 'Average Rating' },
            { number: '1000+', label: 'Happy Students' },
            { number: '95%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-[#ffde6a] mb-2">{stat.number}</div>
              <div className="text-white font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}