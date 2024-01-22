import React from "react";
import "../styles/blog.css";

const Blog = (props) => {
  const { imgs, title, desc, dates, badgen } = props;

  return (
    <>
      <div className="text-ellipsis">
     
<div className="blog-card">
          <img src={imgs} alt="Intro Rpa" />
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="date">{dates}</div>
          <div className="new-badge">{badgen}</div>
        </div>      
       
      </div>
      
    </>
  );
};

export default Blog;
