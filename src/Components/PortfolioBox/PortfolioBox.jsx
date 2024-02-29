import React from "react";
import styled from "styled-components";
import GlobelButton from "../GlobelButton/GlobelButton";
import { IoIosSend } from "react-icons/io";
const PortfolioBox = ({ url, img, tech, title }) => {
  return (
    <SingalPortfolioBox>
      <div className="img-div overflow-hidden">
        <img src={img} alt="work-img-2.webp" />
        <div className="bg-[#00000073] flex absolute  top-0 left-0 h-full w-full flex-col justify-center items-center gap-1 ">
          <h6> {title}</h6>
        </div>
        <div className="overlay flex flex-col gap-4">
          <p>
            <span>Technology Used</span>
            <hr />
            {tech}
          </p>
          <a href={url} target="_blank">
            <GlobelButton text="Visit Website" icon={<IoIosSend size={35} />} />
          </a>
        </div>
      </div>
    </SingalPortfolioBox>
  );
};

export default PortfolioBox;
const SingalPortfolioBox = styled.div`
  box-shadow: var(--box-shadow);
  width: 100%;
  border-radius: 15px;
  transition: all 0.2s ease-in;
  position: relative;
  .img-div {
    border-radius: 15px;
    position: relative;
    img {
      transition: all 0.3s ease-in;
      border-radius: 15px;
      width: 100%;
      aspect-ratio: 16/9;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #141c3a;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font4);
    font-weight: 600;
    border-radius: 15px;
    opacity: 0;
    transition: opacity ease-in 0.3s;
    letter-spacing: 0.2em;
  }
  p {
    color: var(--white);
    font-weight: 600;
    font-size: var(--font6);
    text-align: center;
    span {
      font-size: var(--font7);
    }
  }
  h6 {
    color: var(--white);
    font-size: var(--font4);
    font-weight: 500;
    letter-spacing: 0.1em;
    border: 1px solid var(--white);
    padding: 5px;
    margin: 0 5px;
    border-radius: 3px;
  }
  &:hover {
    .img-div img {
      transform: scale(1.2);
    }
    .overlay {
      opacity: 1;
    }
  }
`;
