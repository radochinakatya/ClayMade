import styled from "styled-components";
import logo from "../img/LogoWhite.svg";
import React from 'react';

const FooterBG = styled.div`
  background-color: #282629;
  height: 380px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
    margin-top: 60px;
`
const Footer = () => {
  return (
    <FooterBG>
      <a href="/">
        <Logo src={logo} alt="logo"></Logo>
      </a>
    </FooterBG>
  );
};

export { Footer };
