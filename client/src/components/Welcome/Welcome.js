import React from "react";
import List from "./List";

const Welcome = ({ User, handleLogout }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="border rounded p-2">
            <p className="m-0">Welcome, {User.Name}.</p>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <List Notes={["Note 1", "Note 2", "Note 3", "Note 4"]} />
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
};
export default Welcome;
