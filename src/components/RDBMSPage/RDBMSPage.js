import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DataTable from "../DataTable/DataTable";
import "./RDBMSPage.css";

function RDBMSPage() {
  const [data, setData] = useState([]);
  const [table_nm, setTableName] = useState("");
  const [db_nm, setDatabaseName] = useState("");

  const databases = [
    { name: "Database1", tables: ["Employee", "Student"] },
    { name: "Database2", tables: ["Employee", "Student"] },
  ];

  const fetchTableData = (db, table) => {
    console.log(`/${db}/${table}.json`);
    fetch(`/${db}/${table}.json`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((fetched_data) => {
        console.log(fetched_data);
        setData(fetched_data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setData([]);
      });
  };

  return (
    <div className="RDBMSPage">
      <div className="content">
        <Sidebar
          databases={databases}
          onTableClick={fetchTableData}
          setTableName={setTableName}
          setDatabaseName={setDatabaseName}
        />
        <DataTable data={data} table_nm={table_nm} db_nm={db_nm} />
      </div>
    </div>
  );
}
export default RDBMSPage;
