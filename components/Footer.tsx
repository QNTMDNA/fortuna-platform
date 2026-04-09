import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 px-6 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <img src="/logo-compact.svg" alt="Fortuna" className="h-12" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              The world's first on-chain charitable giving platform.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/#how-it-works" className="hover:text-purple-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/causes" className="hover:text-purple-400 transition-colors">
                  Active Causes
                </Link>
              </li>
              <li>
                <Link href="/past-draws" className="hover:text-purple-400 transition-colors">
                  Past Draws
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-purple-400 transition-colors">
                  Verify Results
                </Link>
              </li>
            </ul>
          </div>

          {/* For Charities */}
          <div>
            <h4 className="mb-4 font-semibold text-white">For Charities</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/charities/partner" className="hover:text-purple-400 transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/charities/how-it-works" className="hover:text-purple-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/charities/requirements" className="hover:text-purple-400 transition-colors">
                  Requirements
                </Link>
              </li>
              <li>
                <Link href="/charities/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-purple-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row">
          <div>
            © 2026 Fortuna. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href="https://twitter.com/givefortuna1111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://discord.gg/fortuna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Discord
            </a>
            <a 
              href="https://t.me/fortunaofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Telegram
            </a>
            <a 
              href="https://github.com/QNTMDNA/fortuna-platform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
