import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifcations from '../Notifications/Notifications';
import Logged from '../Login/Logged';
import './App.css';

function App({ isLoggedIn, displayDrawer}) {
  return (
    <React.Fragment>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      <div>
        <Notifcations displayDrawer={displayDrawer} />
      </div>
      <div className="App">
        <Header />
        <Logged isLoggedIn={isLoggedIn} />
        <Footer />
      </div>
    </React.Fragment>
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
