import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Copyright from "../Copyright/Copyright";
import BlogsCard from "./BlogsCard/BlogsCard";
import axios from "axios";

const BlogsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/data");
        // console.log(response.data[0].image);
        setArticles(response.data); 
      } catch (error) {
        console.error("Error fetching the articles", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Blogs>
      <div className="container">
        <div className="container-box">
          <div className="inner-container">
            <h2 className="global-heading">Blogs</h2>
            <div className="content">
              {articles.length !== 0 ? (
                <div className="blogs grid gap-6">
                  {articles.map((post, id) => (
                    <BlogsCard
                      key={id}
                      index={post._id}
                      Image={`data:image/png;base64,${post.image}`}
                      Title={post.title}
                      Desc={post.description}
                      PubliseDate={post.publishDate} 
                    />
                  ))}
                </div>
              ) : (
                "No Blogs Found"
              )}
            </div>
          </div>

          <Copyright />
        </div>
      </div>
    </Blogs>
  );
};

export default BlogsPage;

const Blogs = styled.div`
  color: red;
`;
