import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

import React from 'react'

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  )
}

export default Footer
