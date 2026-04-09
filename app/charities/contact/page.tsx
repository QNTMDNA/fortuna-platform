'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend/Supabase
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">✉️</div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-slate-400 mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Link
            href="/charities"
            className="text-purple-400 hover:text-purple-300 font-semibold"
          >
            ← Back to For Charities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <Link
            href="/charities"
            className="text-purple-400 hover:text-purple-300 font-semibold mb-6 inline-block"
          >
            ← Back to For Charities
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-400">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="john@charity.org"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Make-A-Wish Foundation"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  <option value="">Select a subject...</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="technical">Technical Questions</option>
                  <option value="campaign">Campaign Support</option>
                  <option value="billing">Billing & Fees</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>

              <p className="text-sm text-slate-500 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:charities@givefortuna.io" className="text-purple-400 hover:text-purple-300">
                      charities@givefortuna.io
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <a href="https://t.me/fortunaofficial" className="text-purple-400 hover:text-purple-300">
                      t.me/fortunaofficial
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-2xl">🐦</div>
                  <div>
                    <div className="font-semibold">Twitter/X</div>
                    <a href="https://twitter.com/givefortuna1111" className="text-purple-400 hover:text-purple-300">
                      @givefortuna1111
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-2xl">💼</div>
                  <div>
                    <div className="font-semibold">Discord</div>
                    <a href="https://discord.gg/fortuna" className="text-purple-400 hover:text-purple-300">
                      discord.gg/fortuna
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Answers */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-purple-400 mb-1">
                    How long does verification take?
                  </div>
                  <p className="text-slate-400">
                    24-48 hours for most applications.
                  </p>
                </div>

                <div>
                  <div className="font-semibold text-purple-400 mb-1">
                    What's the platform fee?
                  </div>
                  <p className="text-slate-400">
                    10% of donations. No upfront costs.
                  </p>
                </div>

                <div>
                  <div className="font-semibold text-purple-400 mb-1">
                    Do I need crypto experience?
                  </div>
                  <p className="text-slate-400">
                    No! We handle all technical setup.
                  </p>
                </div>

                <div>
                  <div className="font-semibold text-purple-400 mb-1">
                    Can I convert crypto to USD?
                  </div>
                  <p className="text-slate-400">
                    Yes, we can help you set that up.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-bold mb-3">Support Hours</h3>
              <div className="text-sm space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9am - 6pm EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10am - 4pm EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Email & form submissions are answered within 24 hours, even on weekends.
              </p>
            </div>

            {/* Schedule Call */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-bold mb-3">Schedule a Call</h3>
              <p className="text-sm text-slate-400 mb-4">
                Prefer to talk? Book a 30-minute intro call with our partnerships team.
              </p>
              <a
                href="https://calendly.com/fortuna/partnership"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
