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
    const text = wrapper.find('main');
    assert.equal(text.length, 1, "More or less than 1 Login found");
  });
  
});
