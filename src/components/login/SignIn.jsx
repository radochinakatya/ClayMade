import React, { useState, useEffect } from "react";
import Cross from "../../img/Cross.svg";
import { SignUp } from "./SignUp.jsx";
import * as Styled from "./StyleSignIn.jsx";

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const switchToSignUp = () => {
    setShowSignUp(true);
  };

  useEffect(() => {
    if (showSignUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSignUp]);

  return showSignUp ? (
    <SignUp onClose={onClose} />
  ) : (
    <Styled.PopupOverlay onClick={onClose}>
      <Styled.Background onClick={(e) => e.stopPropagation()}>
        <Styled.CrossButton onClick={onClose}>
          <img src={Cross} alt="Close" />
        </Styled.CrossButton>
        <Styled.PopupContent>
          <Styled.ContentArea>
            <Styled.Text>Email / Номер телефона</Styled.Text>
            <Styled.Input
              type="email"
              placeholder="E-mail"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Styled.Text>Пароль</Styled.Text>
            <Styled.Input
              type="password"
              placeholder="Ваш пароль"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Styled.Buttons>
              <Styled.ButtonStyled>Войти</Styled.ButtonStyled>
              <Styled.OrdinaryButton onClick={switchToSignUp}>
                Зарегистрироваться
              </Styled.OrdinaryButton>
            </Styled.Buttons>
          </Styled.ContentArea>
        </Styled.PopupContent>
      </Styled.Background>
    </Styled.PopupOverlay>
  );
};

export { SignIn };
