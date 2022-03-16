import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

describe('Test suite for rendering the Footer component', () => {
  it('test that Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Footer renders with App-footer', () => {
    const element = wrapper.find('footer');
    assert.equal(element.length, 1, "> 1 < footer found");
  });

  it('test that Footer renders with text "Copyright"', () => {
    const element = wrapper.find('p');
    assert.include(element.text(), "Copyright", "Copyright not found in footer");
  });
});
