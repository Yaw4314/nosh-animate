'use client';

import { useScroll, useTransform, motion, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Burger Layers Images from Stitch/Context
  const layers = {
    topBun: "https://lh3.googleusercontent.com/aida/AP1WRLuZGD23XLrVqT1jDvqkxUBXOjIIx6nnDNVFQK0E4JC1tC_U1JXSp0-Ac_JocUQQ7xNPU-RxikCtIgrHKLi18KikZ1aX5vgvp1h5UwyxEvMn-1TYdADDb_fQeXdYC4D4MkZg26er5pO4YV0BJzn0FergDBSKKWNOIXz7cCy_KixiblF_hdy75d9WKcOfX7YuIZAcRVrRO1i7XZAYMxZgUh-8OxFTLiB4Aej1nKjHUQgyve_DYZBDkef7138",
    lettuce: "https://lh3.googleusercontent.com/aida/AP1WRLudaWnX0JLoJj-Mu07htokFTTpeAN6XBOY-xU9teFohU8KBzJ2XEKmt9MWCCqhxj8EL8mz4bT_VNMyW5qLtgJbFiHamyrLDC5OCAi4z6xENhtp-9HGLeoNigVnbaaWJuSOv637vdnEP51GVxkM01R0BrcDFFLmRmtguFEZxqYDSGLTh0ZhFDJ-1Erupn_VK5DKvIPaHcXa4CVCOzvj63JZWa9yQXzx_MUNbBu9LXi9AFO1QyNZznNsYGVA",
    patty: "https://lh3.googleusercontent.com/aida/AP1WRLvbDPtN7wZuj6JTlikUgxNamhJlCEonbGs9SbqEczARgmx0v0cazY2LNECffZxsKDgK_vbI_FAzRR_durFqJNEWQ_tT0x_jcGgIUxYrAYST7LsM6xW4IThWOSPAOSLuNeSyOZ6bAMrmtUuvk6Qx1DAerg3U7tchZR0EV-skf8mAzAp8cJOXCu_Ggnw_tKDVOmAXK91IGmJg4ozltkN7Ycb7WQ4MCxB_h4GrAh2O-yGWdEWVfxgPEjz_Mpo",
    bottomBun: "https://lh3.googleusercontent.com/aida/AP1WRLviy8seysWlr7709rnGht2Y5YIaPYS1Phwh1k3K9NecIvSoIYzHQmektFTy7dO6AoZ0qG-ybFpepvhuZzqpkyfn-6pDuaA7zSUrQP-SwmibzCp0IvBYk5m-2WsmGdIvOY_K4pAE_RYBVnzQBrMLhs0S1AlBAQAa3RyJypG1rm6xLrEiIOpzjbfhAzy3WIffW9Rt4-L5uxVGfg8CiGiKFlR6cpjCpK7I1oJVf_OQrzSkgKdsevprUVL3N8c"
  };

  // Staggered Y transforms for deconstruction
  const topBunY = useTransform(smoothProgress, [0, 0.4], [0, shouldReduceMotion ? 0 : -350]);
  const lettuceY = useTransform(smoothProgress, [0.1, 0.5], [0, shouldReduceMotion ? 0 : -150]);
  const pattyY = useTransform(smoothProgress, [0.3, 0.7], [0, shouldReduceMotion ? 0 : 50]);
  const bottomBunY = useTransform(smoothProgress, [0.5, 0.9], [0, shouldReduceMotion ? 0 : 300]);

  const topBunScale = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);
  const bottomBunScale = useTransform(smoothProgress, [0.5, 1], [1, 0.9]);

  const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.2], [1, 0.85]);

  return (
    <div ref={containerRef} className="relative min-h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Nav Header */}
        <div className="absolute top-0 left-0 right-0 p-8 md:p-12 flex justify-between items-center z-[60]">
          <div className="text-4xl md:text-5xl font-black text-[#FFD700] italic tracking-tighter">NOSH</div>
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">Premium Smash Burgers</div>
        </div>

        {/* Burger layers */}
        <div className="relative w-full max-w-2xl h-screen flex items-center justify-center pointer-events-none">
          {/* Top Bun */}
          <motion.img
            style={{ y: topBunY, scale: topBunScale }}
            src={layers.topBun}
            className="absolute w-[80%] md:w-full max-w-md z-50 drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
          />

          {/* Lettuce & Tomato */}
          <motion.img
            style={{ y: lettuceY }}
            src={layers.lettuce}
            className="absolute w-[85%] md:w-full max-w-lg z-40 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />

          {/* Beef Patty */}
          <motion.img
            style={{ y: pattyY }}
            src={layers.patty}
            className="absolute w-[80%] md:w-full max-w-md z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />

          {/* Bottom Bun */}
          <motion.img
            style={{ y: bottomBunY, scale: bottomBunScale }}
            src={layers.bottomBun}
            className="absolute w-[80%] md:w-full max-w-md z-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Background Large Text */}
        <motion.div style={{ opacity: smoothProgress }} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
           <h1 className="text-[30vw] font-black text-white/[0.02] leading-none select-none">NOSH</h1>
        </motion.div>

        {/* Hero Overlay Text */}
        <motion.div style={{ opacity: textOpacity, scale: textScale }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-[55]">
          <h2 className="text-6xl md:text-[10rem] font-black text-white/5 mb-4 leading-none">NOSH</h2>
          <div className="bg-[#FFD700] text-black px-8 py-3 -mt-16 md:-mt-28 transform -rotate-1 shadow-[0_20px_50px_rgba(255,215,0,0.3)]">
            <p className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter">Unreal Burgers. Real Flavor.</p>
          </div>
          <div className="mt-24 flex flex-col items-center gap-4">
             <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-px h-24 bg-gradient-to-b from-[#FFD700] to-transparent"
             />
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFD700]/50">Scroll to Deconstruct</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
