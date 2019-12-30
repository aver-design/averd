import * as React from 'react';

export interface TagProps {}

const Tag: React.FC<TagProps> = ({ children }) => <div className="averd-tag">{children}</div>;

export default Tag;
