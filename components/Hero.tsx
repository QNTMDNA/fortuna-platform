'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center">
          <img src="/logo-compact.svg" alt="Fortuna" className="h-10" />
        </div>
        <ConnectButton />
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-200 backdrop-blur-sm">
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
            </span>
            Launching May 1, 2026
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Play for Purpose.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Every Entry Matters.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-xl text-gray-300 sm:text-2xl">
            The world's first on-chain charitable giving platform — where every donation is transparent,
            every draw is verifiably fair, and every cause is governed by smart contract, not institutional trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Enter First Draw</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% On-Chain</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Provably Fair</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Zero Trust Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
          <div className="h-[600px] w-[600px] rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="h-[400px] w-[400px] rounded-full bg-pink-500 opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
