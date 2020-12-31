import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";

class App extends Component {
  state = {
    User: null
  };
  handleAuth = (username, password) => {
    const Users = {
      Mudassar: "123",
      Praveen: "Hello123"
    };
    if (!Users[username]) {
      //User not found
    } else if (Users[username] && Users[username] !== password) {
      //password is wrong
    } else {
      //password is right.
      this.setState({
        User: { Name: username }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? <Welcome User={this.state.User} /> : <Login />}
      </div>
    );
  }
}

export default App;
