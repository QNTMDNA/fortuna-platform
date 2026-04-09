'use client';

import { activeCauses } from '@/data/causes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function CausePage({ params }: { params: { id: string } }) {
  const cause = activeCauses.find((c) => c.id === params.id);
  const [entryCount, setEntryCount] = useState(1);

  if (!cause) {
    notFound();
  }

  const progress = (cause.totalRaised / cause.goal) * 100;
  const totalCost = entryCount * cause.entryPrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-8 text-purple-300 hover:text-purple-200 transition-colors"
        >
          ← Back to Causes
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Details */}
          <div>
            {/* Hero Image */}
            <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-9xl">
                {cause.category === 'health' && '🏥'}
                {cause.category === 'environment' && '🌊'}
                {cause.category === 'education' && '🎨'}
              </span>
            </div>

            {/* Organization */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-medium text-purple-300">
                {cause.organization}
              </span>
              {cause.verified && (
                <span className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                  ✓ Verified 501(c)(3)
                </span>
              )}
              <a
                href={cause.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Visit Website →
              </a>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {cause.title}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-gray-300 mb-8">
              {cause.description}
            </p>

            {/* Long Description */}
            <div className="prose prose-invert mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Cause</h2>
              <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                {cause.longDescription}
              </div>
            </div>

            {/* Impact Statement */}
            <div className="p-6 bg-purple-900/30 border border-purple-500/30 rounded-xl mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Your Impact</h3>
              <p className="text-gray-300">{cause.impactStatement}</p>
            </div>
          </div>

          {/* Right Column: Entry Form */}
          <div>
            <div className="sticky top-8 space-y-6">
              {/* Prize Info Card */}
              <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
                <div className="mb-6">
                  <div className="text-sm text-purple-300 mb-1">
                    {cause.prizeType === '50/50' ? '50/50 Draw' : 'Fixed Prize Draw'}
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {cause.prizeType === '50/50' 
                      ? 'Win 50% of Prize Pool' 
                      : `Win $${cause.prizeAmount?.toLocaleString()}`}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    {cause.prizeType === '50/50' ? '50%' : '90%'} goes to {cause.organization}
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="mb-3 h-3 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-semibold">
                      ${cause.totalRaised.toLocaleString()}
                    </span>
                    <span className="text-gray-400">
                      of ${cause.goal.toLocaleString()} goal
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-white">{cause.entries}</div>
                    <div className="text-sm text-gray-400">Total Entries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-300">{cause.daysLeft} days</div>
                    <div className="text-sm text-gray-400">Remaining</div>
                  </div>
                </div>

                {/* Draw Date */}
                <div className="mb-6 text-center">
                  <div className="text-sm text-gray-400 mb-1">Draw Date</div>
                  <div className="text-lg font-semibold text-white">{cause.endDate}</div>
                </div>

                {/* Entry Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Entries
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEntryCount(Math.max(1, entryCount - 1))}
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-bold text-xl"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={entryCount}
                      onChange={(e) => setEntryCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                      className="flex-1 h-12 text-center bg-white/5 border border-white/10 rounded-lg text-white font-bold text-xl focus:outline-none focus:border-purple-500"
                    />
                    <button
                      onClick={() => setEntryCount(Math.min(100, entryCount + 1))}
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-2 text-sm text-gray-400 text-center">
                    ${cause.entryPrice} per entry × {entryCount} = <strong className="text-white">${totalCost}</strong>
                  </div>
                </div>

                {/* Enter Button */}
                <button className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-lg text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
                  Enter for ${totalCost}
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Secure payment via crypto wallet (ETH, USDC on Base)
                </p>
              </div>

              {/* How It Works */}
              <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">1.</span>
                    <span>Choose your entry count and connect wallet</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">2.</span>
                    <span>Donate via ETH or USDC (Base network)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">3.</span>
                    <span>Wait for draw on {cause.endDate}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">4.</span>
                    <span>Winner selected via Chainlink VRF (provably fair)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">5.</span>
                    <span>Prize sent automatically to winner's wallet</span>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
                <div className="text-sm text-green-300 space-y-1">
                  <div>🔒 100% on-chain transparency</div>
                  <div>✓ Verified charity partner</div>
                  <div>🎲 Provably fair randomness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
