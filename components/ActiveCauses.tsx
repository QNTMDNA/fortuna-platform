'use client';

import { activeCauses } from '@/data/causes';
import Link from 'next/link';

export function ActiveCauses() {
  return (
    <div className="relative z-10 px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Active Causes
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Every entry funds real impact. Every draw changes a life.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activeCauses.map((cause) => {
            const progress = (cause.totalRaised / cause.goal) * 100;
            const prizeDisplay = cause.prizeType === '50/50' 
              ? '50/50 Draw' 
              : `$${cause.prizeAmount?.toLocaleString()} Fixed Prize`;
            
            return (
              <div
                key={cause.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-white/10"
              >
                {/* Card Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4 text-6xl">
                    {cause.category === 'health' && '🏥'}
                    {cause.category === 'environment' && '🌊'}
                    {cause.category === 'education' && '🎨'}
                  </div>

                  {/* Organization Badge */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-purple-300">
                      {cause.organization}
                    </span>
                    {cause.verified && (
                      <span className="text-xs text-green-400" title="Verified 501(c)(3)">
                        ✓
                      </span>
                    )}
                  </div>

                  {/* Cause Title */}
                  <h3 className="mb-2 text-xl font-bold text-white line-clamp-2">
                    {cause.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-300 line-clamp-2">
                    {cause.description}
                  </p>

                  {/* Prize Info */}
                  <div className="mb-4 rounded-lg bg-purple-500/20 p-3">
                    <div className="text-xs font-medium text-purple-300">
                      {prizeDisplay}
                    </div>
                    <div className="text-lg font-bold text-white">
                      Win {cause.prizeType === '50/50' ? '50% of Pool' : `$${cause.prizeAmount?.toLocaleString()}`}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {cause.prizeType === '50/50' ? '50%' : '90%'} to {cause.organization}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">
                        ${cause.totalRaised.toLocaleString()} raised
                      </span>
                      <span className="text-gray-400">
                        ${cause.goal.toLocaleString()} goal
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cause.entries}
                      </div>
                      <div className="text-xs text-gray-400">Entries</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-300">
                        {cause.daysLeft} days
                      </div>
                      <div className="text-xs text-gray-400">Remaining</div>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="mb-4 rounded-lg bg-white/5 p-2 text-xs text-gray-400">
                    {cause.impactStatement}
                  </div>

                  {/* CTA Button */}
                  <Link href={`/causes/${cause.id}`}>
                    <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                      Enter for ${cause.entryPrice}
                    </button>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-10"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/causes">
            <button className="rounded-full border-2 border-white/20 px-8 py-3 font-semibold text-white transition-all hover:border-purple-500/50 hover:bg-white/5">
              View All Causes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
