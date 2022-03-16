import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Logged from '../Login/Logged';
import './App.css';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: "New resume available"},
  {id: 3, type: 'urgent', html: getLatestNotification()}
];

function App({ isLoggedIn, displayDrawer }) {
  return (
    <div className="App">
      <div className='full-header'>
        <div className='full-notifications'>
          <div className='menuItem'>
            <p>Your notifications</p>
          </div>
          <Notifications displayDrawer={displayDrawer} listNotifications={listNotifications} />
        </div>
        <Header />
      </div>
      <Logged isLoggedIn={isLoggedIn} listCourses={listCourses} />
      <Footer />
    </div>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
}

export default App;
