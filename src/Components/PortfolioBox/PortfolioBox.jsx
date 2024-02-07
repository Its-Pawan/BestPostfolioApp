import React from "react";
import styled from "styled-components";

const PortfolioBox = ({ url, img, tech, title }) => {
  return (
    <SingalPortfolioBox>
      <a href={url} target="_blank">
        <div className="img-div overflow-hidden">
          <img src={img} alt="work-img-2.webp" />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <p>{tech}</p>
          <h6> {title}</h6>
        </div>
      </a>
    </SingalPortfolioBox>
  );
};

export default PortfolioBox;
const SingalPortfolioBox = styled.div`
box-shadow: var(--box-shadow-dark);
  width: 100%;
  min-height: 300px;
  padding: 25px;
  background-color: var(--catkrill);
  border-radius: 15px;
  transition: all 0.2s ease-in;
  .img-div {
    border-radius: 15px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000020 !important;
    }
    img {
      transition: all 0.2s ease-in;
      border-radius: 15px;
      width: 100%;
    }
  }
  p {
    color: var(--gray);
    font-weight: 300;
    font-size: var(--font7);
  }
  h6 {
    color: var(--black);
    font-size: var(--font6);
    font-weight: 500;
  }
  &:hover {
    cursor: pointer;
    .img-div img {
      transform: scale(1.1);
    }
  }
`;
