import * as React from 'react';
import classnames from 'classnames';

const Header: React.FC = ({ children }) => {
  return <div className="averd-layout-header">{children}</div>;
};

const Side: React.FC = ({ children }) => {
  return <div className="averd-layout-side">{children}</div>;
};

const Content: React.FC = ({ children }) => {
  return <div className="averd-layout-content">{children}</div>;
};

const Footer: React.FC = ({ children }) => {
  return <div className="averd-layout-footer">{children}</div>;
};

interface ILayout extends React.FC {
  Header: React.ReactNode;
  Side: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}

const Layout: ILayout = ({ children }) => {
  const hasSide = (() => {
    if (children instanceof Array) {
      return children.some((child: React.ReactElement) => child && child.type === Side);
    }
    return false;
  })();
  const className = classnames('averd-layout', { 'averd-layout-has-side': hasSide });
  return <div className={className}>{children}</div>;
};

Layout.Header = Header;
Layout.Side = Side;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
