import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

function Blog() {
  const [allBlog, setAllBlog] = useState([]);

  useEffect(() => {
    const blogUrl = `https://api.spaceflightnewsapi.net/v3/blogs?_limit=20`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAllBlog(result);
      });
  }, []);

  return allBlog.map((blog) => (
    <BlogItem
      id={blog.id}
      key={blog.id}
      imageUrl={blog.imageUrl}
      title={blog.title}
      newsSite={blog.newsSite}
      publishedAt={blog.publishedAt}
      updatedAt={blog.updatedAt}
      summary={blog.summary}
    />
  ));
}

export default Blog;
