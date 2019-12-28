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
