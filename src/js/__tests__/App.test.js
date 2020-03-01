import {mount} from 'enzyme';
import React from 'react';
import {App} from "../App";

describe('App', () => {
  test('Renders expected semantic elements', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists('header')).toBe(true);
    expect(wrapper.exists('nav')).toBe(true);
    expect(wrapper.exists('main')).toBe(true);
    expect(wrapper.exists('footer')).toBe(true);
  });
});
