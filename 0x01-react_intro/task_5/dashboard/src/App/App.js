import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';
import logo from '../assets/holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="holberton-logo" alt="logo" />
        <h1 className='header-text'>
          School dashboard
        </h1>
      </header>
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
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
