'use client';

import { useState } from 'react';
import { CreateCauseForm } from './CreateCauseForm';
import { CausesList } from './CausesList';
import { StatsOverview } from './StatsOverview';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'causes' | 'create'>('overview');

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="mt-2 text-gray-400">Manage causes, monitor donations, and track analytics</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
              <span className="text-lg">👤</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8 flex gap-4 border-b border-white/10">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-4 text-sm font-medium transition-colors ${
            activeTab === 'overview'
              ? 'border-b-2 border-purple-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('causes')}
          className={`pb-4 text-sm font-medium transition-colors ${
            activeTab === 'causes'
              ? 'border-b-2 border-purple-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Causes
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className={`pb-4 text-sm font-medium transition-colors ${
            activeTab === 'create'
              ? 'border-b-2 border-purple-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Create Cause
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'overview' && <StatsOverview />}
        {activeTab === 'causes' && <CausesList />}
        {activeTab === 'create' && <CreateCauseForm />}
      </div>
    </div>
  );
}
