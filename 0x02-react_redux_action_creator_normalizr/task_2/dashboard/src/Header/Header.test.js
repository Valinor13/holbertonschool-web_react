import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = mount(<Header />);

describe('Test suite for rendering the Header component', () => {

  it('test that Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Header renders with App-header', () => {
    const element = wrapper.find('header');
    expect(element.length).toBe(1);
  });

  it('test that Header renders with img tag', () => {
    const element = wrapper.find('img');
    expect(element.length).toBe(1);
  });

  it('test that Header renders with h1 tag', () => {
    const element = wrapper.find('h1');
    expect(element.length).toBe(1);
  });
});
