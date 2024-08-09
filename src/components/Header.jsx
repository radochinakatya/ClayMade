import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import busket from "../img/Busket.svg";
import { useEffect, useState } from "react";
import { SignIn } from "./login/SignIn";

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navbar = styled.div`
  max-width: 1400px;
  display: flex;
  margin: 40px auto 40px auto;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  margin-right: 100px;
`;

const Entrance = styled.li`
  margin-left: 60px;
  cursor: pointer;
`;

const Header = () => {
  
  
  const [modal, setModal] = useState(false);

  useEffect(() => {
  if (modal) {
      document.body.style.overflow = "hidden";
  } else {
      document.body.style.overflow = "auto";
  }
  }, [modal]); // Зависимость от состояния modal

  const toggleModal = () => {
  setModal(!modal);
  };

  return (
      <Navbar>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <Menu>
            <Li>
              <Link to="/">Главная</Link>
            </Li>
            <Li>
              <Link to="/catalog">Магазин</Link>
            </Li>
            <Li>
              <Link to="/delivery">Доставка и оплата</Link>
            </Li>
            <Li>
              <Link to="/about">О нас</Link>
            </Li>
            <li>
              <img src={busket} alt="busket"></img>
            </li>
            <Entrance onClick={toggleModal}>Вход / Регистрация</Entrance>
          </Menu>
          {modal && (
          <SignIn onClose={toggleModal}/>
        )}
      </Navbar>
  );
};

export { Header };
