import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import Login from './Login';

const wrapper = shallow(<Login />);

describe('Test suite for rendering the Login DOM', () => {

  it('test that Login renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Login renders with App-body', () => {
    const element = wrapper.find('main');
    assert.equal(element.length, 1, "> 1 < Login found");
  });
  
  it('test that Login renders with input tag', () => {
    const element = wrapper.find('input');
    assert.equal(element.length, 2, "> 2 < input tags found");
  });
  
  it('test that Login renders with label tag', () => {
    const element = wrapper.find('label');
    assert.equal(element.length, 2, "> 2 < label tags found");
  });
});
