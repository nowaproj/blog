// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// ===== SINGLE SOURCE OF TRUTH FOR BLOG SEO =====
const BLOG_TITLE = 'Nowa Official Blog';
const BLOG_DESCRIPTION = 'We write content that helps you build great Flutter apps and achieve success with Nowa';
const SITE_URL = 'https://blog.nowa.dev';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: BLOG_TITLE,
  tagline: BLOG_DESCRIPTION,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // Custom fields to expose environment variables
  customFields: {
    posthogKey: process.env.VITE_PUBLIC_POSTHOG_KEY,
    posthogHost: process.env.VITE_PUBLIC_POSTHOG_HOST,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nowaproj', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Essential SEO meta tags only
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'Flutter app builder, AI app development, Visual Flutter builder, Low-code Flutter, AI visual builder, vibecoding tool, mobile app development',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:site',
        content: '@nowa_dev',
      },
    },
  ],

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',          // blog available at /
          // optional extras
          showReadingTime: true,
          blogTitle: BLOG_TITLE,
          blogDescription: BLOG_DESCRIPTION,
          feedOptions: {
            type: 'all',
            title: BLOG_TITLE,
            description: BLOG_DESCRIPTION,
            copyright: `Copyright © ${new Date().getFullYear()} Nowa.`,
            language: 'en',
          },
          // SEO improvements for blog
          onInlineAuthors: 'ignore', // This will suppress the author warnings you saw
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-CMNS133C82',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',

      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'C8KMOL6UCU',

        // Public API key: it is safe to commit it
        apiKey: '40e215297ab6bcabae30fa4599cab238',

        indexName: 'nowa',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

      // announcementBar: {
      //   id: 'announcement-1', // Any value that will identify this message.
      //   content: 'Welcome to the Nowa Blog! Stay updated with the latest news, tutorials, and insights. For help and more resources, visit our <a target="_blank" rel="noopener noreferrer" href="https://community.nowa.dev">community forum</a> or <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@nowadev">YouTube channel</a>.',
      //   backgroundColor: '#A3784A', // Defaults to `#fff`
      //   textColor: '#ffffff', // Defaults to `#000`.
      //   isCloseable: true, // Defaults to `true`.
      // },
  
      navbar: {
        title: BLOG_TITLE,
        logo: {
          alt: 'Nowa',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Get Started',
            position: 'right',
            to: 'https://app.nowa.dev/signup'
          },
          {
            label: 'Sign In',
            position: 'right',
            to: 'https://app.nowa.dev/'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Main website',
                href: 'https://nowa.dev',
              },
              {
                label: 'Get started with Nowa',
                href: 'https://app.nowa.dev/signup',
              },
              {
                label: 'Sign In',
                href: 'https://app.nowa.dev',
              },
            ],
          },
          {
            title: 'Resources & Communities',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCvP7LKeb2sW1yTUqHAFEKOw',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ByKfn3H7gX',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/nowa/',
              }

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/nowa.dev/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nowaengine/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nowa_dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nowa. All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
