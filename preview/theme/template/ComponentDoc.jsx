import React from 'react';

class ComponentDoc extends React.PureComponent {
  getDoc() {
    const { params, data } = this.props;
    const { doc } = data[params.component];
    return doc;
  }

  getDemos() {
    const { params, data } = this.props;
    const { demo } = data[params.component];
    return Object.values(demo).sort((a, b) => a.order - b.order);
  }

  renderDoc() {
    const { utils } = this.props;
    const doc = this.getDoc();
    if (!doc) {
      return null;
    }
    return (
      <div>
        <h1>{doc.meta.title}</h1>
        {utils.toReactComponent(doc.content)}
      </div>
    );
  }

  renderDemos() {
    const { utils } = this.props;
    const demos = this.getDemos();
    return demos.map(demo => (
      <div key={demo.meta.filename} className="demo-box">
        <div className="demo-preview">
          {demo.preview()}
          <div className="demo-title">{demo.meta.title}</div>
          <div className="demo-description">{utils.toReactComponent(demo.content)}</div>
        </div>
        <div className="demo-code">
          {Object.keys(demo.sourceCode).map(language => (
            <div key={language} className="code-block">
              <div className="code-language">{language}</div>
              <pre>{utils.toReactComponent(demo.sourceCode[language])}</pre>
            </div>
          ))}
        </div>
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

export default ComponentDoc;
