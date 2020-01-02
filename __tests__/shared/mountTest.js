import React from 'react';
import { mount } from 'enzyme';

export default function mountTest(Component) {
  describe('mount test', () => {
    it('could be mounted and unmounted', () => {
      const component = mount(<Component />);
      expect(() => {
        component.unmount();
      }).not.toThrow();
    });
  });
}
