---
order: 0
title: Basic
---

Basic usage of Layout.

```jsx
import { Layout } from 'averd';

const { Header, Side, Content, Footer } = Layout;

ReactDOM.render(
  <div>
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
  </div>,
  mountNode,
);
```

```css
.averd-layout {
  margin-bottom: 32px;
}

.averd-layout-header {
  background: #c7abed;
}

.averd-layout-side {
  background: #8e58da;
}

.averd-layout-content {
  background: #722ed1;
}

.averd-layout-footer {
  background: #c7abed;
}
```
