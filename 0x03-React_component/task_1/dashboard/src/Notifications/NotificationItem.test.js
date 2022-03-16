import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import NotificationItem from './NotificationItem';

describe('Test suite for NotificationItem', () => {

  it('tests NotificationItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotificationItem />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  })

  it('tests that NotificationItem renders with type=Default', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    const element = wrapper.find('li');
    assert.equal(element.prop('data-notification-type'), 'default', "No element with prop type=default");
  });

  it('tests that NotificationItem renders with value=Test', () => {
    const wrapper = shallow(<NotificationItem value="test" />);
    const element = wrapper.find('li');
    assert.equal(element.text(), 'test', 'Text did not return with test')
  });

  it('tests that NotificationItem renders with html=<u>test</u>', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const element = wrapper.find('li');
    assert.deepEqual(element.prop('dangerouslySetInnerHTML'), { __html: '<u>test</u>' }, 'Element does not containt dangerouslySetInnerHTML')
  });
})
