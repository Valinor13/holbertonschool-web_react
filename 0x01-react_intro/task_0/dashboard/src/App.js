import './App.css';
import logo from './holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="holberton-logo" alt="logo" />
        <h1 className='header-text'>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p className='body-paragraph'>
          Login to access the full dashboard
        </p>
      </body>
      <footer className="App-footer">
        Copyright 2020 - holberton School
      </footer>
    </div>
  );
}

export default App;
