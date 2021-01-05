import React from "react";
import { withRouter, Link } from "react-router-dom";

const List = ({ Notes, match }) => {
  return (
    <>
      <h3>Notes List</h3>

      <div className="list-group">
        {Notes.map((item, key) => (
          <Link
            to={"/note-" + key}
            className={
              "list-group-item list-group-item-action" +
              (+match.params.NoteID.replace("note-", "") === key
                ? "active"
                : "")
            }
            key={key}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default withRouter(List);
