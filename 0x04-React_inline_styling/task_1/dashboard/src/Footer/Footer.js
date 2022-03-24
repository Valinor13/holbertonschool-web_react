import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';

const styles = StyleSheet.create({
  appFooter: {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold",
    fontStyle: "italic",
    borderTop: "6px solid #E11D3F",
  },
  smallFooter: {
    '@media (max-width: 900px)': {
      fontSize: "18px",
      fontWeight: "normal",
    }
  }
})

function Footer() {
  return (
    <footer className={css(styles.appFooter, styles.smallFooter)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  )
}

export default Footer;
