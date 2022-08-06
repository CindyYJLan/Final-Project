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

  const blogs = allBlog.map((blog) => (
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
  return (
    <div className="flex flex-wrap ml-20 border border-blue-900  border-l-7 border-r-0 border-b-0 border-t-0">
      <div className="w-full pl-10">
        <a
          className="float-left text-2xl underline text-blue-800 font-semibold"
          href="/blog "
        >
          Blogs
        </a>
      </div>
      {blogs}
    </div>
  );
}

export default Blog;
