'use client';

import { useScroll, useTransform, motion, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const topBunY = useTransform(smoothProgress, [0, 0.4], [0, shouldReduceMotion ? 0 : -200]);
  const lettuceY = useTransform(smoothProgress, [0.1, 0.5], [0, shouldReduceMotion ? 0 : -130]);
  const tomatoY = useTransform(smoothProgress, [0.2, 0.6], [0, shouldReduceMotion ? 0 : -60]);
  const pattyY = useTransform(smoothProgress, [0.3, 0.7], [0, 0]);
  const cheeseY = useTransform(smoothProgress, [0.4, 0.8], [0, shouldReduceMotion ? 0 : 70]);
  const bottomBunY = useTransform(smoothProgress, [0.5, 0.9], [0, shouldReduceMotion ? 0 : 160]);

  const topBunScale = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);
  const bottomBunScale = useTransform(smoothProgress, [0.5, 1], [1, 0.85]);

  const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.25], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative min-h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-[60]">
          <div className="text-4xl font-black text-primary italic tracking-tighter">NOSH</div>
        </div>

        <div className="relative w-full max-w-lg h-screen flex items-center justify-center">
          <motion.div style={{ y: topBunY, scale: topBunScale }} className="absolute w-56 h-20 bg-amber-700 rounded-full shadow-2xl z-50" />
          <motion.div style={{ y: lettuceY }} className="absolute w-64 h-10 bg-green-600 rounded-[45%] shadow-lg z-40" />
          <motion.div style={{ y: tomatoY }} className="absolute w-56 h-6 bg-red-600 rounded-full shadow-lg z-30" />
          <motion.div style={{ y: pattyY }} className="absolute w-52 h-12 bg-stone-900 rounded-3xl shadow-xl z-20" />
          <motion.div style={{ y: cheeseY }} className="absolute w-54 h-4 bg-yellow-400 rounded-xl shadow-lg z-10" />
          <motion.div style={{ y: bottomBunY, scale: bottomBunScale }} className="absolute w-56 h-14 bg-amber-700 rounded-b-[3rem] shadow-2xl z-0" />
        </div>

        <motion.div style={{ opacity: textOpacity, scale: textScale }} className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          <h1 className="text-[15vw] md:text-[12rem] font-black text-white/5 mb-2 leading-none">NOSH</h1>
          <div className="bg-primary text-black px-6 py-2 -mt-12 md:-mt-20">
            <p className="text-xl md:text-3xl font-black uppercase italic tracking-tighter">Unreal Burgers. Real Flavor.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}