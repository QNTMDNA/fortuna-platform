'use client';

import { useState } from 'react';

export function CreateCauseForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    charityName: '',
    charityWallet: '',
    charityEIN: '',
    entryPrice: '',
    prizeType: 'FIFTY_FIFTY',
    prizeAmount: '',
    prizeDescription: '',
    drawDate: '',
    goalAmount: '',
    imageUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to Supabase + deploy to smart contract
    console.log('Create cause:', formData);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Create New Cause</h2>
        <p className="mt-2 text-gray-400">
          Add a new charitable giveaway. This will create a cause in the database and deploy it to the smart contract.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cause Details */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold text-white">Cause Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Cause Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="Make-A-Wish Foundation"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="Grant wishes for children with critical illnesses"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Image URL (optional)</label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>

        {/* Charity Details */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold text-white">Charity Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Charity Name</label>
              <input
                type="text"
                value={formData.charityName}
                onChange={(e) => setFormData({ ...formData, charityName: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="Make-A-Wish Foundation of Southern Florida"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Charity Wallet Address</label>
              <input
                type="text"
                value={formData.charityWallet}
                onChange={(e) => setFormData({ ...formData, charityWallet: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-mono text-sm text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="0x..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">EIN (Tax ID) - optional</label>
              <input
                type="text"
                value={formData.charityEIN}
                onChange={(e) => setFormData({ ...formData, charityEIN: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="12-3456789"
              />
            </div>
          </div>
        </div>

        {/* Prize Configuration */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold text-white">Prize Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Prize Type</label>
              <select
                value={formData.prizeType}
                onChange={(e) => setFormData({ ...formData, prizeType: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none"
              >
                <option value="FIFTY_FIFTY">50/50 Draw (Winner gets 50%, Charity gets 50%)</option>
                <option value="FIXED_PRIZE">Fixed Prize (Winner gets fixed amount, rest to charity)</option>
                <option value="DONATED_PRIZE">Donated Prize (All funds to charity, prize donated externally)</option>
              </select>
            </div>

            {formData.prizeType === 'FIXED_PRIZE' && (
              <div>
                <label className="block text-sm font-medium text-gray-300">Prize Amount (USD)</label>
                <input
                  type="number"
                  value={formData.prizeAmount}
                  onChange={(e) => setFormData({ ...formData, prizeAmount: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                  placeholder="5000"
                  required={formData.prizeType === 'FIXED_PRIZE'}
                />
              </div>
            )}

            {formData.prizeType === 'DONATED_PRIZE' && (
              <div>
                <label className="block text-sm font-medium text-gray-300">Prize Description</label>
                <input
                  type="text"
                  value={formData.prizeDescription}
                  onChange={(e) => setFormData({ ...formData, prizeDescription: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                  placeholder="Tesla Model 3"
                  required={formData.prizeType === 'DONATED_PRIZE'}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300">Entry Price (USD)</label>
              <input
                type="number"
                value={formData.entryPrice}
                onChange={(e) => setFormData({ ...formData, entryPrice: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="5"
                required
              />
              <p className="mt-1 text-xs text-gray-400">Minimum donation per entry</p>
            </div>
          </div>
        </div>

        {/* Draw Settings */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold text-white">Draw Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Draw Date & Time</label>
              <input
                type="datetime-local"
                value={formData.drawDate}
                onChange={(e) => setFormData({ ...formData, drawDate: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Goal Amount (optional)</label>
              <input
                type="number"
                value={formData.goalAmount}
                onChange={(e) => setFormData({ ...formData, goalAmount: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                placeholder="10000"
              />
              <p className="mt-1 text-xs text-gray-400">Target fundraising amount (for display only)</p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Create Cause
          </button>
          <button
            type="button"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
