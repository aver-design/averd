import React from 'react';
import { shallow } from 'enzyme';

import mountTest from '../../../__tests__/shared/mountTest';
import Tag from '..';

describe('Tag', () => {
  mountTest(Tag);

  describe('color test', () => {
    it('could render children', () => {
      const text = 'test'; // TODO random text
      const component = shallow(<Tag>{text}</Tag>);
      expect(component.text()).toBe(text);
    });

    it('should be well rendered with preset colors', () => {
      const colors = [
        'magenta',
        'red',
        'volcano',
        'orange',
        'gold',
        'yellow',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',
      ];
      colors.forEach(color => {
        const component = shallow(<Tag color={color}>{color}</Tag>);
        expect(component.hasClass(`averd-tag-${color}`));
      });
    });

    it('should be well rendered with custom colors', () => {
      const color = '#1f2f3f'; // TODO random hex
      const component = shallow(<Tag color={color}>{color}</Tag>);
      expect(component.hasClass(`averd-tag-with-color`));
      expect(component.prop('style').backgroundColor).toBe(color);
    });

    it('should render default color with no-preset colors', () => {
      const color = 'white'; // we don't have a preset color named 'white'
      const component = shallow(<Tag color={color}>{color}</Tag>);
      expect(component.hasClass(`averd-tag-${color}`)).toBe(false);
      expect(component.hasClass(`averd-tag-with-color`)).toBe(false);
    });
    it('should render default color with illegal color hex string', () => {
      const color = '#1f2f3g'; // it's not a legal hex string
      const component = shallow(<Tag color={color}>{color}</Tag>);
      expect(component.hasClass(`averd-tag-${color}`)).toBe(false);
      expect(component.hasClass(`averd-tag-with-color`)).toBe(false);
    });
  });
});
