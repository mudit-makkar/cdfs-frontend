import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RDBMSPage from "./components/RDBMSPage/RDBMSPage";
import FTPPage from "./components/FTPPage/FTPPage";
import RestApiPage from "./components/RestApiPage/RestApiPage";
import DataLakePage from "./components/DataLakePage/DataLakePage";
import SnowflakePage from "./components/SnowflakePage/SnowflakePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/rdbms" Component={RDBMSPage} />
          <Route exact path="/ftp" Component={FTPPage} />
          <Route exact path="/restapi" Component={RestApiPage} />
          <Route exact path="/datalake" Component={DataLakePage} />
          <Route exact path="/snowflake" Component={SnowflakePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
