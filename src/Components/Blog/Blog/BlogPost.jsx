import { useParams } from "react-router-dom";
import styled from "styled-components";
import Copyright from "../../Copyright/Copyright";
import { MdOutlineReadMore } from "react-icons/md";

const BlogPost = () => {
  const { slug } = useParams();
  const posts = JSON.parse(localStorage.getItem("articles"));
  const article = posts[slug];

  if (!posts) {
    return <h1>Post not found</h1>;
  }

  return (
    <Blog>
      <div className="container">
        <div className="container-box">
          <div className="inner-container">
            {/* <h2 className="global-heading">Blog Post</h2> */}
            <div className="content flex">
              <div className="left  w-full md:w-[60%]">
                <div className="blog-header">
                  <div className="blog-thumbnail relative">
                    <img
                      className="rounded-md md:h-[350px]"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                    <p className="publish-date absolute left-3 bottom-3 ">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <h3>{article.title} </h3>
                </div>
                <hr className="my-5" />
                <div className="blog-content">
                  <p>{article.content ? article.content : article.description} </p>
                </div>
                <div className="read-more">
                  <a href={article.url} target="_blank" className="inline-flex gap-1">
                    Read More <MdOutlineReadMore className="inline" size={24} />
                  </a>
                </div>
              </div>
              <div className="right hidden md:flex justify-center items-center   w-[30%] ">
                <img src="/assets/images/loader.gif" alt="" />
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </Blog>
  );
};

export default BlogPost;
const Blog = styled.div`
  .right {
    border-left: 2px solid var(--gray);
    margin-left: 35px;
  }
  .blog-header {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      box-shadow: var(--box-shadow);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.169);
    }
    .publish-date {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.2);
      cursor: default;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      font-weight: 500;
      letter-spacing: 2px;
      color: #fff;
      text-align: center;
      padding: 0.5rem 1rem;
    }
    h3 {
      font-weight: 600;
      font-size: var(--font5);
      margin-top: 1rem;
      color: var(--black);
    }
    
  }
  .blog-content {
    p {
      color: var(--gray);
    }
  }
  .read-more a{
    margin-top: 15px;
      font-size: 18px; 
      align-items: center;
      color: #fa5252;
      &:hover{
        color: #5185d4;
      }
    }
`;
