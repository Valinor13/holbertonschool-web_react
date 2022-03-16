import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from '../../config/setupTests';
import NotificationItem from './NotificationItem';

const shallow = Enzyme.shallow;

describe('Test suite for NotificationItem', () => {

  it('tests NotificationItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotificationItem />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('tests that NotificationItem renders with type=Default', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    const element = wrapper.find('li');
    expect(element.prop('data-notification-type')).toBe('default');
  });

  it('tests that NotificationItem renders with value=Test', () => {
    const wrapper = shallow(<NotificationItem value="test" />);
    const element = wrapper.find('li');
    expect(element.text()).toBe('test');
  });

  it('tests that NotificationItem renders with html=<u>test</u>', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const element = wrapper.find('li');
    expect(element.prop('dangerouslySetInnerHTML')).toStrictEqual({ __html: '<u>test</u>' });
  });
})
