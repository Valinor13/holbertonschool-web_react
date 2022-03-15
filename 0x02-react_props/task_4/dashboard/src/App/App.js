import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Logged from '../Login/Logged';
import './App.css';

function App({ isLoggedIn, displayDrawer }) {
  return (
    <div className="App">
      <div className='full-header'>
        <div className='full-notifications'>
          <div className='menuItem'>
            <p>Your notifications</p>
          </div>
          <Notifications displayDrawer={displayDrawer} />
        </div>
        <Header />
      </div>
      <Logged isLoggedIn={isLoggedIn} />
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
