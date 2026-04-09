export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Wallet',
      description: 'Connect your crypto wallet (MetaMask, Coinbase Wallet, etc.) in seconds.',
      icon: '🔗',
    },
    {
      number: '02',
      title: 'Choose a Cause',
      description: 'Browse verified charitable causes and pick one that matters to you.',
      icon: '❤️',
    },
    {
      number: '03',
      title: 'Donate to Enter',
      description: 'Your donation = entries. More you give, more chances to win. 100% transparent on-chain.',
      icon: '💰',
    },
    {
      number: '04',
      title: 'Fair Draw',
      description: 'Winner selected via Chainlink VRF (provably fair). No trust required.',
      icon: '🎲',
    },
  ];

  return (
    <div className="relative z-10 px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Four simple steps to play for purpose
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-purple-500 to-transparent lg:block"></div>
              )}

              {/* Step Card */}
              <div className="relative text-center">
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-4xl">
                  {step.icon}
                </div>

                {/* Number */}
                <div className="mb-2 text-sm font-bold text-purple-300">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 text-4xl">🔒</div>
              <h4 className="mb-2 text-lg font-bold text-white">
                Smart Contract Security
              </h4>
              <p className="text-sm text-gray-400">
                All funds secured by audited smart contracts. No human can touch donations.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-4xl">👁️</div>
              <h4 className="mb-2 text-lg font-bold text-white">
                Full Transparency
              </h4>
              <p className="text-sm text-gray-400">
                Every transaction on-chain. Verify any donation or draw result yourself.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-4xl">🎯</div>
              <h4 className="mb-2 text-lg font-bold text-white">
                Provably Fair
              </h4>
              <p className="text-sm text-gray-400">
                Chainlink VRF ensures random, tamper-proof winner selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
