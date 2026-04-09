export function Stats() {
  const stats = [
    { label: 'Total Donated', value: '$0', subtext: 'Coming May 1' },
    { label: 'Lives Impacted', value: '0', subtext: 'Join the first draw' },
    { label: 'Active Causes', value: '3', subtext: 'More coming soon' },
    { label: 'Transparency', value: '100%', subtext: 'Every donation on-chain' },
  ];

  return (
    <div className="relative z-10 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-purple-300">{stat.label}</div>
              <div className="mt-1 text-xs text-gray-400">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
