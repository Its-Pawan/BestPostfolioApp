import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Copyright from "../Copyright/Copyright";
import BlogsCard from "./BlogsCard/BlogsCard";
import axios from "axios";

const BlogsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://blog-dby5.onrender.com/api/data"
        );
        // console.log(response.data[0].image);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching the articles", error);
      } finally {
        setLoading(false);
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
            {loading ? (
              <div className="loader h-[50vh] grid place-items-center">
                <div className="spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              <div className="content">
                {articles.length !== 0 ? (
                  <div className="blogs flex flex-col-reverse gap-6">
                    {articles.map((post, id) => (
                      <BlogsCard
                        key={id}
                        url={post.url}
                        Image={`data:${post.image.contentType};base64,${post.image.data}`}
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
            )}
          </div>

          <Copyright />
        </div>
      </div>
    </Blogs>
  );
};

export default BlogsPage;

const Blogs = styled.div`
  
`;
