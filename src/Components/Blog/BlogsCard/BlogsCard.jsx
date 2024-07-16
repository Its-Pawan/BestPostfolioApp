import React from "react";
import styled from "styled-components";
import GlobelButton from "../../GlobelButton/GlobelButton";
import { MdOutlineTouchApp } from "react-icons/md";

import { Link } from "react-router-dom"; 

const BlogsCard = ({ Image, Title, Desc, PubliseDate,url }) => {


  
  return (
    <SingleBlogCard>
      <div className="card-content flex flex-col md:flex-row  md:gap-8 ">
        <div className="thumbnail-img">
        {Image ? <img src={Image} alt={Title}  /> : <p>No image available</p>}
        </div>
        <div className="thumbnail-content flex flex-col justify-between">
          <div>
            <h3 className="title">
              <Link  to={`/blogs/${url}`}> {Title}</Link>
            </h3>
            <h5 className="publise-date mb-5">{new Date(PubliseDate).toLocaleDateString()}</h5>
            <p className="desc md:pr-6">{Desc}</p>
          </div>
          <div>
            <Link className="inline-block"  to={`/blogs/${url}`}>
              <GlobelButton
                text="Read More"
                icon={<MdOutlineTouchApp size={24} type="button" />}
              />
            </Link>
          </div>
        </div>
      </div>
    </SingleBlogCard>
  );
};

export default BlogsCard;
const SingleBlogCard = styled.div` 
  .card-content {
    border-radius: var(--radius);
    box-shadow: var(--box-shadow);
    padding: 15px;
  }
  .thumbnail-img {
    /* width: 500px; */
    width: 80%;
    aspect-ratio: 16/9;
    border-radius: var(--radius);
    overflow: hidden;
    img{
    border-radius: var(--radius);
    /* height: 100%; */
    object-fit: contain; 
    /* height: 200px; */
    }
  }
  .thumbnail-content {
    width: 50%;
    .title {
      font-weight: 600;
      font-size: var(--font4);
      /* margin: 1rem 0; */
      letter-spacing: 1px;
      transition: var(--smooth-1); 
      color: var(--black);
      &:hover {
        color: #fa5252;
      }
    }
    .desc {
      font-size: var(--font6);
      line-height: 1.8rem;
      letter-spacing: 0.5px;
      color: var(--gray);
    }
    .publise-date {
      padding: 0.3rem .5rem;
      border-radius: 2px;
      background-color: var(--catkrill);
      display: inline-block;
      font-weight: 600;
      margin-top: 15px;
      color: var(--gray);
      box-shadow: var(--box-shadow-dark);
      cursor: default;
    }
    button {
      margin-top: 10px;
      border: 1px solid var(--gray);
      display: flex;
      flex-direction: row-reverse;
      justify-content: start;
      &:hover {
        border-color: transparent;
      }
    }
  }
  @media (max-width: 768px)  {
    .thumbnail-img {
      width: 100%;
    }
    .thumbnail-content {
      width: 100%;
      .title{
        margin-top: 10px;
      }
    }
  }
`;
