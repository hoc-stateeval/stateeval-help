import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'eVAL Help Center',
  tagline: 'Documentation and guides for the eVAL evaluation system',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // Update this when you have a production URL
  url: 'https://help.stateeval.com',
  baseUrl: '/',

  organizationName: 'hoc-stateeval',
  projectName: 'stateeval-help',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
        indexBlog: false,
        searchBarShortcutHint: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at root instead of /docs
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Hide the right-side TOC
    tableOfContents: {
      minHeadingLevel: 6,
      maxHeadingLevel: 6,
    },
    docs: {
      sidebar: {
        hideable: false,
      },
    },
    // Mermaid theme configuration
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    navbar: {
      title: 'eVAL Help',
      logo: {
        alt: 'eVAL Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
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
              to: '/getting-started',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'By Role',
          items: [
            {
              label: 'District Admins',
              to: '/role-guides/district-admin',
            },
            {
              label: 'School Admins',
              to: '/role-guides/school-admin',
            },
            {
              label: 'Evaluators',
              to: '/role-guides/evaluator',
            },
            {
              label: 'Teachers',
              to: '/role-guides/teacher',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'mailto:support@stateeval.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} State Evaluation System.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
