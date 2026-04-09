'use client';

export function StatsOverview() {
  // TODO: Connect to Supabase analytics table
  const stats = [
    { label: 'Total Donated', value: '$0', change: '+0%', trend: 'up' },
    { label: 'Active Causes', value: '0', change: '+0', trend: 'neutral' },
    { label: 'Total Entries', value: '0', change: '+0', trend: 'neutral' },
    { label: 'Completed Draws', value: '0', change: '+0', trend: 'neutral' },
  ];

  const recentActivity = [
    // TODO: Fetch from donations table
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-400">{stat.label}</div>
              <div
                className={`text-xs font-medium ${
                  stat.trend === 'up'
                    ? 'text-green-400'
                    : stat.trend === 'down'
                    ? 'text-red-400'
                    : 'text-gray-400'
                }`}
              >
                {stat.change}
              </div>
            </div>
            <div className="mt-2 text-3xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h2 className="mb-4 text-xl font-bold text-white">Recent Activity</h2>
        {recentActivity.length === 0 ? (
          <div className="py-12 text-center">
            <div className="text-4xl">📊</div>
            <p className="mt-4 text-gray-400">No activity yet</p>
            <p className="mt-2 text-sm text-gray-500">
              Create a cause and start accepting donations to see activity here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Activity items will go here */}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <button className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="mb-2 text-2xl">➕</div>
          <div className="font-semibold text-white">Create New Cause</div>
          <div className="mt-1 text-sm text-gray-400">Add a new charitable giveaway</div>
        </button>

        <button className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="mb-2 text-2xl">🎲</div>
          <div className="font-semibold text-white">Trigger Draw</div>
          <div className="mt-1 text-sm text-gray-400">Select winner for completed causes</div>
        </button>

        <button className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="mb-2 text-2xl">📊</div>
          <div className="font-semibold text-white">Export Data</div>
          <div className="mt-1 text-sm text-gray-400">Download donations & draw reports</div>
        </button>
      </div>
    </div>
  );
}
