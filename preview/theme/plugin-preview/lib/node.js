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
    const sourceCode = {};
    markdownData.content = markdownData.content.forEach(node => {
      const [tagName, attr] = node;
      if (tagName === 'pre') {
        const { lang: language } = attr;
        const code = node[2][1];
        sourceCode[language] = code;
      } else {
        content.push(node);
      }
    });

    const preview = {
      __BISHENG_EMBEDED_CODE: true,
      code: transformer(sourceCode.jsx, babelConfig, false), // transfer jsx to es5
    };

    markdownData.content = content;
    markdownData.sourceCode = sourceCode;
    markdownData.preview = preview;
  }

  return markdownData;
};
