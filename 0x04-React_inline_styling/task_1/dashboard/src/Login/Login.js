import React from 'react';
import './Login.css';

function Login() {
  return (
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
          <button className='input-button' type="submit">Ok</button>
        </form>
      </div>
    </main>
  )
}

export default Login;
