// Include main doc categories on most pages
const mainMenu = [
  // https://docusaurus.io/docs/sidebar/items
  {
    type: 'doc',
    id: 'index',
    label: 'Quick Start',
    className: 'icon-menu-option icon-menu-quick-start'
  },
  {
    type: 'link',
    href: '/runtime/guide',
    label: 'User Guide',
    className: 'icon-menu-option icon-menu-user-guide'
  },
  {
    type: 'link',
    label: 'Tutorials & Examples',
    href: '/runtime/tutorials',
    className: 'icon-menu-option icon-menu-tutorials'
  },
  {
    type: 'link',
    label: 'API Reference',
    href: 'https://deno.land/api?unstable=true',
    className: 'icon-menu-option icon-menu-api __no-external'
  },
];

const sidebars = {
  runtime: mainMenu,

  runtimeGuideHome: mainMenu.concat([
    {
      type: 'html',
      value: '<div>User Guide</div>',
      className: 'section-header'
    },
    {
      type: 'autogenerated',
      dirName: 'guide',
    },
    {
      type: 'html',
      value: '<div style="height: 30px;"></div>',
    },
  ]),

  runtimeTutorialsHome: mainMenu.concat([
    {
      type: 'html',
      value: '<div>Tutorials &amp; Examples</div>',
      className: 'section-header'
    },
    {
      type: 'autogenerated',
      dirName: 'tutorials',
    },
  ]),
};

module.exports = sidebars;
