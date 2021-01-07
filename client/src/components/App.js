import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import { AuthUser, CheckUser, LogoutUser, RegUser } from "../services/User";

class App extends Component {
  state = {
    User: null,
    AuthError: null,
    RegError: null,
    RegSuccess: null
  };
  componentDidMount() {
    CheckUser().then(res => {
      this.setState({
        User: res.data
      });
    });
  }
  handleAuth = (username, password) => {
    AuthUser(username, password)
      .then(res => {
        this.setState({
          User: res.data.Message,
          AuthError: null,
          RegError: null,
          RegSuccess: null
        });
      })
      .catch(error => {
        this.setState({
          User: null,
          AuthError: error.response.data.Message
        });
      });
  };
  handleReg = (username, password) => {
    RegUser(username, password)
      .then(res => {
        this.setState({
          User: null,
          AuthError: null,
          RegError: null,
          RegSuccess: res.data.Message
        });
      })
      .catch(error => {
        this.setState({
          User: null,
          RegSuccess: null,
          RegError: error.response.data.Message
        });
      });
  };
  handleLogout = e => {
    e.preventDefault();
    LogoutUser().then(() => {
      this.setState({
        User: null
      });
    });
    this.setState({
      User: null
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? (
          <Welcome User={this.state.User} handleLogout={this.handleLogout} />
        ) : (
          <Login
            handleAuth={this.handleAuth}
            handleReg={this.handleReg}
            RegSuccess={this.state.RegSuccess}
            AuthError={this.state.AuthError}
            RegError={this.state.RegError}
          />
        )}
      </div>
    );
  }
}

export default App;
