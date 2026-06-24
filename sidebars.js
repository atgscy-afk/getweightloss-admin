/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'README',
    {
      label: 'Getting Started',
      items: [
        '01-getting-started',
      ],
    },
    {
      label: 'Core Features',
      items: [
        '02-sales-leads',
        '03-orders',
        '04-members',
        '05-appointments',
        '06-chats',
        '07-documents',
      ],
    },
    {
      label: 'Reference',
      items: [
        '08-common-tasks',
        '09-faqs',
      ],
    },
  ],
};

export default sidebars;
