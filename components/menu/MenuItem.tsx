import * as React from 'react';
import classnames from 'classnames';

export interface MenuItemProps {
  active?: Boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, active, onClick }) => {
  const classList = ['averd-menu', 'averd-menu-item'];
  if (active) {
    classList.push('averd-menu-item-active');
  }

  return (
    <div className={classnames(classList)} onClick={onClick}>
      {children}
    </div>
  );
};

export default MenuItem;
