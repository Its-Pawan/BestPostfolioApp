import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Copyright from "../Copyright/Copyright";
import BlogsCard from "./BlogsCard/BlogsCard";
import axios from 'axios';

const BlogsPage = () => {

 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              category: "technology",
              apiKey: "67cc7b4b64b24e7d813b730e60d07439",
              language: "en",
              pageSize: 20,
            },
            
          }
        );
        setArticles(response.data.articles);
        localStorage.setItem('articles', JSON.stringify(response.data.articles));
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
              <div className="blogs grid gap-6"> 
                {articles.map((post, id) => (
                  <BlogsCard
                    key={id}
                    index={id}
                    Image={post.urlToImage}
                    Title={post.title}
                    Desc={post.description}
                    PubliseDate={post.publishedAt}
                    redirectTo={post.url}
                  />
                ))}
              </div>
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
