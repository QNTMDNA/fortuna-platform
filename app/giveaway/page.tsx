'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function GiveawayPage() {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-5 py-2 text-sm text-purple-200 backdrop-blur-sm">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400"></span>
            Provably Fair Giveaways
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The Ultimate
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Crypto Giveaway Tool
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Create provably fair giveaways on any blockchain. Automate tasks, grow your community,
            and distribute prizes — all verified on-chain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#create"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Create Giveaway
            </Link>
            <Link
              href="/charities/partner"
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-6 border-y border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-400">6+</div>
            <div className="text-sm text-gray-400 mt-1">Social Platforms</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-pink-400">100%</div>
            <div className="text-sm text-gray-400 mt-1">Provably Fair</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-400 mt-1">Blockchains</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-pink-400">0</div>
            <div className="text-sm text-gray-400 mt-1">Platform Fees</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">1. Configure</h3>
              <p className="text-gray-400">
                Name your giveaway, select prize rewards, choose a draw method,
                and set your social tasks.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-bold mb-3">2. Launch & Share</h3>
              <p className="text-gray-400">
                Share your giveaway link. Tasks are auto-verified in real-time
                across all social platforms.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">3. Draw & Distribute</h3>
              <p className="text-gray-400">
                Winners selected with provably fair algorithm. Prizes distributed
                automatically to wallets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Provably Fair Drawing</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our algorithm uses a combination of server seed, client seed (ETH block hash),
                and participant nonce (PID) to guarantee unbiased random selection.
              </p>
              <div className="p-4 rounded-lg bg-black/30 font-mono text-sm text-green-400">
                <div className="text-gray-500 mb-2">// Linear Congruential Generator (Glibc)</div>
                <div>const hash = Encrypt(clientSeed, serverSeed);</div>
                <div>const winner = Calculate(hash, nonce, lastDigits);</div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Server seed is hashed and displayed BEFORE the draw — proving no manipulation.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-3">Auto Task Verification</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Automatically verify tasks across all major platforms. Participants complete social
                tasks and we validate completion in real-time.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300">Twitter — Follow, RT, like, comment, quote</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300">Telegram — Join group, subscribe to channel</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300">Discord — Join server, react to message</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300">Wallet — Connect, hold min balance, NFT ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300">YouTube — Subscribe, like, comment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300">Website — Visit URL, spend min time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Draw Methods */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            3 Draw Methods
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Whatever your giveaway goals, our flexible draw methods cover every use case.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Timed */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Timed Draw</h3>
              <p className="text-gray-400 text-sm mb-4">Winners drawn at a specific date and time</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Set start & end date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>All entries collected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Draw at exact time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Perfect for: Events, milestones</span>
                </li>
              </ul>
            </div>

            {/* Instant */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Draw</h3>
              <p className="text-gray-400 text-sm mb-4">Prize drawn immediately after task completion</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Complete tasks → draw</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>High engagement per user</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Probability based</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Perfect for: Viral growth</span>
                </li>
              </ul>
            </div>

            {/* Goal-Triggered */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Goal-Triggered</h3>
              <p className="text-gray-400 text-sm mb-4">Draw executes only when goals are achieved</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>TG members hit 100K</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>X followers hit 150K</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>80K users join giveaway</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <span>Perfect for: Growth targets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Cheating */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            No Bots. No Cheating.
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Multi-layer anti-spam protection ensures only real participants win your giveaways.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-bold mb-2">Bot Detection (ML)</h4>
              <p className="text-sm text-gray-400">Machine learning algorithms analyze activity patterns to detect and block spam accounts.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-bold mb-2">IP Verification</h4>
              <p className="text-sm text-gray-400">Detects multiple participants from the same IP address. Prevents fake farming.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="font-bold mb-2">Email Verification</h4>
              <p className="text-sm text-gray-400">Required valid email for all participants. Filters throwaway accounts.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-3xl mb-3">🐦</div>
              <h4 className="font-bold mb-2">Twitter Filters</h4>
              <p className="text-sm text-gray-400">Set minimum account age and follower count. Block low-quality participants.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-3xl mb-3">⛓️</div>
              <h4 className="font-bold mb-2">On-Chain Verification</h4>
              <p className="text-sm text-gray-400">Verify wallet holdings — NFTs, fungible tokens, transaction history on 50+ chains.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/10">
              <div className="text-3xl mb-3">🎲</div>
              <h4 className="font-bold mb-2">Provably Fair</h4>
              <p className="text-sm text-gray-400">Server seed hashed before draw. ETH block hash as client seed. Verifiable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Distribution */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Auto-Distribution
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Prizes distributed automatically to winners. Save time and money on every giveaway.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">🪙</span>
                Token Prizes
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Automatically distribute tokens (ETH, ERC-20, SPL) directly to winners' wallets. Zero manual effort needed.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> Auto-distribution
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> 0 platform fees
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> 50+ chain support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> On-chain proof
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">🎁</span>
                Manual Prizes
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                NFTs, whitelist spots, free mints, subscriptions, merch, and more. Our system notifies and tracks delivery.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> NFT transfers
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> Whitelist entries
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> Subscriptions
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span> Custom prizes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Create Giveaway CTA */}
      <section id="create" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/30">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Giveaway?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Create a provably fair giveaway in 3 minutes. Automate everything.
              Grow your community while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                Create Giveaway — Free
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              No signup required • Free forever • No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Built For Every Use Case
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Grow X/Twitter', desc: 'Followers, retweets, quote tweets, replies' },
              { icon: '📱', title: 'Telegram Growth', desc: 'Members, subscribers, channel growth' },
              { icon: '🎮', title: 'Discord Server', desc: 'Server members, active engagement' },
              { icon: '🏆', title: 'Token Launch', desc: 'Airdrops, airdrop campaigns, token rewards' },
              { icon: '🎨', title: 'NFT Project', desc: 'Whitelist, mint campaigns, holder rewards' },
              { icon: '❤️', title: 'Charity Giveaway', desc: 'Fundraising campaigns, donor engagement' },
              { icon: '🌐', title: 'Website Traffic', desc: 'Page visits, signups, email collection' },
              { icon: '📺', title: 'YouTube Growth', desc: 'Subscribers, views, engagement' },
            ].map((case_, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/50 border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="text-3xl mb-3">{case_.icon}</div>
                <h4 className="font-bold mb-1">{case_.title}</h4>
                <p className="text-sm text-gray-400">{case_.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
// trigger redeploy Tue Apr 14 15:31:27 UTC 2026
