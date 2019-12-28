import React from 'react';

class Layout extends React.Component {
  renderComponentsNav() {
    const { picked: { components }, router } = this.props;
    components.sort((a, b) => a.order - b.order);
    return (
      <div>
        {components.map(o => (
          <button
            key={o.key}
            onClick={() => router.push(`/components/${o.key}`)}
          >{o.title}</button>
        ))}
      </div>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {this.renderComponentsNav()}
        {children}
      </div>
    );
  }
}

export default Layout;
