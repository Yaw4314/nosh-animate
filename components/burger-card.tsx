'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useState } from 'react';
import { ShoppingBag, Check, Star } from 'lucide-react';
import { MenuItem } from '@/data/menu';

export function BurgerCard({ burger }: { burger: MenuItem }) {
  const { addToCart } = useCart() as any;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id: burger.id, name: burger.name, price: burger.price, quantity: 1 });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const formatPrice = (p: number) => new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(p).replace('PKR', 'Rs.');

  return (
    <div className="group relative h-full">
      <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden h-full flex flex-col transition-all duration-500 hover:border-[#FFD700]/30 hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
        {burger.popular && (
          <div className="absolute top-6 left-6 z-10 bg-[#FFD700] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase italic tracking-tighter shadow-xl flex items-center gap-1">
            <Star className="w-3 h-3 fill-black" /> Best Seller
          </div>
        )}

        <div className="relative h-72 w-full flex items-center justify-center p-8 bg-zinc-800/30 overflow-hidden">
          <motion.img
            src={burger.image}
            alt={burger.name}
            className="w-full h-full object-cover rounded-2xl drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex-1 p-8 flex flex-col bg-zinc-900/40 backdrop-blur-md">
          <div className="mb-4">
             <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-2">{burger.name}</h3>
             <div className="h-1 w-12 bg-[#FFD700] transform -skew-x-12" />
          </div>

          <p className="text-zinc-500 text-sm font-medium mb-10 leading-relaxed line-clamp-3">{burger.description}</p>

          <div className="flex items-end justify-between mt-auto">
            <div className="flex flex-col">
              {burger.originalPrice && <span className="text-zinc-600 text-xs font-black line-through italic mb-1">Rs. {burger.originalPrice}</span>}
              <span className="text-4xl font-black text-[#FFD700] italic tracking-tighter leading-none">{formatPrice(burger.price)}</span>
            </div>

            <Button
              onClick={handleAddToCart}
              className={`h-16 w-16 rounded-2xl p-0 transition-all duration-500 shadow-xl ${
                isAdded ? 'bg-green-500 text-white' : 'bg-[#FFD700] text-black hover:bg-white hover:scale-110 active:scale-95'
              }`}
            >
              {isAdded ? <Check className="w-8 h-8 stroke-[4]" /> : <ShoppingBag className="w-8 h-8 stroke-[4]" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
