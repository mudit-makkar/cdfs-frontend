import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "../../assets/Carelon-Global-Solutions-Logo.jpg";

const HomePage = () => {
  console.log("Hello World");
  return (
    <>
      <img
        align="right"
        src={logo}
        alt="Carelon-Global-Solutions"
        height="70"
        width="300"
      />
      <h1 style={{ color: "DodgerBlue" }}>Carelon Data Fabric App</h1>
      <table>
        <tr>
          <th>Technology</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <p>
              <Link to="/rdbms">RDBMS</Link>
            </p>
          </td>
          <td>
            A database management system that stores data in tables with rows
            and columns, enforcing relationships between data. Examples: MySQL,
            PostgreSQL, Oracle.
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <Link to="/ftp">FTP</Link>
            </p>
          </td>
          <td>
            A protocol used for transferring files between computers over a
            network.
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <Link to="/restapi">API</Link>
            </p>
          </td>
          <td>
            A set of rules and specifications that allow different software
            systems to communicate with each other.
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <Link to="/datalake">DATA LAKE</Link>
            </p>
          </td>

          <td>
            A data lake(S3/HDFS/Blob Storage/Google Cloud Storage) is a
            centralized repository designed to store, process, and secure large
            amounts of structured, semistructured, and unstructured data.
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <Link to="/snowflake">SNOWFLAKE</Link>
            </p>
          </td>

          <td>
            Snowflake enables data storage, processing, and analytic solutions
            that are faster, easier to use, and far more flexible than
            traditional offerings.
          </td>
        </tr>
      </table>
    </>
  );
};
export default HomePage;
