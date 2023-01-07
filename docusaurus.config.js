// @ts-check
const url = process.env.URL ?? "https://wiki.zshell.dev";
const baseUrl = process.env.BASE_URL ?? "/";
const styles = process.env.STYLES ?? "https://r2.zshell.dev/fa/6.2.1/js/all.min.js";
/* const math = require("remark-math"); */
/* const katex = require("rehype-katex"); */

/** @type {import('@docusaurus/types').Config} */
const config = {
  url,
  baseUrl,
  trailingSlash: false,
  title: "Z-Shell",
  titleDelimiter: "|",
  tagline: "A Swiss Army Knife for Zsh Unix shell",
  projectName: "wiki",
  organizationName: "z-shell",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  staticDirectories: ["static"],
  favicon: "/img/favicon.ico",
  i18n: {defaultLocale: "en", locales: ["en", "ja", "zh-Hans"]},
  scripts: [{src: styles, crossorigin: "anonymous"}],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== "en") {
              return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
            }
            return `https://github.com/z-shell/wiki/tree/main/${versionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale !== "en") {
              return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
            }
            return `https://github.com/z-shell/wiki/tree/main/${blogDirPath}/${blogPath}`;
          },
          showReadingTime: true,
          postsPerPage: "ALL",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Z-Shell Community`,
          },
        },
        sitemap: {changefreq: "weekly"},
        theme: {customCss: [require.resolve("./src/css/custom.css")]},
      }),
    ],
  ],
  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== "en") {
            return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
          }
          return `https://github.com/z-shell/wiki/tree/main/${versionDocsDirPath}/${docPath}`;
        },
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "ecosystem",
        path: "ecosystem",
        routeBasePath: "ecosystem",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== "en") {
            return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
          }
          return `https://github.com/z-shell/wiki/tree/main/${versionDocsDirPath}/${docPath}`;
        },
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      }),
    ],
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({quality: 70, max: 1030, min: 630, disableInDev: false}),
    ],
    [
      "pwa",
      /** @type {import('@docusaurus/plugin-pwa').PluginOptions} */
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          {tagName: "link", rel: "icon", href: "img/logo.svg"},
          {tagName: "link", rel: "icon", href: "img/logo.png"},
          {tagName: "link", rel: "manifest", href: "manifest.json"},
          {tagName: "link", rel: "browserconfig", href: "browserconfig.xml"},
          /* Windows  */
          {tagName: "meta", name: "msapplication-TileColor", content: "#23b898"},
          {tagName: "meta", name: "msapplication-TileImage", content: "img/logo.png"},
          {tagName: "meta", name: "msapplication-navbutton-color", content: "#23b898"},
          {tagName: "meta", name: "msapplication-config", content: "browserconfig.xml"},
          /* Android  */
          {tagName: "meta", name: "theme-color", content: "hsl(167°, 68%, 43%)"},
          {tagName: "meta", name: "mobile-web-app-capable", content: "yes"},
          /* iOS  */
          {tagName: "meta", name: "apple-mobile-web-app-title", content: "Z-Shell"},
          {tagName: "meta", name: "apple-mobile-web-app-capable", content: "yes"},
          {tagName: "meta", name: "apple-mobile-web-app-status-bar-style", content: "default"},
          /* Pinned Sites  */
          {tagName: "meta", name: "application-name", content: "Z-Shell"},
          {tagName: "meta", name: "msapplication-tooltip", content: "A Swiss Army Knife for Zsh Unix shell"},
          {tagName: "meta", name: "msapplication-starturl", content: "/"},
          /* Tap highlighting */
          {tagName: "meta", name: "msapplication-tap-highlight", content: "no"},
        ],
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {mermaid: false},
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: "/img/png/theme/z/320x320.png",
      metadata: [
        {name: "twitter:card", content: "summary"},
        {name: "og:title", content: "Z-Shell"},
        {name: "og:description", content: "Swiss Army Knife for Zsh Unix shell"},
        {name: "keywords", content: "z-shell, zsh, zinit, zplugin, oh-my-zsh, prezto, zi, devops, zsh-plugins"},
      ],
      announcementBar: {
        id: "announcement-bar",
        content: `If you like Zi - give it a <a target="_blank" rel="noopener noreferrer" href="https://github.com/z-shell/zi" aria-label="GitHub repository star"><i class="fa-solid fa-star"></i></a>, share it on <a target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/submitlink?u=https://wiki.zshell.dev/&t=A%20Swiss%20Army%20Knife%20for%20Zsh%20Unix%20shell%20|%20%E2%9D%AE%20Zi%20%E2%9D%AF" aria-label="Hacker News"><i class="fa-brands fa-square-hacker-news"></i></a>, and consider following us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/z-shell" aria-label="GitHub"><i class="fa-brands fa-github-alt"></i></a>`,
        isCloseable: true,
      },
      algolia: {
        appId: "FMPN8VE51Y",
        apiKey: "a3d13a1058ae9304a8c987ea67b08ce4",
        indexName: "zshell",
        contextualSearch: true,
      },
      navbar: {
        hideOnScroll: true,
        title: "Z-Shell",
        logo: {
          alt: "A Swiss Army Knife for Zsh Unix shell",
          src: "img/logo.svg",
          target: "_self",
          width: 32,
          height: 32,
        },
        items: [
          {type: "doc", docId: "intro", position: "left", label: "Docs"},
          {to: "ecosystem", position: "left", label: "Ecosystem"},
          {to: "community", position: "left", label: "Community"},
          /* { to: 'blog', position: 'left', label: 'Blog' }, */
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                href: "https://translate.zshell.dev/",
                label: "Help Us Translate",
              },
            ],
          },
          {
            href: "https://github.com/z-shell/zi",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          /* {type: 'html', position: 'left', value: '<button>Give feedback</button>'}, */
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Knowledge Base",
            items: [
              {
                label: "Introduction",
                to: "/docs",
              },
              {
                label: "Ecosystem",
                to: "/ecosystem",
              },
              {
                label: "Community",
                to: "/community",
              },
              {
                label: "Guides",
                to: "/docs/category/-guides",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussions",
                href: "https://discussions.zshell.dev",
              },
              {
                label: "GitHub",
                href: "https://github.com/orgs/z-shell",
              },
              {
                label: "Matrix",
                href: "https://matrix.to/#/#zshell:matrix.org",
              },
              {
                label: "Gitter",
                href: "https://gitter.im/z-shell/zi",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Zsh News",
                href: "https://zsh.sourceforge.io/News/",
              },
              {
                label: "Zsh Manual",
                href: "https://zsh.sourceforge.io/Doc/Release/zsh_toc.html",
              },
              {
                label: "Localization",
                href: "https://translate.zshell.dev",
              },
              {
                label: "Uptime Status",
                href: "https://status.zshell.dev",
              },
              /* {html: `▼▼▼`}, */
            ],
          },
          {
            title: "Legal",
            items: [
              {label: "Privacy Policy", to: "legal/PRIVACY"},
              {label: "Code of Conduct", to: "legal/CODE_OF_CONDUCT"},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Z-Shell Community`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/dracula"),
        defaultLanguage: "shell",
        additionalLanguages: ["ini", "vim", "verilog"],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: {start: "highlight-start", end: "highlight-end"},
          },
          {
            className: "code-block-error-line",
            line: "error-line",
          },
        ],
      },
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 5},
    }),
};

module.exports = config;
