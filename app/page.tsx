import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { ActiveCauses } from '@/components/ActiveCauses';
import { Stats } from '@/components/Stats';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Stats />
      <ActiveCauses />
      <HowItWorks />
      <Footer />
    </main>
  );
}
