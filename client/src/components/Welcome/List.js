import React from "react";

function List({ Notes, setCurrentNote, CurrentNote }) {
  return (
    <>
      <h3>Notes List</h3>
      <ul className="list-group">
        {Notes.map((item, key) => (
          <li
            className={
              "list-group-item list-group-item-action" +
              (CurrentNote === key ? "active" : "")
            }
            key={key}
            onClick={() => setCurrentNote(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
