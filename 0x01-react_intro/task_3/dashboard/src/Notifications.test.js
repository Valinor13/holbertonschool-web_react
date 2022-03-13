import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from './setupTests';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('Test suite for Notifications', () => {
  
  it('tests Notifications renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notifications />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  })

  it('tests that Notifications renders three list items', () => {
    const text = wrapper.find('li');
    assert.equal(text.length, 3, "More or less than 3 list items found");
  })

  it('tests that Notifications renders the correct text', () => {
    const text = wrapper.find('p');
    assert.equal(text.text(), 'Here is the list of notifications', "Paragraph not found with correct text");
  })
})
