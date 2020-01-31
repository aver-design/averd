import * as React from 'react';
import MenuItem from './MenuItem';

interface IMenu extends React.FC<MenuProps> {
  Item: typeof MenuItem;
}

type MenuKey = string | number;

export interface MenuProps {
  mode: 'horizontal' | 'vertical';
  defaultActiveKey: MenuKey;
  onClick?: (key: MenuKey) => void;
}

const Menu: IMenu = ({ children, mode = 'horizontal', defaultActiveKey, onClick }) => {
  const [currentKey, setCurrentKey] = React.useState(defaultActiveKey);

  const handleMenuItemClick = (key: MenuKey) => {
    setCurrentKey(key);
    if (typeof onClick === 'function') {
      onClick(key);
    }
  };

  return (
    <div className={`averd-menu averd-menu-${mode}`}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (child.type === MenuItem) {
          return React.cloneElement(child, {
            active: currentKey === child.key,
            onClick: () => handleMenuItemClick(child.key as MenuKey),
          });
        }
        return child;
      })}
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;
