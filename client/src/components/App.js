import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import { AuthUser } from "../services/User";

class App extends Component {
  state = {
    User: null,
    Error: null
  };
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
  handleLogout = e => {
    e.preventDefault();
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
          <Login handleAuth={this.handleAuth} Error={this.state.Error} />
        )}
      </div>
    );
  }
}

export default App;
