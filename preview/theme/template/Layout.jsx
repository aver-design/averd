import React from 'react';

import '../style';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    const { components } = props.picked;
    this.state = {
      componentList: [...components].sort((a, b) => a.order - b.order),
    };
  }

  renderMenus() {
    const { router } = this.props;
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
    return menus.map(o => (
      <div key={o.key} className="side-item" onClick={() => router.push(o.path)}>
        {o.title}
      </div>
    ));
  }

  render() {
    const { children, router } = this.props;
    return (
      <div className="averd-preview">
        <div className="header">
          <div className="header-item" onClick={() => router.push('/')}>
            Aver Design
          </div>
        </div>
        <div className="side">{this.renderMenus()}</div>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Layout;
