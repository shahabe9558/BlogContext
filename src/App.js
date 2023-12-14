import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import BLogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  // useEffect(() => {
  //   fetchBlogPosts();
  // },[]);

  return (
    <div className="w-11/12  h-screen flex flex-col items-center">
      <Header/>
      <BLogs/>
      <Pagination/>
    </div>
  )
};
export default App;
