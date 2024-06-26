import React from "react";
import "./DataTable.css";

function DataTable({ data, table_nm, db_nm }) {
  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <h2>No data available</h2>
      </div>
    );
  }
  return (
    <div className="table-container">
      <h2>
        {db_nm}/{table_nm}
      </h2>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
