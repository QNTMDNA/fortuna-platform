export interface Cause {
  id: string;
  title: string;
  organization: string;
  organizationUrl: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  prizeType: '50/50' | 'fixed' | 'donated';
  prizeAmount?: number;
  entryPrice: number;
  totalRaised: number;
  goal: number;
  entries: number;
  daysLeft: number;
  endDate: string;
  featured: boolean;
  verified: boolean;
  impactStatement: string;
  walletAddress: string;
}

export const activeCauses: Cause[] = [
  {
    id: 'make-a-wish-sfla',
    title: 'Grant Life-Changing Wishes for Children',
    organization: 'Make-A-Wish South Florida',
    organizationUrl: 'https://wish.org/sfla',
    description: 'Help grant wishes for children with critical illnesses. Every $10,000 funds one wish that brings hope, strength, and joy.',
    longDescription: `Make-A-Wish South Florida creates life-changing wishes for children with critical illnesses. A wish experience can be a game-changer for a child with a critical illness, giving them the hope and strength they need to fight harder.

Research shows that wishes can have positive impacts on children's health and well-being. Studies reveal that a wish can help children feel stronger, more energized, and more willing and able to battle their illness.

Your donation helps fund wishes like meeting a favorite celebrity, going to Disney World, becoming a superhero for a day, or getting a bedroom makeover. Each wish is uniquely tailored to the child's deepest desire.`,
    image: '/causes/make-a-wish.jpg',
    category: 'health',
    prizeType: '50/50',
    entryPrice: 25,
    totalRaised: 3450,
    goal: 10000,
    entries: 138,
    daysLeft: 18,
    endDate: '2026-04-27',
    featured: true,
    verified: true,
    impactStatement: '$10,000 = 1 wish granted. $25 entry = 0.25% of a wish.',
    walletAddress: '0x0000000000000000000000000000000000000001', // TODO: Replace with real wallet
  },
  {
    id: 'bye-bye-plastic',
    title: 'End Ocean Plastic Pollution',
    organization: 'Bye Bye Plastic',
    organizationUrl: 'https://www.byebyeplastic.life/',
    description: 'Remove 50,000 lbs of plastic from oceans and coastlines. Support cleanup efforts and education programs.',
    longDescription: `Bye Bye Plastic is on a mission to eliminate plastic pollution from our oceans and coastlines. Every year, 8 million metric tons of plastic enter our oceans, harming marine life and ecosystems.

Our approach is multi-faceted:
• Direct cleanup operations removing plastic from beaches and oceans
• Education programs teaching communities about plastic reduction
• Advocacy for policy changes at local and national levels
• Innovation in biodegradable alternatives

Your donation directly funds cleanup crews, equipment, and educational materials. Every $5,000 removes approximately 1,000 lbs of plastic from our oceans.

Join us in creating a plastic-free future for our planet.`,
    image: '/causes/ocean-cleanup.jpg',
    category: 'environment',
    prizeType: 'fixed',
    prizeAmount: 5000,
    entryPrice: 10,
    totalRaised: 1820,
    goal: 25000,
    entries: 182,
    daysLeft: 21,
    endDate: '2026-04-30',
    featured: true,
    verified: true,
    impactStatement: '$25,000 = 50,000 lbs of plastic removed. $10 entry = 20 lbs removed.',
    walletAddress: '0x0000000000000000000000000000000000000002', // TODO: Replace with real wallet
  },
  {
    id: 'style-saves',
    title: 'Fashion Education for Underserved Youth',
    organization: 'Style Saves',
    organizationUrl: 'https://www.stylesaves.org/',
    description: 'Provide fashion education and career opportunities for underserved youth. Train the next generation of designers.',
    longDescription: `Style Saves empowers underserved youth through fashion education and career development. We believe that access to creative industries shouldn't be limited by zip code or economic status.

Our programs include:
• Fashion design workshops and mentorship
• Industry internships with top designers and brands
• Scholarships for fashion school
• Portfolio development and college prep
• Career placement support

Since 2015, we've helped 500+ students launch careers in fashion, design, and creative fields. Many of our alumni have gone on to work at major fashion houses, start their own brands, or attend top design schools.

Your donation funds scholarships, materials, studio space, and mentorship programs. Every $5,000 supports one student for a full year of programming.`,
    image: '/causes/fashion-education.jpg',
    category: 'education',
    prizeType: '50/50',
    entryPrice: 15,
    totalRaised: 2640,
    goal: 15000,
    entries: 176,
    daysLeft: 14,
    endDate: '2026-04-23',
    featured: true,
    verified: true,
    impactStatement: '$15,000 = 3 students funded for full year. $15 entry = 0.1% of a scholarship.',
    walletAddress: '0x0000000000000000000000000000000000000003', // TODO: Replace with real wallet
  },
];

export const categories = [
  { id: 'all', label: 'All Causes', icon: '🌍' },
  { id: 'health', label: 'Health & Medical', icon: '🏥' },
  { id: 'education', label: 'Education', icon: '📚' },
  { id: 'environment', label: 'Environment', icon: '🌱' },
  { id: 'animals', label: 'Animal Welfare', icon: '🐾' },
  { id: 'humanitarian', label: 'Humanitarian', icon: '🤝' },
];
