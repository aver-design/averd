import React from 'react';
import less from 'less';

function DemoStyle({ css, demoId }) {
  const [wrappedCss, setWrappedCss] = React.useState(null);
  React.useEffect(() => {
    if (css) {
      const wrappedLess = `[data-demo="${demoId}"] { ${css} }`;
      less.render(wrappedLess).then(r => {
        setWrappedCss(r.css);
      });
    } else {
      setWrappedCss(null);
    }
  }, [css]);
  return React.createElement('style', null, wrappedCss);
}

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

  renderDemos() {
    const { utils } = this.props;
    const demos = this.getDemos();
    return demos.map(demo => {
      const demoId = Math.random()
        .toString(16)
        .substr(2, 8);
      return (
        <div key={demo.meta.filename} className="demo-box">
          <div className="demo-preview">
            <div data-demo={demoId}>{demo.preview()}</div>
            <DemoStyle demoId={demoId} css={demo.sourceCode.css} />
            <div className="demo-title">{demo.meta.title}</div>
            <div className="demo-description">{utils.toReactComponent(demo.description)}</div>
          </div>
          <div className="demo-code">
            {Object.keys(demo.sourceCode).map(language => (
              <div key={language} className="code-block">
                <div className="code-language">{language}</div>
                <pre>
                  <code>{demo.sourceCode[language]}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      );
    });
  }

  render() {
    const { utils } = this.props;
    const doc = this.getDoc();
    if (!doc) {
      return null;
    }
    return (
      <div>
        <h1>{doc.meta.title}</h1>
        {utils.toReactComponent(doc.description)}
        {this.renderDemos()}
        {doc.api.length > 0 && utils.toReactComponent(doc.api)}
      </div>
    );
  }
}

export default ComponentDoc;
