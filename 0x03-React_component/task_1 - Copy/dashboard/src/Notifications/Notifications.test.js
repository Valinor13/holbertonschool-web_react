import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: "New resume available"},
  {id: 3, type: 'urgent', html: { __html: `<strong>Urgent requirement</strong> - complete by EOD` }}
];

describe('Test suite for Notifications', () => {

  it('tests Notifications renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notifications />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  })

  it('tests that Notifications renders paragraph when list is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('p');
    expect(element.text()).toBe('No new notification for now');
  })

  it('tests that Notifications renders when list is not empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const element = wrapper.find(NotificationItem);
    expect(element.length).toBe(3);
  })

  it('tests that Notifications renders the correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const element = wrapper.find('p');
    expect(element.text()).toBe('Here is the list of notifications');
  })

  it('tests that Notifications does not render when display is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const element = wrapper.find('p');
    expect(element.length).toBe(0);
  })

})
