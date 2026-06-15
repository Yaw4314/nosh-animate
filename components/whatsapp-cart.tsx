'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart, CartItem } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { X, Plus, Minus, MessageCircle, ShoppingBag, Truck, Store } from 'lucide-react';

export function WhatsAppCart({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('delivery');

  const subtotal = getTotalPrice();
  const deliveryFee = orderType === 'delivery' ? 150 : 0;
  const total = subtotal + deliveryFee;
  const formatPKR = (v: number) => new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(v).replace('PKR', 'Rs.');

  const handleCheckout = () => {
    if (items.length === 0) return;
    let text = `*🍔 NOSH (Burgers & More) - NEW ORDER*%0A%0A`;
    items.forEach((i: CartItem) => { text += `*${i.name.toUpperCase()}*%0A  Qty: ${i.quantity} × ${formatPKR(i.price)}%0A  Subtotal: ${formatPKR(i.price * i.quantity)}%0A%0A`; });
    text += `--------------------------%0A*SUBTOTAL:* ${formatPKR(subtotal)}%0A`;
    if (orderType === 'delivery') text += `*DELIVERY FEE:* ${formatPKR(deliveryFee)}%0A`;
    text += `*TOTAL AMOUNT:* ${formatPKR(total)}%0A%0A*ORDER TYPE:* ${orderType.toUpperCase()}%0A%0A_Please confirm my order._`;
    window.open(`https://wa.me/923265550192?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/90 z-[100] backdrop-blur-xl" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/5 z-[101] flex flex-col shadow-2xl">
            <div className="p-8 border-b border-white/5 flex items-center justify-between"><div className="flex items-center gap-4"><ShoppingBag className="w-8 h-8 text-primary" /><h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Your Bag</h2></div><button onClick={onClose} className="h-12 w-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10"><X className="w-8 h-8 text-white" /></button></div>
            <div className="flex-1 overflow-y-auto p-8 space-y-6">{items.length === 0 ? <p className="text-center opacity-20 uppercase font-black tracking-tighter">Bag is empty</p> : items.map((item: CartItem) => (<div key={item.id} className="bg-zinc-900 p-6 rounded-[2rem] border border-white/5"><div className="flex justify-between items-start mb-4"><div><h4 className="text-xl font-black text-white uppercase italic tracking-tighter">{item.name}</h4><p className="text-primary font-black text-2xl mt-1 italic tracking-tighter">{formatPKR(item.price)}</p></div><button onClick={() => removeFromCart(item.id)} className="text-zinc-700 hover:text-red-500"><X className="w-6 h-6" /></button></div><div className="flex items-center justify-between"><div className="flex items-center bg-black rounded-full p-1 border border-white/10"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-10 w-10 flex items-center justify-center"><Minus className="w-5 h-5" /></button><span className="w-12 text-center font-black">{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-10 w-10 flex items-center justify-center"><Plus className="w-5 h-5" /></button></div></div></div>))}</div>
            {items.length > 0 && (<div className="p-8 border-t border-white/5 bg-zinc-950 space-y-8"><div className="flex gap-4 p-2 bg-zinc-900 rounded-[2rem] border border-white/5"><button onClick={() => setOrderType('pickup')} className={`flex-1 py-4 rounded-[1.5rem] font-black uppercase italic tracking-tighter transition-all ${orderType === 'pickup' ? 'bg-primary text-black' : 'text-zinc-600'}`}>Pickup</button><button onClick={() => setOrderType('delivery')} className={`flex-1 py-4 rounded-[1.5rem] font-black uppercase italic tracking-tighter transition-all ${orderType === 'delivery' ? 'bg-primary text-black' : 'text-zinc-600'}`}>Delivery</button></div><div className="flex justify-between items-end pt-4 border-t border-white/5"><span className="text-white font-black uppercase italic text-xl tracking-tighter">Total</span><span className="text-primary font-black text-5xl italic tracking-tighter">{formatPKR(total)}</span></div><Button onClick={handleCheckout} className="w-full bg-green-500 hover:bg-green-400 text-black py-10 rounded-[2rem] font-black uppercase italic tracking-tighter text-2xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] gap-4"><MessageCircle className="w-8 h-8 stroke-[3]" /> Checkout WhatsApp</Button></div>)}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
