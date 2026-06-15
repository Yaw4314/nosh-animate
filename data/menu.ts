export interface MenuItem { id: number; category: string; name: string; description: string; price: number; originalPrice?: number; image: string; popular: boolean; }
export const burgers: MenuItem[] = [
  { id: 1, category: 'beef', name: 'The Classic OG', description: 'Hand-smashed beef patty, melted cheddar, lettuce, pickles, and our signature NOSH sauce.', price: 490, originalPrice: 550, image: '/burger-classic.png', popular: true },
  { id: 2, category: 'beef', name: 'Double Trouble', description: 'Two 4oz beef patties, double cheese, caramelized onions, and secret animal-style sauce.', price: 790, image: '/burger-double.png', popular: true },
  { id: 3, category: 'special', name: 'Truffle Shuffle', description: 'Wagyu beef patty, sautéed mushrooms, Swiss cheese, and luxurious black truffle aioli.', price: 950, image: '/burger-truffle.png', popular: false },
  { id: 4, category: 'chicken', name: 'Spicy Zinger', description: 'Extra crispy Nashville-style fried chicken breast with jalapeños and spicy honey mustard.', price: 580, image: '/burger-zinger.png', popular: true },
  { id: 5, category: 'beef', name: 'The Smash BBQ', description: 'Beef patty topped with crispy onion rings, smoked turkey bacon, and hickory BBQ sauce.', price: 650, image: '/burger-bbq.png', popular: false },
  { id: 6, category: 'special', name: 'The Monster', description: 'The ultimate NOSH experience. Triple patty, fried egg, hash brown, and everything in between.', price: 1200, image: '/burger-monster.png', popular: true },
];