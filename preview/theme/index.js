const path = require('path');

module.exports = {
  lazyLoad: false,
  pick: {
    components(markdownData) {
      const r = /^components\/(.+?)\/doc.md$/.exec(markdownData.meta.filename);
      if (r) {
        return {
          key: r[1],
          ...markdownData.meta,
        };
      }
      return null;
    },
  },
  plugins: ['bisheng-plugin-toc', path.resolve(__dirname, 'plugin-preview')],
  routes: [
    {
      path: '/',
      component: './template/Layout',
      childRoutes: [
        {
          path: '/colors',
          component: './template/ColorDoc',
        },
        {
          path: '/components/:component',
          component: './template/ComponentDoc',
        },
      ],
    },
  ],
};
