import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";

class App extends Component {
  state = {
    User: null
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
