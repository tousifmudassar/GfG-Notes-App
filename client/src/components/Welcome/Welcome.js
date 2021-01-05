import React, { Component } from "react";
import List from "./List";
import Note from "./Note";
import WelcomeHeader from "./WelcomeHeader";
import { Route } from "react-router-dom";

class Welcome extends Component {
  state = {
    Notes: [
      {
        NoteID: "hello",
        Title: "Hello World",
        Desc:
          "Hello World Hello World Hello World Hello World Hello World Hello World"
      },
      {
        NoteID: "faq",
        Title: "Frequently Asked Questions",
        Desc: "What Questions are you asking frequently."
      },
      {
        NoteID: "GfG",
        Title: "GeeksforGeeks",
        Desc: "Hello GeeksforGeeks"
      }
    ]
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
