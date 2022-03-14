import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import Header from './Header';

const wrapper = shallow(<Header />);

describe('Test suite for rendering the Header DOM', () => {

  it('test that Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Header renders with App-header', () => {
    const element = wrapper.find('header');
    assert.equal(element.length, 1, "> 1 < header found");
  });

  it('test that Header renders with img tag', () => {
    const element = wrapper.find('img');
    assert.equal(element.length, 1, "> 1 < img tag found");
  });

  it('test that Header renders with h1 tag', () => {
    const element = wrapper.find('h1');
    assert.equal(element.length, 1, "> 1 < h1 tag found");
  });
});
