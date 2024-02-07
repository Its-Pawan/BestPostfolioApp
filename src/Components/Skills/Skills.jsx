import React from "react";
import styled from "styled-components";

const Skills = ({ img, title, desc }) => {
  return (
    <Skill>
      <div className="icon">
        <img src={img} alt={title} />
      </div>
      <div className="content-info">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Skill>
  );
};

export default Skills;
const Skill = styled.div`
  background-color: var(--catkrill);
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 40px;
  min-height: 250px;
  box-shadow: var(--box-shadow-dark);
  .icon {
    width: 40%;
  }
  .content-info {
    h3 {
      font-size: var(--font7);
      font-weight: 500;
      color: var(--black);
    }
    P {
      color: var(--gray);
      margin-top: 0.8rem;
      font-weight: 400;
      line-height: 25px;
      font-size: var(--font6);
    }
  }
  @media (min-width: 768px) {
    padding: 20px;
    .icon {
      width: 70%;
    }
  }
  @media (min-width: 1100px) {
    padding: 40px;
    .icon {
      width: 40%;
    }
  }
`;
