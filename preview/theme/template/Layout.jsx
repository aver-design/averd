import React from 'react';

function Layout({ data, router, children }) {
  return (
    <div>
      <div>
        {Object.keys(data).map(o => (
          <button key={o} onClick={() => router.push(`/components/${o}`)}>{o}</button>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Layout;
