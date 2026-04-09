'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link
            href="/charities"
            className="text-purple-400 hover:text-purple-300 font-semibold mb-6 inline-block"
          >
            ← Back to For Charities
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Fortuna Works for Charities
          </h1>
          <p className="text-xl text-gray-300">
            A step-by-step guide to launching your campaign on Fortuna.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 mb-20">
          {/* Step 1 */}
          <div className="relative pl-8 border-l-2 border-purple-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Application & Verification</h2>
            <p className="text-gray-300 mb-4">
              Submit your charity application through our partner portal. We'll verify your 501(c)(3) status and review your mission.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold mb-3">What We Need:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• EIN (Tax ID)</li>
                <li>• IRS determination letter</li>
                <li>• Organization website</li>
                <li>• Primary contact information</li>
                <li>• Mission statement</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                ⏱️ <strong>Timeline:</strong> 24-48 hours for verification
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8 border-l-2 border-purple-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Campaign Design</h2>
            <p className="text-gray-300 mb-4">
              Work with our team to design your cause. We'll help you choose the right structure to maximize donations.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-bold mb-2">50/50 Draw</h4>
                <p className="text-sm text-gray-300">
                  Winner gets 50% of pool, charity gets 50%. Great for large prizes.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-bold mb-2">Fixed Prize</h4>
                <p className="text-sm text-gray-300">
                  Winner gets fixed amount (e.g., $5,000), rest goes to charity.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-bold mb-2">Donated Prize</h4>
                <p className="text-sm text-gray-300">
                  Partner donates prize, 100% of funds go to charity.
                </p>
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold mb-3">You Choose:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Prize type & amount</li>
                <li>• Donation entry price (e.g., $5, $10, $25)</li>
                <li>• Campaign duration (typically 2-4 weeks)</li>
                <li>• Draw date</li>
                <li>• Campaign imagery & messaging</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                ⏱️ <strong>Timeline:</strong> 3-5 days to finalize campaign
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8 border-l-2 border-purple-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Smart Contract Deployment</h2>
            <p className="text-gray-300 mb-4">
              We deploy your cause to the blockchain. Every donation will be secured by immutable smart contracts.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold mb-3">What Happens:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Your cause is created on-chain (Base L2)</li>
                <li>• Smart contract is configured with your parameters</li>
                <li>• Chainlink VRF subscription is funded</li>
                <li>• Your crypto wallet is connected (we help set this up)</li>
                <li>• Campaign page goes live on Fortuna</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                ⏱️ <strong>Timeline:</strong> 1-2 days for deployment
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative pl-8 border-l-2 border-purple-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold mb-4">Step 4: Campaign Launch</h2>
            <p className="text-gray-300 mb-4">
              Your campaign goes live! Donors can now contribute via crypto wallet.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold mb-3">Marketing Support:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Featured on Fortuna homepage</li>
                <li>• Social media promotion (Twitter, Telegram)</li>
                <li>• Email to Fortuna donor base</li>
                <li>• Shareable campaign link</li>
                <li>• Real-time donation tracking dashboard</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                📣 <strong>You help by:</strong> Promoting via your email list, social media, and website
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative pl-8 border-l-2 border-purple-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold mb-4">Step 5: The Draw</h2>
            <p className="text-gray-300 mb-4">
              On draw day, Chainlink VRF selects a winner using provably fair randomness.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold mb-3">Draw Process:</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex gap-3">
                  <div className="font-bold text-purple-400">1.</div>
                  <div>
                    <strong>Donations close</strong> at the scheduled time (e.g., May 3, 2026 at 11:59 PM EST)
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-purple-400">2.</div>
                  <div>
                    <strong>VRF request</strong> is triggered (Chainlink generates random number)
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-purple-400">3.</div>
                  <div>
                    <strong>Winner selected</strong> based on verifiable randomness
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-purple-400">4.</div>
                  <div>
                    <strong>Winner announced</strong> on Fortuna and social media
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
                <p className="text-sm text-purple-200">
                  🔒 <strong>Provably Fair:</strong> Anyone can verify the draw result on-chain. No trust required.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="relative pl-8">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold mb-4">Step 6: Fund Distribution</h2>
            <p className="text-gray-300 mb-4">
              Smart contract automatically distributes funds to winner and charity.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold mb-3">Automatic Distribution:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Winner receives their prize (ETH/USDC to their wallet)</li>
                <li>• Charity receives donations (minus 10% platform fee)</li>
                <li>• All transactions are recorded on-chain</li>
                <li>• No manual transfers needed</li>
              </ul>
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-200">
                  💰 <strong>Example:</strong> $10,000 raised → Winner gets $4,500, Charity gets $4,500, Platform gets $1,000
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                ⏱️ <strong>Timeline:</strong> Funds distributed within 24 hours of draw
              </p>
            </div>
          </div>
        </div>

        {/* Post-Campaign */}
        <div className="p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 mb-12">
          <h2 className="text-2xl font-bold mb-4">After Your Campaign</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-purple-400">✓</span>
              <span>Receive full analytics report (donors, amounts, engagement)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">✓</span>
              <span>Access donor list (with permission) for future campaigns</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">✓</span>
              <span>Option to run another campaign (many charities do quarterly draws)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">✓</span>
              <span>Featured in Fortuna case studies</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Join leading charities using blockchain for transparent fundraising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/charities/partner"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Apply to Partner
            </Link>
            <Link
              href="/charities/contact"
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-colors"
            >
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
