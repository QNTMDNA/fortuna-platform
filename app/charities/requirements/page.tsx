'use client';

import Link from 'next/link';

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link
            href="/charities"
            className="text-purple-400 hover:text-purple-300 font-semibold mb-6 inline-block"
          >
            ← Back to For Charities
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner Requirements
          </h1>
          <p className="text-xl text-gray-300">
            What your organization needs to launch a campaign on Fortuna.
          </p>
        </div>

        {/* Legal Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legal Requirements</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">501(c)(3) Tax-Exempt Status</h3>
                  <p className="text-gray-300 mb-4">
                    Your organization must be registered as a 501(c)(3) nonprofit in the United States, or equivalent in other countries (we support international charities on a case-by-case basis).
                  </p>
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <p className="text-sm text-slate-300 mb-2"><strong>What we'll ask for:</strong></p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• EIN (Employer Identification Number)</li>
                      <li>• IRS determination letter</li>
                      <li>• Proof of good standing with state</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">⚖️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compliance & Good Standing</h3>
                  <p className="text-gray-300 mb-4">
                    Your organization must be in good standing with all regulatory bodies and have no significant legal issues.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Up-to-date IRS Form 990 filings</li>
                    <li>• No recent sanctions or violations</li>
                    <li>• Active registration in states where soliciting donations</li>
                    <li>• Compliance with state charitable solicitation laws</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Requirements</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Crypto Wallet (We Can Help!)</h3>
                  <p className="text-gray-300 mb-4">
                    You need a crypto wallet to receive donations. Don't have one? No problem—we'll help you set it up in 15 minutes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <p className="font-bold text-sm mb-2">Option 1: MetaMask</p>
                      <p className="text-sm text-gray-300">
                        Browser extension wallet. Easy to use, widely trusted.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <p className="font-bold text-sm mb-2">Option 2: Coinbase Wallet</p>
                      <p className="text-sm text-gray-300">
                        Mobile wallet with fiat conversion built-in.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    💡 <strong>We recommend:</strong> Coinbase Wallet for easy conversion to USD.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">🖼️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Campaign Assets</h3>
                  <p className="text-gray-300 mb-4">
                    Basic materials to promote your campaign. We can help create these if needed.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Organization logo (PNG, transparent background preferred)</li>
                    <li>• 2-3 high-quality photos of your cause/impact</li>
                    <li>• Brief description of your mission (200-300 words)</li>
                    <li>• (Optional) Impact stories or testimonials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizational Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Organizational Requirements</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mission Alignment</h3>
                  <p className="text-gray-300 mb-4">
                    Your cause should align with Fortuna's values: transparency, impact, and innovation in philanthropy.
                  </p>
                  <div className="p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                    <p className="text-sm text-green-200 mb-2"><strong>✓ Great Fit:</strong></p>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>• Health & medical research</li>
                      <li>• Children & families</li>
                      <li>• Education & scholarships</li>
                      <li>• Humanitarian aid & disaster relief</li>
                      <li>• Environmental conservation</li>
                      <li>• Animal welfare</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-900/20 border border-red-500/20 rounded-lg mt-3">
                    <p className="text-sm text-red-200 mb-2"><strong>✗ Not Eligible:</strong></p>
                    <ul className="text-sm text-red-100 space-y-1">
                      <li>• Political organizations or campaigns</li>
                      <li>• Religious organizations (unless secular programs)</li>
                      <li>• Private foundations (must be public charity)</li>
                      <li>• Organizations with discriminatory practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparency & Reporting</h3>
                  <p className="text-gray-300 mb-4">
                    Willingness to share impact metrics and how funds are used.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Publicly available financial statements (Form 990)</li>
                    <li>• Charity Navigator or GuideStar profile (preferred)</li>
                    <li>• Impact reporting (how donations are used)</li>
                    <li>• Agreement to provide post-campaign report to donors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">📣</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Marketing Participation</h3>
                  <p className="text-gray-300 mb-4">
                    Commitment to promote your campaign through your channels.
                  </p>
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <p className="text-sm text-slate-300 mb-2"><strong>We ask that you:</strong></p>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Email your donor list (at least 2 times during campaign)</li>
                      <li>• Post on social media (minimum 3-5 posts)</li>
                      <li>• Feature campaign on your website</li>
                      <li>• (Optional) Run paid ads to boost reach</li>
                    </ul>
                  </div>
                  <p className="text-sm text-purple-300 mt-3">
                    💡 <strong>We provide:</strong> Email templates, social graphics, and copy you can customize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Financial Requirements</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">💳</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Platform Fee</h3>
                  <p className="text-gray-300 mb-4">
                    Fortuna charges a 10% platform fee on all donations. This covers:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Smart contract gas fees</li>
                    <li>• Chainlink VRF (randomness) costs</li>
                    <li>• Platform development & maintenance</li>
                    <li>• Marketing & promotional support</li>
                  </ul>
                  <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
                    <p className="text-sm text-purple-200">
                      <strong>Example:</strong> $10,000 raised in 50/50 draw → Winner: $4,500 | Charity: $4,500 | Platform: $1,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-4">
                <div className="text-3xl">🔄</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No Upfront Costs</h3>
                  <p className="text-gray-300">
                    Zero setup fees, zero monthly fees. We only earn when you do (via the 10% platform fee). There's no risk or financial commitment to apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 mb-12">
          <h2 className="text-2xl font-bold mb-4">Application Process</h2>
          <div className="space-y-3 text-slate-300">
            <div className="flex gap-3">
              <span className="font-bold text-purple-400">1.</span>
              <span><strong>Submit application</strong> — Fill out partner form (10 minutes)</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-purple-400">2.</span>
              <span><strong>Verification</strong> — We review your 501(c)(3) status (24-48 hours)</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-purple-400">3.</span>
              <span><strong>Kickoff call</strong> — Design your campaign together (30-60 min)</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-purple-400">4.</span>
              <span><strong>Setup</strong> — We deploy smart contract & launch campaign (1-2 weeks)</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Requirements?</h2>
          <p className="text-gray-300 mb-8">
            Apply today and start raising funds on blockchain in 2 weeks.
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
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-lg transition-colors"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
