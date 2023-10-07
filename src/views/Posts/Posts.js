import React from "react";
import "./Posts.css";
import blogData from "./../../configs/blogs-data.json";
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";


export default function Posts() {
    return (
        <div>
            <h1 className="text-center">Electronic Devices</h1>
            {
                blogData.map((post, index) => {
                    return <PreviewPostCard key={index} id={post.id} title={post.title} description= 
                     {post.description} />
                })
            }
        </div>
    )
}