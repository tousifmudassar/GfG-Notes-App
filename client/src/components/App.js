import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";

class App extends Component {
  state = {
    User: null,
    Error: null
  };
  handleAuth = (username, password) => {
    const Users = {
      Mudassar: "123",
      Praveen: "Hello123"
    };
    if (!Users[username]) {
      //User not found
      this.setState({
        User: null,
        Error: "User not found!"
      });
    } else if (Users[username] && Users[username] !== password) {
      //password is wrong
      this.setState({
        User: null,
        Error: "Wrong Password!"
      });
    } else {
      //password is right.
      this.setState({
        User: { Name: username },
        Error: null
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? (
          <Welcome User={this.state.User} />
        ) : (
          <Login handleAuth={this.handleAuth} />
        )}
      </div>
    );
  }
}

export default App;
