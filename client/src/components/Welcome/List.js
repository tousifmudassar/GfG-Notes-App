import React from "react";
import { withRouter, Link } from "react-router-dom";

const List = ({ Notes, match }) => {
  return (
    <>
      <h3 className="mb-">Notes List</h3>

      <div className="list-group">
        {Notes.map((note, key) => (
          <Link
            to={"/note-" + key}
            className={
              "list-group-item list-group-item-action" +
              (match.params.NoteID &&
              +match.params.NoteID.replace("note-", "") === key
                ? "active"
                : "")
            }
            key={key}
          >
            {note.Title}
          </Link>
        ))}
        {Notes.length === 0 && (
          <span className="list-group-item">
            No notes found! Feel free to add one!
          </span>
        )}
      </div>
    </>
  );
};

export default withRouter(List);
