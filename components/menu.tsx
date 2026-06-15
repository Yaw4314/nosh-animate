'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BurgerCard } from './burger-card';
import { useState, useMemo } from 'react';
import { MenuItem } from '@/data/menu';

export function Menu({ initialItems }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const filteredBurgers = useMemo(() => {
    if (selectedCategory === 'all') return initialItems;
    return initialItems.filter(b => b.category === selectedCategory);
  }, [selectedCategory, initialItems]);

  return (
    <section id="menu" className="py-32 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-primary uppercase italic tracking-tighter relative z-10">Select Your Smash</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['all', 'beef', 'chicken', 'special'].map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-8 py-3 rounded-full font-black uppercase italic tracking-tighter text-sm transition-all ${selectedCategory === cat ? 'bg-primary text-black' : 'bg-zinc-900 text-zinc-500 border border-white/5 hover:text-white'}`}>
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBurgers.map((burger) => (
            <motion.div key={burger.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <BurgerCard burger={burger} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}