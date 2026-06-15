'use client';

import { Hero } from '@/components/hero';
import { MenuWrapper } from '@/components/menu-wrapper';
import { Testimonials } from '@/components/testimonials';
import { FloatingActionBar } from '@/components/floating-action-bar';
import { WhatsAppCart } from '@/components/whatsapp-cart';
import { useState } from 'react';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <MenuWrapper />
      <Testimonials />
      <FloatingActionBar onCartClick={() => setCartOpen(true)} />
      <WhatsAppCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}