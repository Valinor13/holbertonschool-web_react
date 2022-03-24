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
    maxHeight: "350px",
    height: '100%',
    maxWidth: "350px",
    width: '100%',
  },
  headerText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#E11D3F',
  },
  smallLogo: {
    '@media (max-width: 900px)': {
      maxHeight: "170px",
      height: '100%',
      maxWidth: "170px",
      width: '100%',
    }
  },
  });

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.logo, styles.smallLogo)} alt="logo" />
      <h1 className={css(styles.headerText)}>
        School dashboard
      </h1>
    </header>
  )
}

export default Header;
