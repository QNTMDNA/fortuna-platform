'use client';

import { useState } from 'react';

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend/Supabase
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-gray-300 mb-8">
            Thank you for your interest in partnering with Fortuna. We'll review your application and get back to you within 48 hours.
          </p>
          <a
            href="/charities"
            className="text-purple-400 hover:text-purple-300 font-semibold"
          >
            ← Back to For Charities
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a
            href="/charities"
            className="text-purple-400 hover:text-purple-300 font-semibold mb-6 inline-block"
          >
            ← Back
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Partner Charity
          </h1>
          <p className="text-xl text-gray-300">
            Join the first transparent, gamified fundraising platform on blockchain.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Organization Info */}
          <div className="p-8 bg-white/5 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Organization Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Make-A-Wish Foundation"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  EIN (Tax ID) *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="XX-XXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Website *
                </label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="https://makeawish.org"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mission Statement *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                  placeholder="Describe your organization's mission..."
                />
              </div>
            </div>
          </div>

          {/* Contact Person */}
          <div className="p-8 bg-white/5 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Primary Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  Title/Role *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="e.g., Development Director"
                />
              </div>
            </div>
          </div>

          {/* Campaign Details */}
          <div className="p-8 bg-white/5 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Campaign Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Desired Campaign Goal
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="e.g., $10,000 to fund 5 wishes"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Preferred Prize Type
                </label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>50/50 Draw (winner gets 50%, charity gets 50%)</option>
                  <option>Fixed Prize (e.g., $5,000 to winner, rest to charity)</option>
                  <option>Donated Prize (partner provides prize, all funds to charity)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                  placeholder="Tell us more about your campaign idea, timeline, or any questions..."
                />
              </div>
            </div>
          </div>

          {/* Crypto Experience */}
          <div className="p-8 bg-white/5 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Crypto Experience</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Does your organization have a crypto wallet?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="hasWallet" value="yes" />
                    <span>Yes, we have a crypto wallet</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="hasWallet" value="no" />
                    <span>No, we'll need help setting one up</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Have you accepted crypto donations before?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="cryptoExperience" value="yes" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="cryptoExperience" value="no" />
                    <span>No, this would be our first time</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
            <a
              href="/charities"
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-colors"
            >
              Cancel
            </a>
          </div>

          <p className="text-sm text-gray-400 text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy.
            We'll review your application within 48 hours.
          </p>
        </form>
      </div>
    </div>
  );
}
