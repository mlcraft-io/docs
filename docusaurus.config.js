// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "mlcraft-io";
const projectName = "docs";
const baseUrl = `/${projectName}/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Synmetrix Docs",
  tagline: "Explore our comprehensive documentation to get started",
  favicon: "img/favicon.ico",

  url: `https://${organizationName}.github.io`,
  baseUrl,
  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Synmetrix",
        logo: {
          alt: "Synmetrix Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/overview",
              },
              {
                label: "Quickstart",
                to: "/docs/quickstart",
              },
              {
                label: "Development",
                to: "/docs/development",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/mlcraft-io/mlcraft",
              },
              {
                label: "Slack",
                href: "https://join.slack.com/t/mlcraft/shared_invite/zt-1x2gxwn37-J3tTvCR5xSFVfxwUU_YKtg",
              },
              {
                label: "Docker",
                href: "https://hub.docker.com/u/mlcraft",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "Schedule Meeting",
                href: "https://cal.com/synmetrix/30min",
              },
            ],
          },
        ],
        copyright:
          "© " + new Date().getFullYear() + " Synmetrix. All rights reserved.",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-search-local",
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/docs", // Match the value from your local-search.js
        searchResultLimits: 6, // Adjust the number of search results to display.
      },
    ],
  ],
};

module.exports = config;
