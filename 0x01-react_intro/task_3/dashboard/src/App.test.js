import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from './setupTests';
import App from './App';

describe('Test suite for rendering the DOM', () => {

  it('test that App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  })

  it('test that App renders with App-header', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('header');
    assert.equal(text.length, 1, "More or less than 1 header found");
  })

  it('test that App renders with App-body', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('main');
    assert.equal(text.length, 1, "More or less than 1 main found");
  })

  it('test that App renders with App-footer', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('footer');
    assert.equal(text.length, 1, "More or less than 1 footer found");
  })
})