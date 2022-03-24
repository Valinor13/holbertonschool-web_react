import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Logged from '../Login/Logged';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: "New resume available" },
  { id: 3, type: 'urgent', html: getLatestNotification() }
];

const styles = StyleSheet.create({
  fullHeader: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottom: '6px solid #E11D3F',
  },
  fullNotifications: {
    marginTop: '3rem',
    width: '600px',
  },
  menuItem: {
    textAlign: 'right',
    ':hover': {
      transform: "translateY(-5px)",
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationIterationCount: 3,
      cursor: "pointer",
      opacity: 0.5,
    }
  },
  smallHeader: {
    '@media (max-width: 900px)': {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },
  smallBody: {
    '@media (max-width: 900px)': {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
})

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'h') {
        console.log('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event) => { });
  }

  render() {
    return (
      <div className="App">
        <div className={css(styles.fullHeader, styles.smallHeader)}>
          <div className={css(styles.fullNotifications)}>
            <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
            </div>
            <Notifications displayDrawer={this.props.displayDrawer} listNotifications={listNotifications} />
          </div>
          <Header />
        </div>
        <div className={css(styles.smallBody)}>
          <Logged isLoggedIn={this.props.isLoggedIn} listCourses={listCourses} />
          <BodySection title='News from the School'>
            <p>Some random text</p>
          </BodySection>
        </div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => { console.log('logOut called') }
}

export default App;
