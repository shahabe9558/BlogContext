import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
const App = () => {
  const location = useLocation();
  const [searchParams, setSearchParmas] = useSearchParams();
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const tag = location.pathname.split('/').at(-1);
    const category = location.pathname.split('/').at(-1);
    if(location.pathname.includes('tag')){
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes('categories')){
      fetchBlogPosts(Number(page), category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);

  return (
    <div className="w-[100%]  h-[100%] border border-black flex flex-col items-center">
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/blog/:blogId" element = {<BlogPage/>} />
        <Route path="/tags/tag" element = {<TagPage/>} />
        <Route path="/category/category"element = {<CategoryPage/>} />
      </Routes>
    </div>
  )
};
export default App;
