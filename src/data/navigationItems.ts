
export interface SubItem {
  name: string;
  description: string;
}

export interface NavItem {
  name: string;
  path: string;
  description: string;
  subItems: SubItem[];
}

export const navItems: NavItem[] = [
  { 
    name: 'Home', 
    path: '/',
    description: 'Return to our homepage',
    subItems: [
      { name: 'Latest Events', description: 'Check out our most recent tournaments' },
      { name: 'Featured Games', description: 'Popular titles we specialize in' },
      { name: 'News & Updates', description: 'Stay current with Omega Slayers' }
    ]
  },
  { 
    name: 'About', 
    path: '/about',
    description: 'Learn about our company',
    subItems: [
      { name: 'Our Story', description: 'The journey of Omega Slayers' },
      { name: 'Our Vision', description: 'What drives us forward' },
      { name: 'Core Values', description: 'The principles we live by' }
    ]
  },
  { 
    name: 'Services', 
    path: '/services',
    description: 'Explore our offerings',
    subItems: [
      { name: 'Tournament Management', description: 'Full-service event organization' },
      { name: 'Team Development', description: 'Professional coaching & training' },
      { name: 'Content Creation', description: 'High-quality esports content' }
    ]
  },
  { 
    name: 'Portfolio', 
    path: '/portfolio',
    description: 'See our past work',
    subItems: [
      { name: 'Major Tournaments', description: 'Flagship competitive events' },
      { name: 'Partner Events', description: 'Collaborations with leading brands' },
      { name: 'Success Stories', description: "Teams we've helped succeed" }
    ]
  },
  { 
    name: 'Team', 
    path: '/team',
    description: 'Meet our experts',
    subItems: [
      { name: 'Leadership', description: 'Our executive team' },
      { name: 'Event Managers', description: 'Tournament specialists' },
      { name: 'Coaches & Analysts', description: 'Gaming professionals' }
    ]
  },
  { 
    name: 'Partners', 
    path: '/partners',
    description: 'Our collaborators',
    subItems: [
      { name: 'Gaming Publishers', description: 'Official game partners' },
      { name: 'Sponsors', description: 'Brands that support us' },
      { name: 'Technology Partners', description: 'Powering our operations' }
    ]
  },
  { 
    name: 'Contact', 
    path: '/contact',
    description: 'Get in touch with us',
    subItems: [
      { name: 'General Inquiries', description: 'Questions about our services' },
      { name: 'Event Booking', description: 'Host a tournament with us' },
      { name: 'Career Opportunities', description: 'Join our growing team' }
    ]
  }
];
