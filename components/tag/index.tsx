import * as React from 'react';
import classnames from 'classnames';
import { presetColors } from '../style/color';

export interface TagProps {
  color: string;
}

const Tag: React.FC<TagProps> = ({ children, color }) => {
  const classNameList = ['averd-tag'];
  const style: React.CSSProperties = {};
  if (presetColors.indexOf(color) !== -1) {
    classNameList.push(`averd-tag-${color}`);
  }
  if (/^#[0-9a-fA-F]{6}$/.test(color)) {
    classNameList.push(`averd-tag-with-color`);
    style.backgroundColor = color;
  }
  return (
    <span className={classnames(classNameList)} style={style}>
      {children}
    </span>
  );
};

export default Tag;
