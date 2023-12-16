import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
    const{loading, setloading} = useContext(AppContext);
    const [blog, setBlog] = useState(null);
    const [reatedBlog, setrelatedBlog] = useState([]);
    const location = useLocation();
    const baseUrl = 'https://codehelp-apis.vercel.app/api/get-blog';
    const blogId = location.pathname.split('/').at(-1);

    async function fetchRealtedVlog(){
        setloading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            setBlog(data.blog);
            setrelatedBlog(data.relatedBlogs);

        }
        catch(error){
            console.log(error);
            setBlog(null);
            setrelatedBlog([]);
        }
        setloading(false);
    }

    useEffect(()=> {
        fetchRealtedVlog();
    },[location.pathname]);
    return(
        <div>
            <Header/>
            <div>
                <button>Back</button>
                <div>
                 {
                  loading ? (<Spinner/>) : (blog
                    ? (<BlogDetails/>) : <h2>No blog found</h2>>
                    )
                 }   
                </div>
            </div>
        </div>
    )
}
export default BlogPage;