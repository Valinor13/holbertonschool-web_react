import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import logo from '../assets/holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-body">
        <div className='login-div'>
          <p>
            Login to access the full dashboard
          </p>
          <form>
            <label>
              Email:
              <input className='input-text' type="text" name="email" />
            </label>
            <label>
              Password:
              <input className='input-text' type="text" name="password" />
            </label>
            <input className='input-button' type="submit" value="Ok" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
