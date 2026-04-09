'use client';

import { activeCauses, categories } from '@/data/causes';
import Link from 'next/link';
import { useState } from 'react';

export default function CausesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCauses = selectedCategory === 'all'
    ? activeCauses
    : activeCauses.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            All Causes
          </h1>
          <p className="text-xl text-gray-300">
            Choose a cause. Enter to win. Change lives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCauses.map((cause) => {
            const progress = (cause.totalRaised / cause.goal) * 100;

            return (
              <Link
                key={cause.id}
                href={`/causes/${cause.id}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-white/10"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4 text-6xl">
                    {cause.category === 'health' && '🏥'}
                    {cause.category === 'environment' && '🌊'}
                    {cause.category === 'education' && '🎨'}
                  </div>

                  {/* Organization */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-purple-300">
                      {cause.organization}
                    </span>
                    {cause.verified && (
                      <span className="text-xs text-green-400">✓</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-white line-clamp-2">
                    {cause.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-300 line-clamp-2">
                    {cause.description}
                  </p>

                  {/* Prize Badge */}
                  <div className="mb-4 rounded-lg bg-purple-500/20 p-3">
                    <div className="text-xs text-purple-300">
                      {cause.prizeType === '50/50' ? '50/50 Draw' : 'Fixed Prize'}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {cause.prizeType === '50/50'
                        ? 'Win 50% of Pool'
                        : `Win $${cause.prizeAmount?.toLocaleString()}`}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">
                        ${cause.totalRaised.toLocaleString()}
                      </span>
                      <span className="text-gray-400">
                        ${cause.goal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{cause.entries}</div>
                      <div className="text-xs text-gray-400">Entries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-300">
                        {cause.daysLeft} days
                      </div>
                      <div className="text-xs text-gray-400">Left</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-center font-semibold text-white transition-all group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    Enter for ${cause.entryPrice}
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-10"></div>
              </Link>
            );
          })}
        </div>

        {filteredCauses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">
              No causes found in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
