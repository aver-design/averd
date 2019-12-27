module.exports = {
  lazyLoad: false,
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
