const path = require('path');

module.exports = {
  lazyLoad: false,
  pick: {
    components(markdownData) {
      const r = /^components\/(.+?)\/index.md$/.exec(markdownData.meta.filename);
      if (r) {
        return {
          key: r[1],
          ...markdownData.meta,
        };
      }
    },
  },
  plugins: [
    'bisheng-plugin-toc',
    path.resolve(__dirname, 'plugin-preview'),
  ],
  routes: [
    {
      path: '/',
      component: './template/Layout',
      childRoutes: [
        {
          path: '/components/:component',
          component: './template/Component',
        },
      ],
    },
  ],
};
