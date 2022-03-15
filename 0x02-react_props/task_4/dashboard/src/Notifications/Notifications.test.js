import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Test suite for Notifications', () => {

  it('tests Notifications renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notifications />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  })

  it('tests that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find(NotificationItem);
    assert.equal(element.length, 3, "> 3 < list items found");
  })

  it('tests that Notifications renders the correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('p');
    assert.equal(element.text(), 'Here is the list of notifications', "Paragraph not found with correct text");
  })

  it('tests that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const element = wrapper.find(NotificationItem);
    assert.equal(element.length, 0, "> 3 < list items found");
  })

  it('tests that Notifications renders the correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const element = wrapper.find('p');
    assert.equal(element.length, 0, "Paragraph found with incorrect text");
  })
})
