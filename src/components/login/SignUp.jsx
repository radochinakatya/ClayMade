import React, { useState, useEffect } from "react";
import Cross from "../../img/Cross.svg";
import { SignIn } from "./SignIn.jsx";
import * as Styled from "./StyleSignUp.jsx";

const SignUp = ({ onClose }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const switchToSignIn = () => {
    setShowSignIn(true);
  };

  useEffect(() => {
    if (showSignIn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSignIn]);

  return showSignIn ? (
    <SignIn onClose={onClose} />
  ) : (
    <Styled.PopupOverlay onClick={onClose}>
      <Styled.Background onClick={(e) => e.stopPropagation()}>
        <Styled.CrossButton onClick={onClose}>
          <img src={Cross} alt="Close" />
        </Styled.CrossButton>
        <Styled.PopupContent>
          <Styled.ContentArea>
            <Styled.Text>Email</Styled.Text>
            <Styled.Input
              type="email"
              placeholder="E-mail"
              required
            />
            <Styled.Text>Номер телефона</Styled.Text>
            <Styled.Input
              type="phone"
              placeholder="+7"
              required
            />
            <Styled.Text>Пароль</Styled.Text>
            <Styled.Input
              type="password"
              required
            />
            <Styled.Text>Повторите пароль</Styled.Text>
            <Styled.Input
              type="password"
              required
            />
            <Styled.Buttons>
              <Styled.ButtonStyled>Зарегистрироваться</Styled.ButtonStyled>
              <Styled.OrdinaryButton onClick={switchToSignIn}>
                Войти
              </Styled.OrdinaryButton>
            </Styled.Buttons>
          </Styled.ContentArea>
        </Styled.PopupContent>
      </Styled.Background>
    </Styled.PopupOverlay>
  );
};

export { SignUp };
