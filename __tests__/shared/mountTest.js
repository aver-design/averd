import React from 'react';
import { mount } from 'enzyme';

function mountTest(Component) {
  describe('mount test', () => {
    test('component could be mounted and unmounted', () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}

export default mountTest;
