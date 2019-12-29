const transformer = require('bisheng-plugin-react/lib/transformer');

module.exports = function(markdownData) {
  const babelConfig = {
    plugins: [
      ['import', {
        libraryName: 'averd',
        style: true
      }],
    ],
  };

  if (Array.isArray(markdownData.content)) {
    const content = [];
    const previews = [];
    markdownData.content = markdownData.content.map(node => {
      const [tagName, attr] = node;
      if (tagName === 'pre' && attr && attr.lang === 'jsx') {
        const code = node[2][1];
        const processedCode = transformer(code, babelConfig, false);
        const preview = {
          __BISHENG_EMBEDED_CODE: true,
          code: processedCode,
        };
        previews.push({ code, highlight: node, preview });
      } else {
        content.push(node);
      }
    });

    markdownData.content = content;
    markdownData.previews = previews;
  }

  return markdownData;
};
