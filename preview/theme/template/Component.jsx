import React from 'react';

class Component extends React.Component {
  get componentData() {
    const { params, data } = this.props;
    return data[params.component];
  }

  renderDemos() {
    const { utils } = this.props;
    const demos = Object.values(this.componentData.demo)
      .sort((a, b) => a.meta.order - b.meta.order);
    return demos.map(demo => (
      <div key={demo.meta.title}>
        <hr />
        <div>{demo.meta.title}</div>
        {utils.toReactComponent(demo.content)}
        {demo.previews.map((preview, idx) => (
          <div key={idx}>
            {preview.preview()}
            {utils.toReactComponent(preview.highlight)}
          </div>
        ))}
      </div>
    ));
  }

  render() {
    const { utils } = this.props;
    const doc = this.componentData.index;
    return (
      <div>
        <div>{doc.title}</div>
        {utils.toReactComponent(doc.content)}
        {this.renderDemos()}
      </div>
    );
  }
}

export default Component;
