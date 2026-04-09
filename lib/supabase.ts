import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (will be generated after schema creation)
export type Cause = {
  id: string
  name: string
  description: string
  charity_name: string
  charity_wallet: string
  charity_ein: string
  entry_price: number
  prize_type: 'FIFTY_FIFTY' | 'FIXED_PRIZE' | 'DONATED_PRIZE'
  prize_amount: number | null
  prize_description: string | null
  draw_date: string
  goal_amount: number | null
  image_url: string | null
  active: boolean
  created_at: string
  updated_at: string
}

export type Donation = {
  id: string
  cause_id: string
  donor_address: string
  amount: number
  entries: number
  transaction_hash: string
  created_at: string
}

export type Draw = {
  id: string
  cause_id: string
  winner_address: string
  prize_amount: number
  charity_amount: number
  platform_fee: number
  vrf_request_id: string
  transaction_hash: string
  created_at: string
}
