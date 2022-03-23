import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: 'calc(10px + 1.5vmin)',
  },
  logo: {
    height: '350px',
    width: '350px',
  },
  headerText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#E11D3F',
  }  
});

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.headerText)}>
        School dashboard
      </h1>
    </header>
  )
}

export default Header;
