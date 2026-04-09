-- Supabase Database Schema for Fortuna

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Causes table
CREATE TABLE causes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  charity_name TEXT NOT NULL,
  charity_wallet TEXT NOT NULL,
  charity_ein TEXT,
  entry_price NUMERIC NOT NULL,
  prize_type TEXT NOT NULL CHECK (prize_type IN ('FIFTY_FIFTY', 'FIXED_PRIZE', 'DONATED_PRIZE')),
  prize_amount NUMERIC,
  prize_description TEXT,
  draw_date TIMESTAMPTZ NOT NULL,
  goal_amount NUMERIC,
  image_url TEXT,
  contract_cause_id INTEGER UNIQUE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Donations table
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cause_id UUID REFERENCES causes(id) ON DELETE CASCADE,
  donor_address TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  entries INTEGER NOT NULL,
  transaction_hash TEXT UNIQUE NOT NULL,
  block_number INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Draws table
CREATE TABLE draws (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cause_id UUID REFERENCES causes(id) ON DELETE CASCADE,
  winner_address TEXT NOT NULL,
  prize_amount NUMERIC NOT NULL,
  charity_amount NUMERIC NOT NULL,
  platform_fee NUMERIC NOT NULL,
  vrf_request_id TEXT,
  transaction_hash TEXT UNIQUE NOT NULL,
  block_number INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics table (aggregated stats)
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  total_donated NUMERIC DEFAULT 0,
  total_entries INTEGER DEFAULT 0,
  total_causes INTEGER DEFAULT 0,
  total_draws INTEGER DEFAULT 0,
  total_winners INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Initialize analytics row
INSERT INTO analytics (id) VALUES (uuid_generate_v4());

-- Indexes for performance
CREATE INDEX idx_donations_cause_id ON donations(cause_id);
CREATE INDEX idx_donations_donor_address ON donations(donor_address);
CREATE INDEX idx_donations_created_at ON donations(created_at DESC);
CREATE INDEX idx_draws_cause_id ON draws(cause_id);
CREATE INDEX idx_causes_active ON causes(active);
CREATE INDEX idx_causes_draw_date ON causes(draw_date);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for causes table
CREATE TRIGGER update_causes_updated_at BEFORE UPDATE ON causes
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update analytics (called by triggers)
CREATE OR REPLACE FUNCTION update_analytics()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE analytics SET
    total_donated = (SELECT COALESCE(SUM(amount), 0) FROM donations),
    total_entries = (SELECT COALESCE(SUM(entries), 0) FROM donations),
    total_causes = (SELECT COUNT(*) FROM causes),
    total_draws = (SELECT COUNT(*) FROM draws),
    total_winners = (SELECT COUNT(DISTINCT winner_address) FROM draws),
    updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to update analytics
CREATE TRIGGER update_analytics_on_donation AFTER INSERT OR UPDATE OR DELETE ON donations
FOR EACH STATEMENT EXECUTE FUNCTION update_analytics();

CREATE TRIGGER update_analytics_on_cause AFTER INSERT OR UPDATE OR DELETE ON causes
FOR EACH STATEMENT EXECUTE FUNCTION update_analytics();

CREATE TRIGGER update_analytics_on_draw AFTER INSERT OR UPDATE OR DELETE ON draws
FOR EACH STATEMENT EXECUTE FUNCTION update_analytics();

-- Row Level Security (RLS) policies
ALTER TABLE causes ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE draws ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view)
CREATE POLICY "Public can view causes" ON causes FOR SELECT USING (true);
CREATE POLICY "Public can view donations" ON donations FOR SELECT USING (true);
CREATE POLICY "Public can view draws" ON draws FOR SELECT USING (true);
CREATE POLICY "Public can view analytics" ON analytics FOR SELECT USING (true);

-- Admin write access (configured via Supabase dashboard)
-- For now, allow authenticated users to insert/update
-- TODO: Restrict to admin role once auth is set up
CREATE POLICY "Authenticated can insert causes" ON causes FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated can update causes" ON causes FOR UPDATE USING (true);
CREATE POLICY "Authenticated can insert donations" ON donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated can insert draws" ON draws FOR INSERT WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE causes IS 'Charitable causes/giveaways';
COMMENT ON TABLE donations IS 'User donations with on-chain transaction data';
COMMENT ON TABLE draws IS 'Completed draws with winner and distribution info';
COMMENT ON TABLE analytics IS 'Aggregated platform statistics';

COMMENT ON COLUMN causes.contract_cause_id IS 'ID from smart contract (for syncing)';
COMMENT ON COLUMN causes.prize_type IS 'FIFTY_FIFTY, FIXED_PRIZE, or DONATED_PRIZE';
COMMENT ON COLUMN donations.entries IS 'Number of entries earned from this donation';
COMMENT ON COLUMN draws.vrf_request_id IS 'Chainlink VRF request ID for verification';
