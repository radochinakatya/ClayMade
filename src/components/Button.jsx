import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react';

const ButtonStyled = styled.button`
  height: 70px;
  width: 360px;
  font-weight: normal;
  font-size: 24px;
  background-color: white;
  border: 1.5px solid #282629;
  border-radius: 10px;
  color: #282629;
  margin: 0 auto 80px auto;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #282629;
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit; /* Наследовать цвет родительского элемента */
  }
`;

const Button = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ButtonStyled>
        <Link to="/catalog" onClick={scrollToTop}>
          Перейти в каталог
        </Link>
      </ButtonStyled>
    </div>
  );
};

export { Button };
