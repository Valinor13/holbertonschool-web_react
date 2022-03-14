import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifcations from '../Notifications/Notifications';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Notifcations />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
