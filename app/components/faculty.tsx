'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaAward, FaEnvelope } from 'react-icons/fa';

export default function Faculty() {
  const awards = [
    {
      image: '/image copy.png',
    },
     {
      image: '/2.png',
    },
     {
      image: '/3.png',
    },
     {
      image: '/4.png',
    },
     {
      image: '/5.png',
    },
     {
      image: '/6.png',
    },
     {
      image: '/7.png',
    },
     {
      image: '/8.png',
    },
     {
      image: '/9.png',
    },
     {
      image: '/10.png',
    },
    {
      image: '/1.png',
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAward = () => setCurrentIndex((prev) => (prev + 1) % awards.length);
  const prevAward = () => setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);

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
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb26a]/80">Award Winners</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Commerce Rankers & Merit Awards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Celebrate our top achievers who earned rank awards for exceptional performance in CA, CMA, CUET and commerce board exams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0f294f]/90 sm:p-8 p-4 shadow-2xl shadow-[#020d20]/40"
        >
          <div className="absolute top-6 left-6  h-24 w-24 rounded-full bg-[#ff8c42]/15 blur-3xl" />
          <div className="absolute right-6 top-10 h-20 w-20 rounded-full bg-[#ffb26a]/10 blur-3xl" />

          <div className="relative">
            <button
              type="button"
              onClick={prevAward}
              className="absolute sm:block hidden left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={nextAward}
              className="absolute sm:block hidden right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowRight />
            </button>

            <motion.img
              key={currentIndex}
              src={awards[currentIndex].image}
              className=" w-full rounded-[28px] object-cover"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            />
            

           

            <button
              type="button"
              onClick={prevAward}
              className="absolute sm:hidden block left-[-35] top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={nextAward}
              className="absolute sm:hidden block right-[-35] z-20 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-[32px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40">
            <h3 className="text-2xl font-bold text-white mb-4">Award Highlights</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Merit awards for top CA & CMA rankers.</li>
              <li>• Board exam rank recognition for XI-XII commerce toppers.</li>
              <li>• CUET commerce achievers honored with exclusive scholarships.</li>
              <li>• Regular rank-based rewards and certificate ceremonies.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0c1c3b]/90 p-8 shadow-2xl shadow-[#020d20]/40">
            <h3 className="text-2xl font-bold text-white mb-4">How Students Win Awards</h3>
            <ol className="list-decimal list-inside space-y-3 text-slate-300">
              <li>Rank high in commerce board and professional exams.</li>
              <li>Attend focused revision camps and mock test series.</li>
              <li>Excel in performance benchmarks, class tests, and assignments.</li>
              <li>Receive merit awards with media recognition and scholarships.</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
