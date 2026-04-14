'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

export default function CoursesFAQ() {
  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll directly through our website by clicking "Enroll Now" on any course. Complete the registration, make the payment, and gain instant access to course materials.',
    },
    {
      question: 'Are classes live or recorded?',
      answer: 'We offer both! Live interactive classes happen at scheduled times, and all sessions are recorded for students who prefer to learn at their own pace.',
    },
    {
      question: 'What qualification do I need?',
      answer: 'Most courses are designed for all levels. Whether you are a beginner or advanced learner, we have programs suited to your needs.',
    },
    {
      question: 'Do I get a certificate after completion?',
      answer: 'Yes! Upon successful completion of your course and passing the final assessment, you will receive a verified certificate.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 7-day money-back guarantee if you are not satisfied with the course. Contact our support team for more details.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#08162f] py-20">
      <div className="absolute -left-12 top-40 h-64 w-64 rounded-full bg-[#ff8c42]/15 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#ffb26a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Have questions about our courses? Here are the most common queries answered.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0c1c3b]/90 shadow-lg shadow-[#020d20]/40"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-[#0f294f]/50 transition"
              >
                <div className="flex items-start gap-4">
                  <FaQuestionCircle className="text-[#ffb26a] mt-1 text-xl flex-shrink-0" />
                  <h3 className="text-left text-lg font-semibold text-white">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#ffb26a] flex-shrink-0"
                >
                  <FaChevronDown />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 px-6 md:px-8 py-6"
                  >
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300 mb-6">
            Still have questions? Our support team is here to help!
          </p>
          <button className="bg-[#ff8c42] text-slate-950 px-10 py-4 rounded-full font-bold hover:bg-[#ffb26a] transition inline-flex items-center gap-2">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
