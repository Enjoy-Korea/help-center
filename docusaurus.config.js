// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;

const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Help Center",
  tagline: "Elevating the experience of all foreigners in Korea",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://help.enkor.kr",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "enkorwithus", // Usually your GitHub org/user name.
  projectName: "help-center", // Usually your repo name.

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
          routeBasePath: "articles",
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
      navbar: {
        logo: {
          alt: "Enkorwithus Logo",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Housing",
          },
          {
            type: "docSidebar",
            sidebarId: "visaSidebar",
            position: "left",
            label: "Visa",
          },
          {
            type: "docSidebar",
            sidebarId: "beddingSidebar",
            position: "left",
            label: "Bedding",
          },
          {
            href: "https://stay.enkor.kr",
            label: "Site",
            position: "right",
          },
          // TODO: Add ChatGPT integration for RAG-based doc retrieval.
          // {
          //   type: "custom-documate",
          //   position: "right",
          //   // Fill in endpoint with your own ask.js URL
          //   endpoint: "efef",
          //   style: {
          //     marginRight: "1rem",
          //     marginLeft: "1rem",
          //   },
          // },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Articles",
            items: [
              {
                label: "FAQ",
                to: "/articles/housing/faq",
              },
            ],
          },
          {
            title: "Join our community",
            items: [
              {
                label: "Enkoplay Instagram",
                href: "https://www.instagram.com/enkoplay_community",
              },
              {
                label: "EnkorStay Instagram",
                href: "https://www.instagram.com/enkorstay/",
              },
            ],
          },
          {
            title: "Services",
            items: [
              {
                label: "Housing",
                href: "https://stay.enkor.kr",
              },
              {
                label: "Visa",
                href: "https://stay.enkor.kr/arc",
              },
              {
                label: "Bedding",
                href: "https://stay.enkor.kr/bedding",
              },
              {
                label: "Enkoplay",
                href: "https://letsfip.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Enkorwithus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
