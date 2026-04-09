'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CharitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Partner With Fortuna
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reach millions of crypto donors. Increase donations. Build trust through transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/charities/partner"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Become a Partner
            </Link>
            <Link
              href="/charities/contact"
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Partner With Fortuna
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/50 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Increased Donations</h3>
              <p className="text-gray-300">
                Tap into the $2.3B+ crypto philanthropy market. Attract a new generation of donors who prefer transparent, on-chain giving.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/50 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-gray-300">
                Access donors worldwide. No payment processor fees. Instant, borderless donations in ETH, USDC, and more.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/50 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">100% Transparency</h3>
              <p className="text-gray-300">
                Every donation is recorded on-chain. Build trust with donors through verifiable, auditable transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Apply to Partner</h3>
                <p className="text-gray-300">
                  Submit your charity application. We review within 48 hours and verify your 501(c)(3) status.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create Your Campaign</h3>
                <p className="text-gray-300">
                  Work with our team to design your cause. Choose prize type (50/50 draw, fixed prize, or donated prize), set donation amounts, and pick a draw date.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Go Live</h3>
                <p className="text-gray-300">
                  Your cause goes live on Fortuna. Donors can contribute via crypto wallet. All donations are secured by smart contracts.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Receive Funds</h3>
                <p className="text-gray-300">
                  After the draw, funds are automatically distributed. You receive donations directly to your crypto wallet (minus 10% platform fee).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/charities/how-it-works"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Requirements
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-white/20 flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-2">501(c)(3) Status</h3>
                <p className="text-gray-300">
                  Your organization must be a registered 501(c)(3) nonprofit in the United States (or equivalent in other countries).
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-white/20 flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-2">Crypto Wallet</h3>
                <p className="text-gray-300">
                  Ability to receive funds via crypto wallet (ETH, USDC on Base). We can help set this up if needed.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-white/20 flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-2">Mission Alignment</h3>
                <p className="text-gray-300">
                  Causes that align with Fortuna's values: transparency, impact, and innovation in philanthropy.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-white/20 flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-2">Marketing Support</h3>
                <p className="text-gray-300">
                  Willingness to promote your campaign through your channels (email, social media, website).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/charities/requirements"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              View Full Requirements →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading charities using blockchain for transparent, gamified fundraising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/charities/partner"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
            <Link
              href="/charities/contact"
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="p-6 bg-slate-900/50 rounded-xl border border-white/20">
              <summary className="font-bold cursor-pointer">
                What is the platform fee?
              </summary>
              <p className="mt-4 text-gray-300">
                Fortuna charges a 10% platform fee on all donations. This covers infrastructure, smart contract costs, and platform operations. You receive 90% of donations (minus any prize pool if applicable).
              </p>
            </details>

            <details className="p-6 bg-slate-900/50 rounded-xl border border-white/20">
              <summary className="font-bold cursor-pointer">
                How long does verification take?
              </summary>
              <p className="mt-4 text-gray-300">
                We typically review and verify charity applications within 48 hours. Once approved, we'll work with you to launch your campaign within 1-2 weeks.
              </p>
            </details>

            <details className="p-6 bg-slate-900/50 rounded-xl border border-white/20">
              <summary className="font-bold cursor-pointer">
                Do we need crypto experience?
              </summary>
              <p className="mt-4 text-gray-300">
                No! We handle all the technical complexity. We'll help you set up a crypto wallet and guide you through the entire process. Most charities are up and running within a week.
              </p>
            </details>

            <details className="p-6 bg-slate-900/50 rounded-xl border border-white/20">
              <summary className="font-bold cursor-pointer">
                Can we convert crypto to fiat?
              </summary>
              <p className="mt-4 text-gray-300">
                Yes! We can help you convert donations to USD via Coinbase, Kraken, or other exchanges. Many charities choose to keep a portion in crypto for future growth.
              </p>
            </details>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
