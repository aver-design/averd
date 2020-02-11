---
order: 1
title: Controlled Status
---

Active key can be controlled

```jsx
import { Menu } from 'averd';

function ControlledMenu() {
  const [currentKey, setCurrentKey] = React.useState('item1');

  const handleClick = e => {
    setCurrentKey(e);
    console.log(`menu [${e}] clicked!`);
  }

  return (
    <Menu activeKey={currentKey} onClick={handleClick}>
      <Menu.Item key="item1">Menu 1</Menu.Item>
      <Menu.Item key="item2">Menu 2</Menu.Item>
      <Menu.Item key="item3">Menu 3</Menu.Item>
    </Menu>
  );
}

ReactDOM.render(<ControlledMenu />, mountNode);
```
