import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe('Test suite for NotificationItem', () => {

  it('tests NotificationItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotificationItem />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that NotificationItem.markAsRead calls with the correct id', () => {
    const mockRead = jest.spyOn(Notifications.prototype, 'markAsRead');
    const mockLog = jest.spyOn(console, 'log');
    const wrapper = mount(<Notifications />);
    wrapper.instance().markAsRead();
    expect(mockRead).toHaveBeenCalledWith();
    expect(mockLog).toHaveBeenCalledWith('Notification undefined has been marked as read')
    jest.restoreAllMocks();
    wrapper.unmount();
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
