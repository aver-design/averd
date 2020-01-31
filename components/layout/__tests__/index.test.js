import mountTest from '../../../__tests__/shared/mountTest';
import Layout from '..';

describe('Layout', () => {
  mountTest(Layout);
  mountTest(Layout.Header);
  mountTest(Layout.Side);
  mountTest(Layout.Content);
  mountTest(Layout.Footer);
});
