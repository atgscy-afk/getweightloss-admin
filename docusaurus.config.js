// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GetWeightLoss Admin Portal',
  tagline: 'User Manual & Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://atgscy-afk.github.io',
  baseUrl: '/getweightloss-admin/',

  organizationName: 'atgscy-afk',
  projectName: 'getweightloss-admin',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://dev.azure.com/terrence0205/getweightloss/_git/getweightloss%20-%20admin?path=/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GetWeightLoss Admin',
        logo: {
          alt: 'GetWeightLoss Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://dev.azure.com/terrence0205/getweightloss/_git/getweightloss%20-%20admin',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/01-getting-started',
              },
              {
                label: 'FAQs',
                to: '/docs/09-faqs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GetWeightLoss. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
