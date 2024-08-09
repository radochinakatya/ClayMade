import Cross from "../../../img/Cross.svg";
import React from 'react';
import * as Styled from "./StyleFormModal.jsx";

const FormModal = ({ onClose }) => {
  return (
    <Styled.PopupOverlay onClick={onClose}>
      <Styled.Background onClick={(e) => e.stopPropagation()}> {/* вы предотвращаете распространение события к родительским элементам. Это полезно, когда вы хотите изолировать обработку событий на конкретном элементе, не влияя на другие элементы, которые также могут слушать это событие.*/}
        <Styled.CrossButton onClick={onClose}>
          <img src={Cross} alt=""></img>
        </Styled.CrossButton>
        <p>Вы подписались на рассылку, молодец! :3</p>
      </Styled.Background>
    </Styled.PopupOverlay>
  );
};

export { FormModal };
