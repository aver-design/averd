import React from 'react';
import _ from 'lodash';

import '../style';

class Layout extends React.PureComponent {
  state = {
    componentList: [],
  };

  componentDidMount() {
    const { picked } = this.props;
    const componentList = _.cloneDeep(picked.components);
    componentList.sort((a, b) => a.order - b.order);
    this.setState({ componentList });
  }

  render() {
    const { children } = this.props;
    const { componentList } = this.state;
    return (
      <div className="averd-preview">
        <div className="header">
          <div className="header-item">Aver Design</div>
        </div>
        <div className="side">
          {componentList.map(o => (
            <div
              key={o.key}
              className="side-item"
              onClick={() => router.push(`/components/${o.key}`)}
            >
              {o.title}
            </div>
          ))}
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
