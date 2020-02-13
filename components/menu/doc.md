---
order: 0
category: Navigation
title: Menu
---

Menu for navigation.

## API

### Menu

| Prop | Description | Type | Default Value |
| --- | --- | --- | --- |
| style | Style of the root node | Object | |
| mode | Type of menu | `horizontal` \| `vertical` | |
| defaultActiveKey | Default key of current activated menu | string \| number | |
| activeKey | Key of current activated menu | string \| number | |
| onClick | Called after a menu item clicked | function (key: string \| number) | |

### Menu.Item

| Prop | Description | Type | Default Value |
| --- | --- | --- | --- |
| key | Unique key for menu item | string \| number | |
