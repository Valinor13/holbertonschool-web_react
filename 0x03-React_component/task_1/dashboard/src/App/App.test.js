import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
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

  it('test that App renders with Header component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Header);
    assert.equal(element.length, 1, '> 1 < Header component rendered');
  });

  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Login);
    assert.equal(element.length, 0, 'Login component rendered when logged in');
  });

  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(Logged, Login);
    assert.equal(element.length, 1, 'Login component not rendered when not logged in');
  });

  it('test that App renders with Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Footer);
    assert.equal(element.length, 1, '> 1 < Footer component rendered');
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Notifications);
    assert.equal(element.length, 1, 'Notifications component not rendered when display is true');
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    const element = wrapper.find('div.notifications-div');
    assert.equal(element.length, 0, 'Notifications component rendered when display is false');
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(CourseList);
    assert.equal(element.length, 0, 'CourseList component rendered when logged in');
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Logged, CourseList);
    assert.equal(element.length, 1, 'CourseList component not rendered when not logged in');
  });
});
