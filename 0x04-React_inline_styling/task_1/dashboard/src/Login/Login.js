import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    height: '650px',
  },
  loginDiv: {
    fontSize: '25px',
    fontWeight: 'bold',
    paddingTop: '100px',
    paddingLeft: '60px',
  },
  label: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  inputText: {
    marginLeft: '10px',
    marginRight: '10px',
    height: '21px',
  },
  inputButton: {
    height: '28px',
    borderRadius: '6px',
    borderWidth: '1px',
    width: '46px',
    backgroundColor: 'white',
    boxShadow: '-3px 3px red',
  }
});

function Login() {
  return (
    <main className={css(styles.appBody)}>
      <div className={css(styles.loginDiv)}>
        <p>
          Login to access the full dashboard
        </p>
        <form>
          <label className={css(styles.label)}>
            Email:
            <input className={css(styles.inputText)} type="text" name="email" />
          </label>
          <label className={css(styles.label)}>
            Password:
            <input className={css(styles.inputText)} type="text" name="password" />
          </label>
          <button className={css(styles.inputButton)} type="submit">Ok</button>
        </form>
      </div>
    </main>
  )
}

export default Login;
