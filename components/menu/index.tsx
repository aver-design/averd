import * as React from 'react';
import MenuItem from './MenuItem';

interface IMenu extends React.FC<MenuProps> {
  Item: typeof MenuItem;
}

type MenuKey = string | number;

export interface MenuProps {
  style?: React.CSSProperties;
  mode?: 'horizontal' | 'vertical';
  defaultActiveKey?: MenuKey;
  activeKey?: MenuKey;
  onClick?: (key: MenuKey) => void;
}

const Menu: IMenu = ({
  children,
  style,
  mode = 'vertical',
  defaultActiveKey,
  activeKey,
  onClick,
}) => {
  const [currentKey, setCurrentKey] = React.useState(defaultActiveKey);
  const isMenuActive = React.useCallback(
    key => {
      if (activeKey === undefined) {
        return currentKey === key;
      }
      return activeKey === key;
    },
    [activeKey, currentKey],
  );

  const handleMenuItemClick = (key: MenuKey) => {
    setCurrentKey(key);
    if (typeof onClick === 'function') {
      onClick(key);
    }
  };

  return (
    <div className={`averd-menu averd-menu-${mode}`} style={style}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (child.type === MenuItem) {
          return React.cloneElement(child, {
            active: isMenuActive(child.key),
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
