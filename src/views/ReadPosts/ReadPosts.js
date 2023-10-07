import React from "react";
import blogData from "./../../configs/blogs-data.json";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import "./ReadPosts.css";
import {Link} from "react-router-dom"; 


export default function ReadPosts() {
    const {id} = useParams();
const [post , setPost] = useState({}) ; 

useEffect( () => {
    blogData.forEach((postObj) => {
    if(postObj.id == id) {
        setPost(postObj);
    }
})
}, [id]);

    return(
        <div className="container-readpost">
           <h1 className="title"> {post.title}</h1>
           <img src={post.ImgURL} className="device-img"/>
           <h2 className="subTitle">{post.subTitle}</h2>
           <p className="readpost-text">{post.content}</p>
           <Link to={`/`}>Go back</Link>
        </div>
    )
}