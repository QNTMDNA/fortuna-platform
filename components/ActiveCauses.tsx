'use client';

export function ActiveCauses() {
  const causes = [
    {
      id: 1,
      name: 'Make-A-Wish Foundation',
      description: 'Grant wishes for children with critical illnesses',
      prize: '$5,000 Cash',
      prizeType: '50/50 Draw',
      totalRaised: '$0',
      entries: 0,
      drawDate: 'May 3, 2026',
      image: '🌟',
      charity: '50% to Make-A-Wish',
    },
    {
      id: 2,
      name: 'Clean Water Access',
      description: 'Provide clean water to communities in need',
      prize: '$10,000 Cash',
      prizeType: 'Fixed Prize',
      totalRaised: '$0',
      entries: 0,
      drawDate: 'May 10, 2026',
      image: '💧',
      charity: '90% to charity: water',
    },
    {
      id: 3,
      name: 'Emergency Relief Fund',
      description: 'Rapid response for disaster relief worldwide',
      prize: 'Tesla Model 3',
      prizeType: 'Donated Prize',
      totalRaised: '$0',
      entries: 0,
      drawDate: 'May 15, 2026',
      image: '🚨',
      charity: '90% to Direct Relief',
    },
  ];

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
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-white/10"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="mb-4 text-6xl">{cause.image}</div>

                {/* Cause Name */}
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {cause.name}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-gray-300">
                  {cause.description}
                </p>

                {/* Prize Info */}
                <div className="mb-4 rounded-lg bg-purple-500/20 p-3">
                  <div className="text-xs font-medium text-purple-300">
                    {cause.prizeType}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {cause.prize}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    {cause.charity}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {cause.totalRaised}
                    </div>
                    <div className="text-xs text-gray-400">Raised</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {cause.entries}
                    </div>
                    <div className="text-xs text-gray-400">Entries</div>
                  </div>
                </div>

                {/* Draw Date */}
                <div className="mb-4 text-center text-sm text-gray-400">
                  Draw: {cause.drawDate}
                </div>

                {/* CTA Button */}
                <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  Enter Now
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
