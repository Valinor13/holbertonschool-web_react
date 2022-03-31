import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  appBody: {
    height: "650px",
  },
  loginDiv: {
    fontSize: "25px",
    fontWeight: "bold",
    paddingTop: "100px",
    paddingLeft: "60px",
  },
  label: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  inputText: {
    marginLeft: "10px",
    marginRight: "10px",
    height: "21px",
  },
  inputButton: {
    height: "28px",
    borderRadius: "6px",
    borderWidth: "1px",
    width: "46px",
    backgroundColor: "white",
    boxShadow: "-3px 3px red",
  },
  smallLogin: {
    "@media (max-width: 900px)": {
      marginLeft: "auto",
      marginRight: "auto",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      paddingTop: "0px",
      paddingLeft: "0px",
      fontSize: "18px",
      fontWeight: "normal",
    },
  },
  smallForm: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleEnableSubmit() {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({
        enableSubmit: true,
      });
    }
  }

  render() {
    return (
      <div id="appBody" className={css(styles.appBody, styles.smallLogin)}>
        <div className={css(styles.loginDiv, styles.smallLogin)}>
          <p>Login to access the full dashboard</p>
          <form
            onSubmit={this.handleLoginSubmit}
            className={css(styles.smallForm)}
          >
            <label className={css(styles.label)}>
              Email:
              <input
                id="email"
                className={css(styles.inputText)}
                type="text"
                name="email"
                value={this.state.email}
                onChange={(event) => {
                  this.handleChangeEmail(event);
                  this.handleEnableSubmit();
                }}
              />
            </label>
            <label className={css(styles.label)}>
              Password:
              <input
                id="password"
                className={css(styles.inputText)}
                type="text"
                name="password"
                value={this.state.password}
                onChange={(event) => {
                  this.handleChangePassword(event);
                  this.handleEnableSubmit();
                }}
              />
            </label>
            <input
              id="submit"
              className={css(styles.inputButton)}
              disabled={!this.state.enableSubmit}
              type="submit"
              value="Ok"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
