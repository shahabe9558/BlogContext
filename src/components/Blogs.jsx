import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
const BLogs =  () => {
    const {posts, loading} = useContext(AppContext);
    return (
        <div className="border border-red-600">
          {
            loading 
            ? (<Spinner/>)
            :  posts.length === 0
             ? (<h1>Not found any post</h1>) 
             : (posts.map((post) => (
                 <Card key={post.id} post = {post}/>
             )))
          }
        </div>
    )
}
export default BLogs;