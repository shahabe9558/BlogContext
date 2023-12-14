import React from "react";
import Header from "./components/Header";
import BLogs from "./components/Blogs";
import Pagination from "./components/Pagination";
const App = () => {
  return (
    <div className="w-11/12  h-screen flex flex-col items-center">
      <Header/>
      <BLogs/>
      <Pagination/>
    </div>
  )
};
export default App;
