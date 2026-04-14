'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [charitiesOpen, setCharitiesOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-8 border-b border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo-compact.svg" alt="Fortuna" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">
          How It Works
        </Link>
        <Link href="/causes" className="text-gray-300 hover:text-white transition-colors">
          Causes
        </Link>
        <Link href="/giveaway" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
          Giveaway Tool
        </Link>
        <Link href="/giveaway" className="text-gray-300 hover:text-white transition-colors">
          Giveaway Tool
        </Link>
        
        {/* For Charities Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setCharitiesOpen(true)}
          onMouseLeave={() => setCharitiesOpen(false)}
        >
          <Link href="/charities" className="text-gray-300 hover:text-white transition-colors">
            For Charities
          </Link>
          
          {charitiesOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl py-2">
              <Link 
                href="/charities/partner" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Partner With Us
              </Link>
              <Link 
                href="/charities/how-it-works" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
              <Link 
                href="/charities/requirements" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Requirements
              </Link>
              <Link 
                href="/charities/contact" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <ConnectButton />
    </nav>
  );
}
/* Force rebuild Fri Apr 10 12:41:20 UTC 2026 */
