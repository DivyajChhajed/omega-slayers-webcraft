
export interface SubItem {
  name: string;
  description: string;
  path?: string;
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
    description: 'Back to our homepage',
    subItems: [
      {
        name: 'Services',
        description: 'Discover our esports services',
        path: '/services',
      },
      {
        name: 'About Us',
        description: 'Learn more about our company',
        path: '/about',
      },
      {
        name: 'Contact',
        description: 'Get in touch with our team',
        path: '/contact',
      },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    description: 'Our comprehensive esports management services',
    subItems: [
      {
        name: 'Tournament Management',
        description: 'Professional tournament planning and execution',
        path: '/services/tournament-management',
      },
      {
        name: 'Team Management',
        description: 'Esports team development and management',
        path: '/services/team-management',
      },
      {
        name: 'Event Organization',
        description: 'Full-scale gaming event planning and execution',
        path: '/services/event-organization',
      },
    ],
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    description: 'Explore our past events, tournaments, and collaborations',
    subItems: [
      {
        name: 'Tournaments',
        description: 'Our tournament portfolio and achievements',
        path: '/portfolio?category=tournaments',
      },
      {
        name: 'Events',
        description: 'Gaming events we have organized',
        path: '/portfolio?category=events',
      },
      {
        name: 'Collaborations',
        description: 'Our brand and influencer collaborations',
        path: '/portfolio?category=collaborations',
      },
    ],
  },
  {
    name: 'Team',
    path: '/team',
    description: 'Meet our passionate team of gaming professionals',
    subItems: [
      {
        name: 'Leadership',
        description: 'Our company leadership and management team',
        path: '/team?group=leadership',
      },
      {
        name: 'Tournament Staff',
        description: 'Our tournament operations specialists',
        path: '/team?group=tournament',
      },
      {
        name: 'Join Our Team',
        description: 'Career opportunities with Omega Slayers',
        path: '/careers',
      },
    ],
  },
  {
    name: 'Partners',
    path: '/partners',
    description: 'Our brand partnerships and collaborations',
    subItems: [
      {
        name: 'Gaming Brands',
        description: 'Our partnerships with gaming companies',
        path: '/partners?type=gaming',
      },
      {
        name: 'Sponsors',
        description: 'Our event and tournament sponsors',
        path: '/partners?type=sponsors',
      },
      {
        name: 'Become a Partner',
        description: 'Partnership opportunities with Omega Slayers',
        path: '/partners/join',
      },
    ],
  },
];
