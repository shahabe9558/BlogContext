import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
// to create a context api 
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [posts, setPost] = useState([]);
    const[loading, setloading] = useState(true);
    const[page, setPage] = useState(1);
    const[totalPage, settotalPage] = useState(null);

    const fetchBlogPosts = async (page = 1) => {
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const data = await fetch(url);
            const result = await data.json();
            console.log("Printing the result from api called", result);
            setPost(result.posts);
            setPage(result.page);
            settotalPage(result.totalPages);
        }
        catch(error){
            console.log("Error in fetching the post");
            setPage(1);
            setPost([]);
            settotalPage(null);
        }
        setloading(false);
    }
    
  useEffect(() => {
    fetchBlogPosts();
  },[]);

    const handlerPageChange = (page) =>{
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPost,
        loading,
        setloading,
        page,
        setPage,
        totalPage, 
        settotalPage,
        fetchBlogPosts
    };
    return <AppContext.Provider value={value}> 
    {children} 
    </AppContext.Provider>
}