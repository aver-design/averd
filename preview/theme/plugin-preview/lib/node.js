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
    const description = [];
    const api = [];
    const sourceCode = {};
    markdownData.content.forEach(node => {
      const [tagName, attr] = node;
      if (tagName === 'pre') {
        const { lang: language } = attr;
        const code = node[2][1];
        sourceCode[language] = code;
      } else {
        if (tagName === 'h2' && attr === 'API') {
          api.push('article', node);
        } else if (api.length) {
          api.push(node);
        } else {
          description.push(node);
        }
      }
    });

    const preview = {
      __BISHENG_EMBEDED_CODE: true,
      code: transformer(sourceCode.jsx, babelConfig, false), // transfer jsx to es5
    };

    markdownData.description = description;
    markdownData.api = api;
    markdownData.sourceCode = sourceCode;
    markdownData.preview = preview;
  }

  return markdownData;
};
