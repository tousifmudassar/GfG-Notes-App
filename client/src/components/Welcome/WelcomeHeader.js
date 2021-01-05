import React from "react";
import { Link } from "react-router-dom";

const WelcomeHeader = ({ User, handleLogout }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="border rounded p-2">
            <p className="m-0">Welcome, {User.Name}!</p>
            <Link to="/" className="btn btn-primary btn-sm mr-2">
              Home
            </Link>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
