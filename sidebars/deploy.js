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
    href: '/deploy/guide',
    label: 'User Guide',
    className: 'icon-menu-option icon-menu-user-guide'
  },
  {
    type: 'link',
    label: 'Tutorials & Examples',
    href: '/deploy/tutorials',
    className: 'icon-menu-option icon-menu-tutorials'
  },
  {
    type: 'link',
    label: 'API Reference',
    href: '/deploy/api',
    className: 'icon-menu-option icon-menu-api'
  },
];

const sidebars = {
  deploy: mainMenu,

  deployGuideHome: mainMenu.concat([
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

  deployTutorialsHome: mainMenu.concat([
    {
      type: 'html',
      value: '<div>Tutorials &amp; Examples</div>',
      className: 'section-header'
    },
    {
      type: 'autogenerated',
      dirName: 'tutorials',
    },
    {
      type: 'html',
      value: '<div style="height: 30px;"></div>',
    },
  ]),

  deployAPIHome: mainMenu.concat([
    {
      type: 'html',
      value: '<div>API Reference</div>',
      className: 'section-header'
    },
    {
      type: 'autogenerated',
      dirName: 'api',
    },
    {
      type: 'html',
      value: '<div style="height: 30px;"></div>',
    },
  ]),
};

module.exports = sidebars;
