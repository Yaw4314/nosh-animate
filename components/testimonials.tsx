'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Ahmed Khan', role: 'Food Enthusiast', content: 'NOSH makes the best smash burgers in Islamabad! The flavor is unreal.', rating: 5, avatar: '👨‍🍳' },
  { id: 2, name: 'Sarah Ahmed', role: 'Regular Customer', content: "The Double Deluxe is my go-to. Perfectly seasoned and always fresh.", rating: 5, avatar: '👩‍💼' },
  { id: 3, name: 'Hassan Malik', role: 'Burger Connoisseur', content: 'Fast delivery and the WhatsApp ordering is so smooth. Top notch!', rating: 5, avatar: '👨‍💻' },
];

export function Testimonials() {
  return (
    <section className="bg-black py-48 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24"><h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-4">What They Say</h2><p className="text-primary font-black uppercase italic tracking-[0.4em] text-sm">Real reviews from NOSH lovers</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5 flex flex-col h-full relative">
              <div className="flex gap-1 mb-8">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
              <p className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight mb-12 flex-1 italic">"{t.content}"</p>
              <div className="flex items-center gap-5 border-t border-white/5 pt-8"><div className="text-5xl filter grayscale">{t.avatar}</div><div><p className="font-black text-white uppercase italic tracking-tighter text-xl">{t.name}</p><p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">{t.role}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}