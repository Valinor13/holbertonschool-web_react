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
  },
  smallLogin: {
    '@media (max-width: 900px)': {
      marginLeft: "auto",
      marginRight: "auto",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      paddingTop: '0px',
      paddingLeft: '0px',
      fontSize: "18px",
      fontWeight: "normal",
    }
  },
  smallForm: {
    '@media (max-width: 900px)': {
      display: "flex",
      flexDirection: "column",
    }
  }
});

function Login() {
  return (
    <div id='appBody' className={css(styles.appBody, styles.smallLogin)}>
      <div className={css(styles.loginDiv, styles.smallLogin)}>
        <p>
          Login to access the full dashboard
        </p>
        <form className={css(styles.smallForm)}>
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
    </div>
  )
}

export default Login;
