import * as React from 'react';

export interface TagProps {
  color: string;
}

const Tag: React.FC<TagProps> = ({ children, color }) => {
  const presetColors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];
  if (presetColors.indexOf(color) !== -1) {
    return <div className={`averd-tag averd-tag-${color}`}>{children}</div>;
  }
  if (/^#[0-9a-fA-F]{6}$/.test(color)) {
    return (
      <div className="averd-tag averd-tag-with-color" style={{ backgroundColor: color }}>
        {children}
      </div>
    );
  }
  return <div className="averd-tag">{children}</div>;
};

export default Tag;
