import React from 'react';

function Component({ params, data, utils }) {
  const doc = data[params.component].index;
  const demos = Object.values(data[params.component].demo);
  return (
    <div>
      <div>{doc.title}</div>
      {utils.toReactComponent(doc.content)}
      {demos.map(demo => (
        <div>
          <hr />
          <div>{demo.title}</div>
          {utils.toReactComponent(demo.content)}
        </div>
      ))}
    </div>
  );
}

export default Component;
