import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import AppContext from './AppContext';
import { boundUIActions } from '../actions/uiActionCreators';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

const styles = StyleSheet.create({
  fullHeader: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottom: '6px solid #E11D3F',
  },
  smallHeader: {
    '@media (max-width: 900px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  smallBody: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

let isMounted = false;

class App extends Component {
  constructor() {
    super();
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      listNotifications,
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
    };
  }

  componentDidMount() {
    isMounted = true;
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'h') {
        console.log('Logging you out');
        this.logOut();
      }
    });
  }

  componentWillUnmount() {
    isMounted = false;
    document.removeEventListener('keydown', (event) => {});
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications
        .map((notification) => {
          if (notification.id === id) {
            return null;
          }
          return notification;
        })
        .filter((notification) => notification !== null),
    });
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  };

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  };

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  // Can't perform a React state update on an unmounted component
  logOut() {
    if (isMounted) {
      this.setState({
        user: {
          email: '',
          password: '',
          isLoggedIn: false,
        },
      });
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <div className={css(styles.fullHeader, styles.smallHeader)}>
            <Notifications
              handleHideDrawer={this.handleHideDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              displayDrawer={this.state.displayDrawer}
              listNotifications={this.state.listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>
          <div className={css(styles.smallBody)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Some random text</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.isUserLoggedIn,
  }
}

export default App;
