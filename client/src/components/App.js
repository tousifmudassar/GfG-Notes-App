import React, { Component } from "react";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
      </div>
    );
  }
}

export default App;
