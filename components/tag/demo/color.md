---
order: 0
title: Colors
---

Pre-defined colors can be used.
You can also set it to a hex string.

```jsx
import { Tag } from 'averd';

ReactDOM.render(
  <div>
    <h4>Preset</h4>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <h4>Custom</h4>
    <Tag color="#ff3c3c">#ff3c3c</Tag>
  </div>,
  mountNode,
);
```
