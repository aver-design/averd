import * as React from 'react';
import classnames from 'classnames';
import { presetColors } from '../style/color';

export interface TagProps {
  style?: React.CSSProperties;
  color: string;
}

const Tag: React.FC<TagProps> = ({ children, style, color }) => {
  const classNameList = ['averd-tag'];
  const inlineStyle: React.CSSProperties = {};
  if (presetColors.indexOf(color) !== -1) {
    classNameList.push(`averd-tag-${color}`);
  }
  if (/^#[0-9a-fA-F]{6}$/.test(color)) {
    classNameList.push(`averd-tag-with-color`);
    inlineStyle.backgroundColor = color;
  }
  return (
    <span className={classnames(classNameList)} style={{ ...inlineStyle, ...(style || {}) }}>
      {children}
    </span>
  );
};

export default Tag;
