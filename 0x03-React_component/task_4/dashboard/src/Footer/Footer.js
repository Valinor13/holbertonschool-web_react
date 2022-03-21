import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import WithLogging from '../HOC/WithLogging';

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  )
}

export default WithLogging(Footer);
