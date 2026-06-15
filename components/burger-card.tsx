'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';

export function BurgerCard({ burger }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id: burger.id, name: burger.name, price: burger.price, quantity: 1 });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const formatPrice = (p) => new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(p).replace('PKR', 'Rs.');

  return (
    <div className="group relative h-full">
      <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden h-full flex flex-col transition-all duration-500 hover:border-primary/30">
        <div className="relative h-64 w-full flex items-center justify-center p-8 bg-zinc-800/50 overflow-hidden">
          <motion.img src={burger.image} alt={burger.name} className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" whileHover={{ scale: 1.15, rotate: 8 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} />
        </div>
        <div className="flex-1 p-8 flex flex-col">
          <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-3">{burger.name}</h3>
          <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed line-clamp-2">{burger.description}</p>
          <div className="flex items-end justify-between mt-auto">
            <div className="flex flex-col"><span className="text-3xl font-black text-primary italic tracking-tighter">{formatPrice(burger.price)}</span></div>
            <Button onClick={handleAddToCart} className={`h-14 w-14 rounded-full p-0 transition-all duration-500 ${isAdded ? 'bg-green-500 text-white scale-110' : 'bg-primary text-black hover:bg-white hover:scale-110'}`}>
              {isAdded ? <Check className="w-7 h-7 stroke-[4]" /> : <ShoppingBag className="w-7 h-7 stroke-[4]" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}