import React, { Component } from "react";
import List from "./List";
import Note from "./Note";
import WelcomeHeader from "./WelcomeHeader";
import { Route } from "react-router-dom";

class Welcome extends Component {
  state = {
    Notes: ["Note 1", "Note 2", "Note 3", "Note 4"]
  };

  render() {
    const { User, handleLogout } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogout={handleLogout} />
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes} />
            </div>
            <div className="col-9">
              <Note />
            </div>
          </Route>
        </div>
      </div>
    );
  }
}

export default Welcome;
