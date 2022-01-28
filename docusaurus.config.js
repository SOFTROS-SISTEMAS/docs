// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agulhão',
  tagline: 'Sistema especialista em confecção',
  url: 'https://docs.agulhao.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SOFTROS-SISTEMAS', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Agulhão',
        logo: {
          alt: 'Sistema Agulhão',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Aplicativo',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Produtos',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Clientes',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Financeiro',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Pessoal',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Faturamento',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Confecção',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Configurações',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'API',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/agulhaosistema/',
              },
            ],
          },
          {
            title: 'Sobre',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Para lojas',
                to: '/blog',
              },
              {
                label: 'Para industrias',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Softros Sistemas.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
