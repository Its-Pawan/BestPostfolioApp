import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GlobelButton from "../GlobelButton/GlobelButton";
import styled from "styled-components";

const LoginButton = ({ text, icon }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Login
      onClick={() => loginWithRedirect()}
      className="flex items-center gap-2"
    >
      {icon}
      {text}
    </Login>
  );
};

export default LoginButton;

const Login = styled.button`
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
