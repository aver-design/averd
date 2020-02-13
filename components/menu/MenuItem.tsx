import * as React from 'react';
import classnames from 'classnames';

export interface MenuItemProps {
  active?: Boolean; // active will be force passed by Menu wrapper, cannot be used by users
  onClick?: () => void; // onClick will be force passed by Menu wrapper, cannot be used by users
}

const MenuItem: React.FC<MenuItemProps> = ({ children, active, onClick }) => {
  const classList = ['averd-menu-item'];
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
