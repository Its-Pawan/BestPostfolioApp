import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  position: relative;
  height: 7px;
  width: 90%;
  background-color: var(--catkrill);
  border-radius: 5px;
  transition: width 5s ease;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: ${({ $barwidth }) => $barwidth}%;
    background-color: var(${($prop) => $prop.$skillBarColor});
    border-radius: 5px;
    transition: width 0.5s ease;
  }
  .progress-count {
    position: absolute;
    background: var(--gradient);
    color: #fff;
    font-weight: 600;
    /* letter-spacing: 0.2em; */
    font-size: var(--font7);
    border-radius: 20px;
    top: -100%;
    transform: translateY(5%);
    left: calc(${({ $barwidth }) => $barwidth}% - 15px);
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .progress-title {
    position: absolute;
    top: -100%;
    transform: translateY(-100%);
    letter-spacing: 0.3em;
    color: var(--gray);
    font-size: var(--font6);
  }
`;

export default function ProgressBar({
  skillBarLevel,
  skillBarColor,
  skillBarTitle,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < skillBarLevel) {
        setProgress(progress + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <StyledBar $barwidth={progress} $skillBarColor={skillBarColor}>
      <span className="progress-title">{skillBarTitle}</span>
      <span className="progress-count">{progress}%</span>
    </StyledBar>
  );
}
