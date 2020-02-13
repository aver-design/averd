import React from 'react';
import { Layout, Menu } from 'averd';

import '../style';

class DocLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    const { components } = props.picked;
    this.state = {
      componentList: [...components].sort((a, b) => a.order - b.order),
    };
  }

  renderMenus() {
    const {
      location: { pathname },
      router,
    } = this.props;
    const { componentList } = this.state;
    const menus = [
      {
        key: 'colors',
        title: 'Colors',
        path: '/colors',
      },
      ...componentList.map(o => ({
        key: `component-${o.key}`,
        title: o.title,
        path: `/components/${o.key}`,
      })),
    ];
    const handleMenuClick = key => {
      const menu = menus.find(o => o.key === key);
      router.push(menu.path);
    };
    const activeMenuKey = (() => {
      const menu = menus.find(o => new RegExp(pathname).test(o.path));
      return menu.key;
    })();
    return (
      <Menu
        mode="vertical"
        activeKey={activeMenuKey}
        onClick={handleMenuClick}
        style={{ height: '100%', width: 256 }}
      >
        {menus.map(o => (
          <Menu.Item key={o.key}>{o.title}</Menu.Item>
        ))}
      </Menu>
    );
  }

  render() {
    const { children, router } = this.props;
    return (
      <div className="averd-preview">
        <Layout>
          <Layout.Header>
            <div className="header-item" onClick={() => router.push('/')}>
              Aver Design
            </div>
          </Layout.Header>
          <Layout>
            <Layout.Side>{this.renderMenus()}</Layout.Side>
            <Layout>
              <Layout.Content>{children}</Layout.Content>
              <Layout.Footer>Copyright &copy; 2020 Averd - A version of design</Layout.Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default DocLayout;
