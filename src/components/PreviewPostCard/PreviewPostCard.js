import React from "react";
import "./PreviewPostCard.css" ; 
import {Link} from "react-router-dom";

export default function PreviewPostCard({id , title, description}) {
    return(
        <>
        
        <div className="post-card">   
        <h2>{title}</h2>
        <p >{description}</p>
        <Link to={`/read/ ${id}`}>Read More</Link>
         </div>
         </>
    )
}