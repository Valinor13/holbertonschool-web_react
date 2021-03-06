import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

describe('Test suite for rendering the Footer DOM', () => {

  it('test that Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Footer renders with App-footer', () => {
    const text = wrapper.find('footer');
    assert.equal(text.length, 1, "More or less than 1 footer found");
  });
});
