import * as React from 'react';
import classnames from 'classnames';

export interface LayoutProps {
  style?: React.CSSProperties;
}

function generateChildLayout(className: string) {
  const ChildLayout: React.FC<LayoutProps> = ({ children, style }) => {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  };
  return ChildLayout;
}

const Header = generateChildLayout('averd-layout-header');
const Side = generateChildLayout('averd-layout-side');
const Content = generateChildLayout('averd-layout-content');
const Footer = generateChildLayout('averd-layout-footer');

interface ILayout extends React.FC<LayoutProps> {
  Header: React.ReactNode;
  Side: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}

const Layout: ILayout = ({ children, style }) => {
  const hasSide = (() => {
    if (children instanceof Array) {
      return children.some((child: React.ReactElement) => child && child.type === Side);
    }
    return false;
  })();
  const className = classnames('averd-layout', { 'averd-layout-has-side': hasSide });
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Side = Side;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
