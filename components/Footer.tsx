export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 px-6 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo-compact.svg" alt="Fortuna" className="h-12" />
            </div>
            <p className="text-sm text-gray-400">
              The world's first on-chain charitable giving platform.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400">How It Works</a></li>
              <li><a href="#" className="hover:text-purple-400">Active Causes</a></li>
              <li><a href="#" className="hover:text-purple-400">Past Draws</a></li>
              <li><a href="#" className="hover:text-purple-400">Verify Results</a></li>
            </ul>
          </div>

          {/* For Charities */}
          <div>
            <h4 className="mb-4 font-semibold text-white">For Charities</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Partner With Us</a></li>
              <li><a href="#" className="hover:text-purple-400">How It Works</a></li>
              <li><a href="#" className="hover:text-purple-400">Requirements</a></li>
              <li><a href="#" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Disclaimer</a></li>
              <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row">
          <div>
            © 2026 Fortuna. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400">Twitter</a>
            <a href="#" className="hover:text-purple-400">Discord</a>
            <a href="#" className="hover:text-purple-400">Telegram</a>
            <a href="#" className="hover:text-purple-400">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
