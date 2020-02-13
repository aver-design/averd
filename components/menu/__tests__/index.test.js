import React from 'react';
import { shallow } from 'enzyme';

import mountTest from '../../../__tests__/shared/mountTest';
import Menu from '..';
import MenuItem from '../MenuItem';

describe('Menu', () => {
  mountTest(Menu);

  describe('mode test', () => {
    it('should be well rendered with mode type', () => {
      ['horizontal', 'vertical'].forEach(mode => {
        const component = shallow(<Menu mode={mode} />);
        expect(component.hasClass(`averd-menu-${mode}`)).toBe(true);
      });
    });
  });

  describe('active key test', () => {
    it('should be active with defaultActiveKey', () => {
      const component = shallow(
        <Menu defaultActiveKey="item1">
          <Menu.Item key="item1">item1</Menu.Item>
          <Menu.Item key="item2">item2</Menu.Item>
        </Menu>,
      );
      expect(component.childAt(0).prop('active')).toBe(true);
      expect(component.childAt(1).prop('active')).toBe(false);
    });

    it('should be controlled by activeKey', () => {
      const component = shallow(
        <Menu activeKey="item1">
          <Menu.Item key="item1">item1</Menu.Item>
          <Menu.Item key="item2">item2</Menu.Item>
        </Menu>,
      );
      expect(component.childAt(0).prop('active')).toBe(true);
      expect(component.childAt(1).prop('active')).toBe(false);
      component.childAt(1).simulate('click');
      expect(component.childAt(0).prop('active')).toBe(true);
      expect(component.childAt(1).prop('active')).toBe(false);
      component.setProps({ activeKey: 'item2' });
      expect(component.childAt(0).prop('active')).toBe(false);
      expect(component.childAt(1).prop('active')).toBe(true);
    });

    it('should trigger onClick event when menu item clicked', () => {
      let clickedKey = null;
      const onClick = jest.fn().mockImplementation(key => {
        clickedKey = key;
      });
      const component = shallow(
        <Menu onClick={onClick}>
          <Menu.Item key="item1">item1</Menu.Item>
          <Menu.Item key="item2">item2</Menu.Item>
        </Menu>,
      );
      component.childAt(0).simulate('click');
      expect(onClick).toBeCalled();
      expect(clickedKey).toBe('item1');
      expect(component.childAt(0).prop('active')).toBe(true);
      expect(component.childAt(1).prop('active')).toBe(false);
    });
  });
});

describe('MenuItem', () => {
  mountTest(MenuItem);

  it('should be Menu static property', () => {
    expect(MenuItem).toBe(Menu.Item);
  });

  describe('active test', () => {
    it('should be well rendered with active status', () => {
      expect(shallow(<MenuItem />).hasClass('averd-menu-item-active')).toBe(false);
      expect(shallow(<MenuItem active={false} />).hasClass('averd-menu-item-active')).toBe(false);
      expect(shallow(<MenuItem active />).hasClass('averd-menu-item-active')).toBe(true);
    });

    it('should trigger onClick event', () => {
      const onClick = jest.fn();
      const component = shallow(<MenuItem onClick={onClick} />);
      component.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
