import React from "react";
import styled from "styled-components";

const GlobelButton = ({ text, icon, type }) => {
  return (
    <UniButton type={type} className="flex items-center gap-2">
      {icon}
      {text}
    </UniButton>
  );
};

export default GlobelButton;

const UniButton = styled.button`
  background: var(--global-btn-bg);
  color: var(--gray);
  border-radius: 8px;
  padding: 0 5px;
  transition: 0.3s;
  height: 40px;
  line-height: 40px;
  transition: all var(--smooth-1);
  font-weight: 500;
  font-size: var(--font1);
  &:hover {
    color: var(--white);
    background: var(--gradient);
  }
  @media (min-width: 1030px) {
    padding: 0 19px;
  }
`;
