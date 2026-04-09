import { redirect } from 'next/navigation'
import { AdminDashboard } from '@/components/admin/AdminDashboard'

export default function AdminPage() {
  // TODO: Add authentication check
  // For now, this page is accessible to anyone (secure before launch)
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AdminDashboard />
    </main>
  )
}
