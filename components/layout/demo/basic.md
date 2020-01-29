---
order: 0
title: Basic
---

Basic usage of Layout.

```jsx
import { Layout } from 'averd';

const { Header, Side, Content, Footer } = Layout;

ReactDOM.render(
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Side>Side</Side>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Side>Side</Side>
        <Layout>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>

    <Layout>
      <Side>Side</Side>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>,
  mountNode,
);
```

```css
.averd-layout + .averd-layout {
  margin-top: 64px;
}

.averd-layout-header,
.averd-layout-side,
.averd-layout-content,
.averd-layout-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.averd-layout-header {
  height: 64px;
  background: #c7abed;
}

.averd-layout-side {
  width: 30%;
  background: #8e58da;
}

.averd-layout-content {
  height: 180px;
  background: #722ed1;
}

.averd-layout-footer {
  height: 64px;
  background: #c7abed;
}
```
