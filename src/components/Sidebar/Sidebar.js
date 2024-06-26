import React from "react";
import "./Sidebar.css";

function Sidebar({ databases, onTableClick, setTableName, setDatabaseName }) {
  const handleClick = (table, db) => {
    console.log(db, table);
    setTableName(table);
    setDatabaseName(db);
    onTableClick(db, table);
  };
  return (
    <div className="sidebar">
      {databases.map((db, dbIndex) => (
        <div key={dbIndex} className="database">
          <h3>{db.name}</h3>
          <ul>
            {db.tables.map((table, tableIndex) => (
              <li key={tableIndex} onClick={() => handleClick(table, db.name)}>
                {table}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
