import React from 'react';
import ReactDOM from 'react-dom';
import { jest } from '@jest/globals';
import { shallow, mount } from '../../config/setupTests';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Logged from '../Login/Logged';
import CourseList from '../CourseList/CourseList';

describe('Test suite for rendering the App component', () => {
  it('test that App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that App recognizes ctrl + h keydown event and calls logOut function', () => {
    const mockLog = jest.spyOn(console, 'log');
    const keystroke = new KeyboardEvent('keydown', { ctrlKey: true, bubbles: true, key: 'h' })
    document.dispatchEvent(keystroke);
    expect(mockLog).toHaveBeenCalledWith('Logging you out');
    expect(mockLog).toHaveBeenCalledWith('logOut called');
    jest.restoreAllMocks();
  })

  it('test that App renders with Header component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Header);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Login);
    expect(element.length).toBe(0);
  });

  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(Logged, Login);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Footer);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Notifications);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    const element = wrapper.find('div.notifications-div');
    expect(element.length).toBe(0);
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(CourseList);
    expect(element.length).toBe(0);
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Logged, CourseList);
    expect(element.length).toBe(1);
  });
});
