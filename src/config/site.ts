export const SITE = {
  name: 'Portland Personal Training',
  title: 'Portland Personal Training | Welcoming, Award-Winning Coaches at Lloyd Athletic Club',
  description: 'Friendly, zero-pressure personal training at Lloyd Athletic Club (voted Best Gym in Portland 8 years in a row). First session 100% free with non-commission coaches.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://portlandpersonaltraining.com',
  address: {
    facility: 'Lloyd Athletic Club',
    street: '815 NE Halsey St',
    city: 'Portland',
    state: 'OR',
    zip: '97232',
  },
  phone: '(503) 555-0199',
  email: 'hello@portlandpersonaltraining.com',
  twitterHandle: '@pdx_training',
  socials: {
    instagram: 'https://instagram.com/portlandpersonaltraining',
    facebook: 'https://facebook.com/portlandpersonaltraining',
  },
} as const;

export type SiteConfig = typeof SITE;
