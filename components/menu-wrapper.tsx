'use client';

import { useEffect, useState } from 'react';
import { Menu } from './menu';
import { MenuItem, burgers as staticBurgers } from '@/data/menu';

export function MenuWrapper() {
  const [items, setItems] = useState<MenuItem[]>(staticBurgers);

  useEffect(() => {
    async function loadMenu() {
      try {
        const response = await fetch('/api/menu');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) setItems(data);
        }
      } catch (error) {}
    }
    loadMenu();
  }, []);

  return <Menu initialItems={items} />;
}