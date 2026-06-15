'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/hooks/use-cart';
import { MessageCircle, ShoppingBag } from 'lucide-react';

export function FloatingActionBar({ onCartClick }) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="fixed bottom-8 left-0 right-0 flex justify-center items-center px-6 z-[90] pointer-events-none">
      <div className="flex gap-4 p-2 bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl pointer-events-auto">
        <motion.a href="https://wa.me/923265550192" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-green-500 text-black rounded-full font-black uppercase italic tracking-tighter text-sm transition-all shadow-lg"><MessageCircle className="w-5 h-5" /><span>Order WhatsApp</span></motion.a>
        <motion.button onClick={onCartClick} className="relative flex items-center gap-3 px-6 py-4 bg-primary text-black rounded-full font-black uppercase italic tracking-tighter text-sm transition-all shadow-lg"><ShoppingBag className="w-5 h-5" /><span>Bag</span>{totalItems > 0 && <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full w-6 h-6 flex items-center justify-center border-2 border-primary">{totalItems}</span>}</motion.button>
        <motion.a href="https://www.foodpanda.pk/restaurant/p2kb/nosh-burgers-and-more" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-zinc-800 text-white rounded-full font-black uppercase italic tracking-tighter text-sm border border-white/5 transition-all"><span>Panda</span></motion.a>
      </div>
    </motion.div>
  );
}