---
order: 0
title: Basic
---

Basic usage of Menu. Two mode types can be used.

```jsx
import { Menu } from 'averd';

ReactDOM.render(
  <>
    <h4>Horizontal</h4>
    <Menu mode="horizontal" defaultActiveKey="item1">
      <Menu.Item key="item1">Menu 1</Menu.Item>
      <Menu.Item key="item2">Menu 2</Menu.Item>
      <Menu.Item key="item3">Menu 3</Menu.Item>
    </Menu>
    <h4>Vertical</h4>
    <Menu defaultActiveKey="item1">
      <Menu.Item key="item1">Menu 1</Menu.Item>
      <Menu.Item key="item2">Menu 2</Menu.Item>
      <Menu.Item key="item3">Menu 3</Menu.Item>
    </Menu>
  </>,
  mountNode,
);
```
