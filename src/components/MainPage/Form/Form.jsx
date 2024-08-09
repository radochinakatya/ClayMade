import Arrow from "../../../img/MainPage/InputArrow.svg";
import { useState } from "react";
import { FormModal } from "./FormModal";
import { subscribtionEmail } from "../../../shared/api/email";
import React from 'react';
import * as Styled from "./StyleForm.jsx";

const Form = () => {
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [validation, setValidation] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  const emailValidation = (email) => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regEx.test(email);
  };

  const whenSubmited = (event) => {
    event.preventDefault();
    const isValid = emailValidation(email);
    setValidation(isValid);

    if (email !== '' && isValid) {
      toggleModal();
      console.log('Форма отправлена');
      subscribtionEmail(email);
    } else {
      console.log('Введите действительный адрес электронной почты');
    }
  };

  return (
    <Styled.Rectangle>
      <form onSubmit={whenSubmited}>
        <Styled.InputContent>
          <Styled.EmailText>
            Подпишись на рассылку, чтобы первым узнавать о новых коллекциях
          </Styled.EmailText>
          <Styled.InputPlaceHolder>
            <Styled.Input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              required 
              onChange={(e) => setEmail(e.target.value)}
            />
            <Styled.SubmitButton type="submit">
              <img src={Arrow} alt="Submit"/>
            </Styled.SubmitButton>
            {modal && validation && <FormModal onClose={toggleModal} />}
          </Styled.InputPlaceHolder>
        </Styled.InputContent>
      </form>
    </Styled.Rectangle>
    
  );
};

export { Form };
