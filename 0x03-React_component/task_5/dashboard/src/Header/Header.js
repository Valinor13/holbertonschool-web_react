import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import WithLogging from '../HOC/WithLogging';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="holberton-logo" alt="logo" />
      <h1 className='header-text'>
        School dashboard
      </h1>
    </header>
  )
}

export default WithLogging(Header);
