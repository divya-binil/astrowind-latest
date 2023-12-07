import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
      href: '#',
    },
    {
      text: 'Abot Us',
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   },
      //   {
      //     text: 'About us',
      //     href: getPermalink('/about'),
      //   },
      //   {
      //     text: 'Contact',
      //     href: getPermalink('/contact'),
      //   },
      //   {
      //     text: 'Terms',
      //     href: getPermalink('/terms'),
      //   },
      //   {
      //     text: 'Privacy policy',
      //     href: getPermalink('/privacy'),
      //   },
      // ],
      href: '#',
    },
    {
      text: 'Patient Assets',
      // links: [
      //   {
      //     text: 'Lead Generation',
      //     href: getPermalink('/landing/lead-generation'),
      //   },
      //   {
      //     text: 'Long-form Sales',
      //     href: getPermalink('/landing/sales'),
      //   },
      //   {
      //     text: 'Click-Through',
      //     href: getPermalink('/landing/click-through'),
      //   },
      //   {
      //     text: 'Product Details (or Services)',
      //     href: getPermalink('/landing/product'),
      //   },
      //   {
      //     text: 'Coming Soon or Pre-Launch',
      //     href: getPermalink('/landing/pre-launch'),
      //   },
      //   {
      //     text: 'Subscription',
      //     href: getPermalink('/landing/subscription'),
      //   },
      // ],
      href: '#',
    },
    {
      text: 'FAQs',
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
      href: '#',
    },
    {
      text: 'Download Center',
      href: '#',
    },
    {
      text: 'Resources',
      href: '/patent',
    },
  ],
  actions: [{ text: 'Contact/Chatbot', href: '/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Download Center', href: '#' },
        { text: 'About us', href: '#' },
        { text: 'Faq’s', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Use', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: '',
      // links: [
      //   { text: 'Developer API', href: '#' },
      //   { text: 'Partners', href: '#' },
      //   { text: 'Atom', href: '#' },
      //   { text: 'Electron', href: '#' },
      //   { text: 'AstroWind Desktop', href: '#' },
      // ],
    },
    {
      title: '',
      // links: [
      //   { text: 'Docs', href: '#' },
      //   { text: 'Community Forum', href: '#' },
      //   { text: 'Professional Services', href: '#' },
      //   { text: 'Skills', href: '#' },
      //   { text: 'Status', href: '#' },
      // ],
    },
    {
      title: 'Contact/Chatbot',
      links: [
        { text: 'consectetur adipiscing elit.', href: '#' },
        { text: 'hello@intellectualfrontiers.com', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
