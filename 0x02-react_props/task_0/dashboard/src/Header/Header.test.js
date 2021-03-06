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
    const text = wrapper.find('header');
    assert.equal(text.length, 1, "More or less than 1 header found");
  });
});
