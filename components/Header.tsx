'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export function Header() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-8 border-b border-white/10">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo-compact.svg" alt="Fortuna" className="h-10 cursor-pointer" />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">
          How It Works
        </Link>
        <Link href="/causes" className="text-gray-300 hover:text-white transition-colors">
          Causes
        </Link>
        <Link href="/charities" className="text-gray-300 hover:text-white transition-colors">
          For Charities
        </Link>
      </div>
      
      <ConnectButton />
    </nav>
  );
}
