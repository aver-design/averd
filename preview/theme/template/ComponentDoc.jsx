import React from 'react';

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    const { params, data } = props;
    const { doc, demo } = data[params.component];
    const demos = Object.values(demo)
      .map(o => ({ ...o, preview: o.previews[0] }))
      .sort((a, b) => a.order - b.order);
    this.setState({ doc, demos });
    this.state = {
      doc,
      demos,
    };
  }

  renderDoc() {
    const { utils } = this.props;
    const { doc } = this.state;
    if (!doc) {
      return null;
    }
    return (
      <div>
        <h2>{doc.meta.title}</h2>
        {utils.toReactComponent(doc.content)}
      </div>
    );
  }

  renderDemos() {
    const { utils } = this.props;
    const { demos } = this.state;
    return demos.map(demo => (
      <div key={demo.meta.filename} className="demo-box">
        <div className="demo-preview">
          {demo.preview.preview()}
          <div className="demo-title">{demo.meta.title}</div>
          <div className="demo-description">{utils.toReactComponent(demo.content)}</div>
        </div>
        <div className="demo-code">{utils.toReactComponent(demo.preview.highlight)}</div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderDoc()}
        {this.renderDemos()}
      </div>
    );
  }
}

export default Component;
