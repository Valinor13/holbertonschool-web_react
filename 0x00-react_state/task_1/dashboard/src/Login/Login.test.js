import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(<Login />);

describe('Test suite for rendering the Login component', () => {

  it('test that Login renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Login renders with App-body', () => {
    const element = wrapper.find('div#appBody');
    expect(element.length).toBe(1);
  });
  
  it('test that Login renders with input tag', () => {
    const element = wrapper.find('input');
    expect(element.length).toBe(2);
  });
  
  it('test that Login renders with label tag', () => {
    const element = wrapper.find('label');
    expect(element.length).toBe(2);
  });
});
