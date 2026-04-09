'use client';

interface Cause {
  id: string;
  name: string;
  charity: string;
  totalDonated: string;
  entries: number;
  drawDate: string;
  active: boolean;
}

export function CausesList() {
  // TODO: Fetch from Supabase causes table
  const causes: Cause[] = [
    // Sample data structure
    // {
    //   id: '1',
    //   name: 'Make-A-Wish Foundation',
    //   charity: 'Make-A-Wish Southern Florida',
    //   totalDonated: '$2,500',
    //   entries: 500,
    //   drawDate: '2026-05-03',
    //   active: true,
    // }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">All Causes</h2>
          <p className="mt-1 text-sm text-gray-400">Manage active and past charitable giveaways</p>
        </div>
        <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105">
          Create New Cause
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          All
        </button>
        <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-400 backdrop-blur-sm hover:bg-white/10 hover:text-white">
          Active
        </button>
        <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-400 backdrop-blur-sm hover:bg-white/10 hover:text-white">
          Completed
        </button>
        <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-400 backdrop-blur-sm hover:bg-white/10 hover:text-white">
          Inactive
        </button>
      </div>

      {/* Causes Table */}
      {causes.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
          <div className="text-6xl">🎯</div>
          <h3 className="mt-6 text-xl font-bold text-white">No causes yet</h3>
          <p className="mt-2 text-gray-400">Create your first cause to start accepting donations.</p>
          <button className="mt-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105">
            Create First Cause
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Cause</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Charity</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Donated</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Entries</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Draw Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {causes.map((cause) => (
                <tr key={cause.id} className="border-b border-white/10 transition-colors hover:bg-white/5">
                  <td className="px-6 py-4 font-medium text-white">{cause.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{cause.charity}</td>
                  <td className="px-6 py-4 text-sm text-white">{cause.totalDonated}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{cause.entries}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{cause.drawDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      cause.active
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {cause.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-purple-400 hover:text-purple-300">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
