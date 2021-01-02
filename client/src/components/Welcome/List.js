import React from "react";

function List({ Notes }) {
  return (
    <>
      <h3>Notes List</h3>
      <ul className="list-group">
        {Notes.map((item, key) => (
          <li className="list-group-item list-group-item-action" key={key}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
