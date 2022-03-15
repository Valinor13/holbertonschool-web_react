import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

const wrapper = shallow(<App />);

describe('Test suite for rendering the App component', () => {
  it('test that App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that App renders with Header component', () => {
    const element = wrapper.find(Header);
    assert.equal(element.length, 1, '> 1 < Header component rendered');
  });

  it('test that App renders with Login component', () => {
    const element = wrapper.find(Login);
    assert.equal(element.length, 1, '> 1 < Login component rendered');
  });

  it('test that App renders with Footer component', () => {
    const element = wrapper.find(Footer);
    assert.equal(element.length, 1, '> 1 < Footer component rendered');
  });

  it('test that App renders with Notifications component', () => {
    const element = wrapper.find(Notifications);
    assert.equal(element.length, 1, '> 1 < Notifications component rendered');
  });
});
