'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaHeadset, FaBook, FaCreditCard, FaUserTie } from 'react-icons/fa';

export default function ContactSupport() {
  const faqs = [
    {
      category: 'Enrollment',
      icon: FaHeadset,
      questions: [
        {
          q: 'How do I enroll in a course?',
          a: 'You can enroll on our website by selecting a course and completing the registration form. Payment can be made online or through bank transfer.',
        },
        {
          q: 'What are the age requirements?',
          a: 'We offer courses for all age groups from kids (5+) to adults. Each course has specific recommendations mentioned in the course details.',
        },
        {
          q: 'Can I switch courses later?',
          a: 'Yes, you can switch courses within 7 days of enrollment. After that, please contact our support team for assistance.',
        },
      ],
    },
    {
      category: 'Payments',
      icon: FaCreditCard,
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept online transfers, credit/debit cards, and bank deposits. All transactions are secure and encrypted.',
        },
        {
          q: 'Is there a refund policy?',
          a: '7-day money-back guarantee if you are not satisfied. Refunds are processed within 5-7 business days.',
        },
        {
          q: 'Are there discounts available?',
          a: 'Yes! We offer seasonal discounts, early bird offers, and group discounts. Check our promotions page.',
        },
      ],
    },
    {
      category: 'Technical',
      icon: FaBook,
      questions: [
        {
          q: 'How do I access course materials?',
          a: 'After enrollment, log into your account and navigate to "My Courses." All materials are available in the course dashboard.',
        },
        {
          q: 'What if I have technical issues?',
          a: 'Contact our technical support at update@gmail.com or call +92 (300) 1234567. We usually respond within 2 hours.',
        },
        {
          q: 'Can I download course content?',
          a: 'Most course materials can be downloaded for offline access. This depends on the course type and your subscription level.',
        },
      ],
    },
    {
      category: 'General',
      icon: FaUserTie,
      questions: [
        {
          q: 'Do you offer certificates?',
          a: 'Yes! Upon successful course completion, you receive a verified certificate that can be added to your resume.',
        },
        {
          q: 'Can I pause my enrollment?',
          a: 'You can pause for up to 30 days. After that, your enrollment may be cancelled. Please contact us for custom arrangements.',
        },
        {
          q: 'How do I contact an instructor?',
          a: 'Through your course dashboard, you can message instructors directly. Live sessions also provide an opportunity to ask questions.',
        },
      ],
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Help Center</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Find answers to common questions about our courses, payments, and services.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqs.map((faq, idx) => {
            const IconComponent = faq.icon;
            return (
              <motion.button
                key={idx}
                onClick={() => {
                  setExpandedCategory(idx);
                  setExpandedQuestion(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  expandedCategory === idx
                    ? 'bg-[#ff8c42] text-slate-950'
                    : 'border-2 border-[#ff8c42] text-[#ffb26a] hover:bg-[#ff8c42]/20'
                }`}
              >
                <IconComponent />
                {faq.category}
              </motion.button>
            );
          })}
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {faqs[expandedCategory].questions.map((question, qIdx) => (
              <motion.div
                key={qIdx}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: qIdx * 0.05 }}
                className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0c1c3b]/90 shadow-lg shadow-[#020d20]/40"
              >
                <motion.button
                  onClick={() => setExpandedQuestion(expandedQuestion === qIdx ? null : qIdx)}
                  className="w-full p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-[#0f294f]/50 transition"
                >
                  <h3 className="text-left text-lg font-semibold text-white">{question.q}</h3>
                  <motion.div
                    animate={{ rotate: expandedQuestion === qIdx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#ffb26a] flex-shrink-0"
                  >
                    <FaChevronDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedQuestion === qIdx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 px-6 md:px-8 py-6"
                    >
                      <p className="text-slate-300 leading-relaxed">{question.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300 mb-8 text-lg">
            Couldn't find what you're looking for?
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#ff8c42] text-slate-950 px-10 py-4 rounded-full font-bold hover:bg-[#ffb26a] transition">
              Contact Support
            </button>
            <button className="border-2 border-[#ff8c42] text-[#ffb26a] px-10 py-4 rounded-full font-bold hover:bg-[#ff8c42]/20 transition">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
