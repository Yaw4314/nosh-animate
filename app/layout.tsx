import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nosh-burgers.vercel.app'),
  title: "NOSH Burgers & More — Islamabad's Best Smash Burgers | BESSSSST Burgers in Town",
  description: "Unreal burgers. Real flavor. Islamabad's finest smash burgers delivered to your door via WhatsApp or Foodpanda.",
  openGraph: {
    title: "NOSH Burgers & More — Islamabad's Best Smash Burgers",
    description: "Experience the best burgers in town. Hand-smashed, premium ingredients.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
